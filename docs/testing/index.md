# Tests

Scaffold tests are run using the `npm t` command.

## Test runner
Tests run on Node's built-in [test runner](https://nodejs.org/api/test.html) — `node:test` for the test API and `node:assert` for assertions — with no separate testing framework or dependency. The `test` script is:

```
node --import ./tools/testing/register.mjs --test
```

`tools/testing/register.mjs` registers a small SWC-based module loader (`tools/testing/loader.mjs`). Node can't run the project's source as-authored, and its module resolution isn't the build's, so the loader closes both gaps — a module under test should behave the same way it behaves in a bundle.

### What the loader does

**Transforms JSX.** Applies to `.js` files under the source directory, which is read from `paths.config.js` (`source`, `src` by default) — if a project authors JSX somewhere else, add it to `SOURCE_ROOTS` in the loader. Files under `tools/` are deliberately *not* transformed: they're CommonJS, and the build runs them directly. `.mjs` is never transformed.

**Resolves the build's path aliases** — `@templates` / `@layouts` / `@components`, plus a test-only `@testing` for shared helpers — along with extensionless and directory-index imports, matching rspack's defaults (`resolve.extensions` `['.js', '.json']`, `mainFiles` `['index']`).

**Resolves extensionless imports into packages.** Node does no extension search for a deep subpath into a package that has no `exports` map; rspack does. So `import checkboxes from '@scottish-government/design-system/all/components/checkbox/checkboxes'` works in a test exactly as it does in the build. A subpath a package's `exports` map deliberately withholds still fails, in both.

**Gives CommonJS the bundler's `__esModule` interop.** A CommonJS dependency compiled by SWC, Babel or TypeScript marks itself with `__esModule` and puts the real export on `default`. Rspack unwraps that; native ESM doesn't, and hands over the whole `module.exports` instead. The loader unwraps it too, so `import component from '…'` is the same value in a test as in the build — without this the two diverge silently, which is how you end up "fixing" a source file with `.default` and breaking the build. Such a module shows up in stack traces with a `?cjs-interop` suffix; that's expected, not a bug.

One known divergence remains: the build's `mainFields` prefers a package's `module` entry where Node prefers `main`, so e.g. `@stormid/toggle` is `dist/index.modern.js` in the build and `dist/index.js` under test.

### Where tests live

Tests live in `__tests__` directories next to the code they cover, and are picked up anywhere in the project:
- `src/templates/components/example/__tests__` - component rendering
- `tools/utils/__tests__` and `tools/rspack/plugins/__tests__` - the build system's own logic (config merging, the page-list scan, and the route-to-filename mapping that gives pages their URLs)
- `tools/testing/__tests__` - the loader itself, covering each of the behaviours above

Component tests render each state to an HTML string with `preact-render-to-string` and assert on it directly:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { render } from 'preact-render-to-string';
import { Empty } from '../index.js';

test('Example > Empty renders an empty element', () => {
    assert.equal(render(<Empty />), '<div class="example example--empty"></div>');
});
```

[Read the Node.js test runner documentation](https://nodejs.org/api/test.html) for more information.


## Linting
[Oxlint](https://oxc.rs/docs/guide/usage/linter) is included in the Scaffold. Run it with:

```
npm run lint
```

Use `npm run lint:fix` to auto-fix what it can. The rules are configured in `.oxlintrc.json`.

You will need to config Oxlint in your IDE (e.g. the [VS Code Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)) for lint-based code highlighting and suggestions.
