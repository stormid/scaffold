# JavaScript


## Entry files
There are three entry points files for Webpack that create three corresponding transpiled and compiled JavaScript files of the same name.
1. Index `src/js/index.js` initialises all other modules in the app.
2. Polyfills `src/js/modules/polyfills.js` contains polyfills for older browsers.
3. Head `src/js/head.js` contains the Application Insights script  


### Index
The index script is the main script in the application. All other modules (that are not polyfills or Application Insights, see below) are imported and initialised in this script.

Modules imported and used in the index.js file are added to the `src/js/modules` directory.


### Polyfills
Polyfills add features to browsers that do not support them. Internet Explorer 11 is the main polyfill target in Storm's browser support list.

window.Promise, Object.assign, and window.Fetch are the unsupported language features used most commonly in Storm's frontend codebases.  Responsive images are also polyfilled where required.

The compiled polyfills file is imported into a scaffolded app via a script tag with the nomodule attribute, so that only browsers that do not understand the attribute (https://caniuse.com/?search=nomodule) load it. 


### Head
The head script adds adding the client-side Application Insights SDK (https://github.com/Microsoft/ApplicationInsights-JS) to an app that is on a dev or prod environment. Application Insights sends telemetry to Azure to monitor performance and errors in an app, so it is not useful in local development or for prototypes.

The script checks for the presence of an element in the DOM with a `data-ai` attribute (usually a meta tag), and uses the value as the instrumentation key to initialise AppInsights.


## Authoring 

### ESM syntax
JavaScript is authored in ESM syntax (i.e. arrow functions, const/let, async/await, import/export) and is transpiled by Webpack and Babel based on the Babel config and browserlist into ES5 during the build so all browsers in our support list (particular Internet Explorer 11) can parse it.

Not all ESM language features are automatically transpiled, some have to be polyfilled (see above), and not all polyfills are included in the scaffold by default. Some, for example Array.from and newer array methods, and for...of, require additional polyfills.

If in doubt, check the browser support list and the transpiled output file.


### Constants
Constant variables, magic Strings, selectors, configuration and settings values should be declared once close to where they are used. If used across multiple modules they should be declared in the `src/js/constants/index.js` file.


### JSX
The HTML templating is based on JSX using PreactJS, so JSX transpilation is included in the scaffold and therefore JSX (and PreactJS) can be used in JavaScript files.

<!-- TO do: example microfrontend -->