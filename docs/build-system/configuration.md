# Configuration

The Scaffold is flexible and permits extension and configuration of the build on a number of ways.

## Webpack
Webpack config can be changed in `tools/webpack/config`.

## Entry and output paths
All paths relating to source and destination in the build can be changed in `paths.config.js`.

## Browser support
Browser support targets can be changed in `.browserslistrc` for JavaScript and CSS transpilation, `babel.config.js` for JavaScript transpilation, and `postcss.config.js` for CSS post-processing.

If changing to an evergreen-only browser support consider removing the polyfills JavaScript output, and whether the transpilation and bundling steps are necessary at all.

# Jest
Jest configuration can be changed in the `jest` section of the `package.json` file.

## Node
The target node version can be changed in the `.nvmrc` file.

## ESlint
ESlint config can be changed in `.eslintrc`.


## Next
[Testing ⟶](../testing/index.md)