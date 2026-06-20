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

A test is included in the Example component at `src/templates/components/example/__tests__`. Each state is rendered to an HTML string with `preact-render-to-string` and asserted directly:

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
