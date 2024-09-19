# JavaScript


## Entry files
There are two entry points files for Webpack that create two corresponding transpiled and compiled JavaScript files of the same name.
1. Index `src/js/index.js` initialises the main modules in the app
2. AppInsights `src/js/appinsights/index.js` contains the Application Insights script for client-side telemetry


### Index
The index script is the main script in the application. All other modules (that are not polyfills or Application Insights, see below) are imported and initialised in this script.

Modules imported and used in the index.js file are added to the `src/js/modules` directory.


### AppInsights
The appinsights script adds adding the client-side Application Insights SDK (https://github.com/Microsoft/ApplicationInsights-JS). Application Insights sends telemetry to Azure to monitor performance and errors in an app, so it is not useful in local development or for prototypes.

The script checks for the presence of an element in the DOM with a `data-ai` attribute (usually a meta tag), and uses the value as the instrumentation key to initialise AppInsights.


## Authoring 

### ESM syntax
JavaScript is authored in ESM syntax (i.e. arrow functions, const/let, async/await, import/export) and is transpiled by Webpack and Babel based on the Babel config and .browserslistrc.

Not all ESM language features are automatically transpiled, some have to be polyfilled. If in doubt, check the browser support list and the transpiled output file.


### Constants
Constant variables, magic Strings, selectors, configuration and settings values should be declared once close to where they are used. If used across multiple modules they should be declared in the `src/js/constants/index.js` file.


### JSX
The HTML templating is based on JSX using PreactJS, so JSX transpilation is included in the Scaffold and therefore JSX (and PreactJS) can be used in JavaScript files.


## Next
[Assets ⟶](./assets.md)