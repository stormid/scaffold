# JavaScript


## Entry files
There are two entry point files for Rspack, each producing a transpiled and compiled JavaScript file of the same name.
1. Index `src/js/index.js` initialises the main modules in the app — built by every build mode
2. AppInsights `src/js/appinsights/index.js` contains the Application Insights script for client-side telemetry — built by the `ci` and `watch` modes only


### Index
The index script is the main script in the application. All other modules (that are not polyfills or Application Insights, see below) are imported and initialised in this script.

Modules imported and used in the index.js file are added to the `src/js/modules` directory.

The generated `<script>` tag for this file is rendered by the Html template component, so it is included in every page of a static build automatically.


### AppInsights
The appinsights script adds the client-side Application Insights SDK (https://github.com/Microsoft/ApplicationInsights-JS). Application Insights sends telemetry to Azure to monitor performance and errors in an app, so it is not useful in local development or for prototypes.

For that reason it is built **only by the `ci` and `watch` builds** — the modes that produce assets for a server-rendered application (see [build modes](../build-system/types-of-build.md)). It is not emitted by `dev` or by the static-site `build`, so those outputs don't carry a ~180KB bundle nothing loads. The entry is declared in `tools/rspack/config/integration/index.js`; move it into `tools/rspack/config/base/javascript.js` if a project genuinely needs it in every mode.

Unlike the index script, nothing in the Scaffold renders a `<script>` tag for it. The server-rendered application is responsible for two things:
1. referencing the built `appinsights.js`, and
2. rendering an element carrying the Application Insights **connection string** in a `data-ai` attribute, usually a meta tag:

```
<meta data-ai="InstrumentationKey=...;IngestionEndpoint=..." />
```

The script reads the value of the first `[data-ai]` element it finds and initialises Application Insights with it. If no such element is present it does nothing, so it is safe to include on pages where telemetry is not configured.


## Authoring 

### ESM syntax
JavaScript is authored in ESM syntax (i.e. arrow functions, const/let, async/await, import/export) and is transpiled by Rspack's built-in SWC loader based on the .browserslistrc. (Tests are transpiled by SWC too, via the loader hook in `tools/testing`.)

Not all ESM language features are automatically transpiled, some have to be polyfilled. If in doubt, check the browser support list and the transpiled output file.


### Constants
Constant variables, magic Strings, selectors, configuration and settings values should be declared once close to where they are used. If used across multiple modules they should be declared in the `src/js/constants/index.js` file.


### JSX
The HTML templating is based on JSX using PreactJS, so JSX transpilation is included in the Scaffold and therefore JSX (and PreactJS) can be used in JavaScript files.


## Next
[Assets ⟶](./assets.md)