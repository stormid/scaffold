# Configuration

The Scaffold is flexible and permits extension and configuration of the build on a number of ways.

## Rspack
Rspack config can be changed in `tools/rspack/config`.

## Entry and output paths
All paths relating to source and destination in the build can be changed in `paths.config.js`.

## Browser support
Browser support targets can be changed in `.browserslistrc`. The built-in SWC loader reads it for JavaScript transpilation, and the CSS build derives its Lightning CSS targets (prefixing and syntax downleveling) from it.

If changing to an evergreen-only browser support consider removing the polyfills JavaScript output, and whether the transpilation and bundling steps are necessary at all.

## Testing
Tests run on the Node.js built-in test runner — see [Testing](../testing/index.md). The `test` command and its SWC loader hook live in `tools/testing`.

## Node
The target node version can be changed in the `.nvmrc` file. The minimum supported version is enforced separately by the `engines` field in `package.json` — change both together.

## Oxlint
Lint config can be changed in `.oxlintrc.json`. Run linting with `npm run lint` (or `npm run lint:fix` to auto-fix).


## Next
[Testing ⟶](../testing/index.md)