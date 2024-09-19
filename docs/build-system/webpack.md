# Webpack

The Scaffold is based on Webpack 5 and can be extended and customised using Webpack configuration and plugins. Webpack plugin and configuration files are located in the `tools/webpack` folder.

### Configuration
There are three Webpack base configuration files corresponding to three broad categories of file that the scaffold builds:
- JavaScript - for client-side JavaScript
- CSS - for styles, images, and any other static assets
- HTML - for HTML generation from JSX templates

Different types of Webpack build have their own configuration that extend these base configurations:
- Dev - for development using webpack devserver with hot reloading, and unminified assets
- Build - for writing a production optimised static site to disk
- CI - for writing production optimised static assets (minus the static HTML) to disk for integration with a backend

### Entry files
Webpack is a JavaScript bundler and build system, so each configuration requires at least one JavaScript entry file.

The JavaScript build entry files are `src/js/index.js` and `src/js/appinsights/index.js`, as described in  [Types of build ⟶](../making-websites/javascript.md).

The CSS build entry file is `tools\webpack\entry\css.js`.

The HTML build entry file is `tools\webpack\entry\html.js`.

## Next
[Types of build ⟶](./types-of-build.md)