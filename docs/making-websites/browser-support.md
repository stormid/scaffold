# Browser support
Scaffold browser support follows the Storm ID default browser support list. This includes, most notably, support for Internet Explorer 11.

Browser support constrains the JavaScript and CSS language features that can be used in a website, but to some extent that can be mitigated.

JavaScript authored in ESM syntax is transpiled to legacy-compatible ES5 by Webpack and Babel. PostCSS post-processes CSS based to add vendor prefixes and CSS variable fallbacks. 

Both of these transformations use the `.browserslist.rc` file to define target browsers.

Unsupported JavaScript that cannot be transpiled can be (polyfilled)['./javascript.md#Polyfills] using the `src/js/modules/polyfills.js` file.


## Next
[Webpack ⟶]('../build-system/webpack.md')