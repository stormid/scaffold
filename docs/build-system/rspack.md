# Rspack

The Scaffold is based on [Rspack](https://rspack.dev) (a Rust-based, webpack-compatible bundler) and can be extended and customised using Rspack configuration and plugins. Rspack configuration and plugin files are located in the `tools/rspack` folder.

> Note: the build runs on Rspack 2, which requires Node.js 20.19+ or 22.12+ (see `.nvmrc`).

### Configuration
There are three Rspack base configuration files corresponding to three broad categories of file that the scaffold builds:
- JavaScript - for client-side JavaScript
- CSS - for styles, images, and any other static assets
- HTML - for HTML generation from JSX templates

Different types of Rspack build have their own configuration that extend these base configurations:
- Dev - for development using the Rspack dev server with hot module replacement, and unminified assets
- Build - for writing a production optimised static site to disk
- CI - for writing production optimised static assets (minus the static HTML) to disk for integration with a backend

JavaScript and JSX are transpiled with the built-in [SWC](https://swc.rs) loader (`builtin:swc-loader`); JS is minified by Rspack's built-in SWC minifier and CSS by the built-in Lightning CSS minimizer.

### Custom plugins
Three small custom plugins live in `tools/rspack/plugins`:
- `static-site-generator-plugin.js` - evaluates the compiled HTML bundle and renders each page template to a static HTML file.
- `image-minimizer-plugin.js` - optimises emitted image assets with `sharp` (raster) and `svgo` (svg). Replaces `image-minimizer-webpack-plugin`, which is not compatible with Rspack.
- `delete-assets-plugin.js` - removes the throwaway JS bundles produced by the `node`-targeted html and css compilers.

### Entry files
Rspack is a JavaScript bundler and build system, so each configuration requires at least one JavaScript entry file.

The JavaScript build entry files are `src/js/index.js` and `src/js/appinsights/index.js`, as described in [JavaScript ⟶](../making-websites/javascript.md).

The CSS build entry file is `tools/rspack/entry/css.js`.

The HTML build entry file is `tools/rspack/entry/html.js`.

## Next
[Types of build ⟶](./types-of-build.md)
