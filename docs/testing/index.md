# Tests

Scaffold tests are run using the `npm t` command.

## Jest
The [Jest](https://jestjs.io/) testing framework is included in the Scaffold, and can be used for unit testing JavaScript modules, and snapshot testing JSX and much more.

A snapshot test is included in the Example component in `src/templates/components/example/__tests__`.

[Read the Jest documentation](https://jestjs.io/docs/getting-started) for more information.

## Accessibility
[jest-axe](https://github.com/nickcolley/jest-axe#readme) is included in the Scaffold. It is a Jest matcher for [axe-core](https://github.com/dequelabs/axe-core), the accessibility testing engine used in Lighthouse, Webhint.io, Accessibility Inights for Web amongst others.

A general accessibility test ("expect no violations") on each rendered HTML document from the `src/templates/pages` directory is include in `__tests__accessibility`.


## Linting
ESlint is included in the Scaffold, as is the opinionated [@stormid/eslint-config](https://github.com/stormid/eslint-config).

You will need to config ESlint in your IDE (e.g. the VS Code ESLint extension) for lint-based code highlighting and suggestions.

Linting can be manually run with the command `npm run lint`.

