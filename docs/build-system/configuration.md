# Configuration

The Scaffold is flexible and permits extension and configuration of the build on a number of ways.

## Rspack
Rspack config can be changed in `tools/rspack/config`.

## Entry and output paths
All paths relating to source and destination in the build can be changed in `paths.config.js`.

## Browser support
Browser support targets can be changed in `.browserslistrc`, which the built-in SWC loader reads for JavaScript transpilation. (Tests are transpiled by SWC via `@swc/jest`, configured in the `jest` section of `package.json`.)

If changing to an evergreen-only browser support consider removing the polyfills JavaScript output, and whether the transpilation and bundling steps are necessary at all.

# Jest
Jest configuration can be changed in the `jest` section of the `package.json` file.

## Node
The target node version can be changed in the `.nvmrc` file.

## Oxlint
Lint config can be changed in `.oxlintrc.json`. Run linting with `npm run lint` (or `npm run lint:fix` to auto-fix).


## Next
[Testing ⟶](../testing/index.md)