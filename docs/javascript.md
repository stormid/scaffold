# JavaScript

## 3 output files

There are three entry points files for Webpack that create three corresponding transpiled JavaScript files
1. Main `src/js/modules/main.js` initialises all other modules in the app.
2. Polyfills `src/js/modules/polyfills.js` contains polyfills for older browsers.
3. Head `src/js/head.js` contains the Application Insights script  


### Main
The main script imports an array of functions from the `src/js/index.js` file that comprise the initialisation stack of the app. By default the array of initialisation functions is run in parallel (as much as the single-threaded nature of JavaScript allows), so you cannot wholely depend on execution order of separate modules without changing the promisified initialisation.


### Polyfills
Polyfills add features to browsers that do not support them. Internet Explorer 11 is the main polyfill target in Storm's browser support list.

window.Promise, Object.assign, and window.Fetch are the unsupported language features used most commonly in Storm's frontend codebases.  Responsive images are also polyfilled where required.

ESM JavaScript syntax (e.g. arrow functions, const/let, async/await) that is unsupported in Internet Explorer 11 (and other older browsers) is used for authoring JavaScript in the scaffold. It is transpiled by Webpack and Babel to ES5 during the build so all browsers in our support list understandd it.



### Head
The head script adds adding the client-side Application Insights SDK (https://github.com/Microsoft/ApplicationInsights-JS) to an app that is on a dev or prod environment. Application Insights sends telemetry to Azure to monitor performance and errors in an app, so it is not useful in local development or for prototypes.

The script checks for the presence of an element in the DOM with a `data-ai` attribute (usually a meta tag), and uses the value as the instrumentation key to initialise AppInsights.


## Script loading