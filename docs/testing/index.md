# Tests

Scaffold tests are run using the `npm t` command.

## Test runner
Tests run on Node's built-in [test runner](https://nodejs.org/api/test.html) — `node:test` for the test API and `node:assert` for assertions — with no separate testing framework or dependency. The `test` script is:

```
node --import ./tools/testing/register.mjs --test
```

`tools/testing/register.mjs` registers a small SWC-based module loader (`tools/testing/loader.mjs`) so that source and test files can:
- use JSX, transformed with the same automatic Preact JSX runtime as the build, and
- import via the `@templates` / `@layouts` / `@components` path aliases.

Tests live in `__tests__` directories next to the code they cover, and are picked up anywhere in the project:
- `src/templates/components/example/__tests__` - component rendering
- `tools/utils/__tests__` and `tools/rspack/plugins/__tests__` - the build system's own logic (config merging, the page-list scan, and the route-to-filename mapping that gives pages their URLs)

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
