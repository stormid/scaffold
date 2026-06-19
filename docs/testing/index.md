# Tests

Scaffold tests are run using the `npm t` command.

## Jest
The [Jest](https://jestjs.io/) testing framework is included in the Scaffold, and can be used for unit testing JavaScript modules, and snapshot testing JSX and much more.

A snapshot test is included in the Example component in `src/templates/components/example/__tests__`.

[Read the Jest documentation](https://jestjs.io/docs/getting-started) for more information.


## Linting
[Oxlint](https://oxc.rs/docs/guide/usage/linter) is included in the Scaffold. Run it with:

```
npm run lint
```

Use `npm run lint:fix` to auto-fix what it can. The rules are configured in `.oxlintrc.json`.

You will need to config Oxlint in your IDE (e.g. the [VS Code Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)) for lint-based code highlighting and suggestions.