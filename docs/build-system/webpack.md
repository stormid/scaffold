# Webpack

The Scaffold is based on Webpack 4 and can be extended and customised using Webpack configuration and plugins. Webpack plugin and  configuration files are located in the `tools/webpack` folder.

### Configuration
There are three Webpack base configuration files corresponding to three broad categories of file that the scaffold builds:
- JavaScript - for the main JavaScript file
- Polyfills - for the polyfills script that is conditionally loaded using the nomodule pattern
- Main - everything else, including HTML generation from JSX templates, compiling SCSS to CSS, image optimisation and copying, and copying other static assets (e.g. fonts)

Different types of Webpack build have their own configuration that extend these base configurations:
- Dev - for development using webpack devserver with hot reloading, and unminified assets
- Build - for writing a production optimised static site to disk
- CI - for writing production optimised static assets (minus the static HTML) to disk, post-integration with a dotnet backend


## Next
[Types of build ⟶](./types-of-build.md)