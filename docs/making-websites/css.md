# Styling

The Scaffold is set up to generate a CSS file `index.css` from the entry point `src/css/index.css`. Styles are authored in **plain CSS** by default — the entry file pulls in the partials with `@import`, and `css-loader` inlines them into the single output file.

There are intentionally few existing styles, only a few defaults are included.

## Conventions
- use minimal nesting, to keep specificity low and readability/maintainability high
- use single classNames for selectors as much as possible to keep specificity low
- use a BEM methodology for class naming
- use CSS custom properties (variables) for design tokens, for easier debugging and interop with JavaScript and the DOM
- use CSS grid for two dimensional layout, flexbox for one dimensional layout

## Structure
The CSS partials are plain `.css` files, imported by `src/css/index.css` and organised by type

- abstracts
  - constants - the fundamental design tokens of the UI
- base
  - normalise - vendored [modern-normalize](https://github.com/sindresorhus/modern-normalize), normalising browser default styles
  - reset - small project base styles and opinionated, accessibility-minded resets (imported after normalise)
  - grid - the base grid system with utility grid classes
  - typefaces
  - typescale - for applying the type scale to elements (the scale tokens themselves live in `abstracts/constants`)
  - utility
- components - the basic blocks of the UI

To add a new partial, create the `.css` file and add an `@import` for it in `src/css/index.css`.

## CSS variables

The fundamental tokens of the user interface are defined as CSS custom properties on `:root` in `src/css/abstracts/constants.css`. These include
- colours
- vertical and horizontal spacing (`--baseline` and `--gutter`)
- typefaces
- typographic scale (`--font-size-*`)
- breakpoints (`--bp-*`)


## Grid
The Scaffold grid system is implemented using CSS grid.

The grid is based on the tokens defined in `src/css/abstracts/constants.css` (the `--gutter` and `--baseline` custom properties control the column and row gaps). The utility classes themselves live in `src/css/base/grid.css`. By default a 12 column grid with a 24px horizontal gutter and a 1.5rem vertical baseline.

Breakpoints are defined as `--bp-*` custom properties in `constants.css`. Note that custom properties can't be used inside media query conditions, so the breakpoint pixel values are written directly in the `@media` rules in `grid.css` — adjust both if you change the breakpoints.

### Grid classNames
A `.grid` containing element will set up a CSS grid.

Each child element should have one or more utility column size class names to indicate width at different breakpoints.

Based on the default 12 column grid, 1 column will be 1/12th of the width of the containing element, 12 columns the full width.

Grid utility class names are written by hand in `src/css/base/grid.css`. A number of classes are included by default; add or remove classes there to suit project requirements.

A `.wrap` class is also provided to constrain content to `--max-container-width` and centre it.

#### Examples
Single row with two elements, they are full width on two rows on small screens, two-up on one row at the medium breakpoint and up
```
<div class="grid">
    <div class="xs-12 md-6"></div>
    <div class="xs-12 md-6"></div>
</div>
```

Multiple rows, elements are full width on separate rows on small screens, two per-row at the medium breakpoint, and three per-row at the large breakpoint and up
```
<div class="grid">
    <div class="xs-12 md-6 lg-4"></div>
    <div class="xs-12 md-6 lg-4"></div>
    <div class="xs-12 md-6 lg-4"></div>
    <div class="xs-12 md-6 lg-4"></div>
    <div class="xs-12 md-6 lg-4"></div>
    <div class="xs-12 md-6 lg-4"></div>
</div>
```

## Using SCSS (optional)
SCSS is not used by default, but support is available if a project needs it. Uncomment the `sass-loader` block in `tools/rspack/config/base/css.js`, install `sass-embedded` (`npm i -D sass-embedded`), and author partials as `.scss` files. When using SCSS, prefer CSS custom properties over SCSS variables where possible, and use mixins sparingly as they can generate a lot of repeated CSS.


## Next
[JavaScript ⟶](./javascript.md)
