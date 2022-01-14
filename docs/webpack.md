# Webpack

The Scaffold is based on Webpack 4 and can be extended and customised using Webpack configuration and plugins. Webpack plugin and  configuration files are located in the `tools/webpack` folder.


### Configuration
There are three webpack base configuration files corresponding to three broad categories of file that the scaffold builds:
- JavaScript - for the main JavaScript file
- Polyfills - for the polyfills script that is conditionally loaded using the nomodule pattern
- Main - everything else, including HTML generation from JSX templates, compiling SCSS to CSS, image optimisation and copying, copying other static assets (e.g. fonts)

There are three main types or modes of build, each with their own configuration that extend these base configurations:
- Dev
- Build
- CI