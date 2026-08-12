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
  - typescale - applies the type scale to headings, and the vertical rhythm to blocks of running text (the tokens themselves live in `abstracts/constants`)
  - utility - single-purpose helper classes
- components - the basic blocks of the UI

To add a new partial, create the `.css` file and add an `@import` for it in `src/css/index.css`.

### Typefaces
The project typeface is the `--font-family-default` token in `abstracts/constants`, applied to `body` in `base/reset`. It defaults to the system UI font stack, so text renders in the host operating system's own interface font and no webfont is downloaded. To use a custom typeface, add a partial with your `@font-face` rules (see [Assets](./assets.md) for where to put the font files) and point the token at it.

### Headings and vertical rhythm
`base/typescale` sizes `h1`-`h3` from the type scale. `h4`-`h6` share the body size on purpose — the √2 scale has no steps between `1rem` and `1.414rem` — and are distinguished by weight. If a design needs six visually distinct levels, add steps to the scale in `abstracts/constants` rather than hardcoding sizes.

Headings and blocks of running text (`p`, lists, `figure`, `table`, `blockquote`, `pre`) are spaced in multiples of `--baseline` rather than the browser's `em`-based defaults, so spacing stays consistent regardless of font-size. Headings take a larger gap above, except when they open their container. That last rule is wrapped in `:where()` to keep it at class-level specificity, so a component can set its own heading margins without having to out-specify the base styles.

### Utilities
`base/utility` provides:

| Class                | Purpose                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `.visually-hidden`   | hides content visually but keeps it in the accessibility tree, for screen reader-only text |
| `.measure`           | constrains prose to `--measure` (~40em), a comfortable line length for reading            |
| `.push-top`          | one `--baseline` of space above (`--half` variant for half)                               |
| `.push-bottom`       | one `--baseline` of space below (`--half` and `--double` variants)                        |

Note that `.wrap` constrains content to 1200px, which is much wider than is comfortable to read — apply `.measure` to any long-form prose container.

### Focus styles
`base/reset` draws the keyboard focus indicator with `--highlight`, defined in `abstracts/constants`. WCAG 2.2 SC 1.4.11 requires a focus indicator to contrast at least 3:1 with the colours next to it, so if you retint `--highlight` for a project, check it against both the page background and any component backgrounds it will appear on.

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
