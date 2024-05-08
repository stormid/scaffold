# Styling

The Scaffold is set up to generate a CSS file `index.css` from the SCSS entry point `src/css/index.scss`.

There are intentionally few existing styles, instead a few defaults are included. Though the Scaffold supports the full gamut of SCSS, by convention we aim to write SCSS in a way that is close to standard CSS.

## Conventions
- use minimal nesting, to keep specificity low and readability/maintainability high
- use classNames as much as possible, to keep specificity low
- use a BEM methodology for class naming
- use CSS variables not SCSS variables, for easier debugging and interop with JavaScript and DOM
- use mixins sparingly, they can generate a lot of repeat CSS
- use flexbox for layout, CSS Grid is not included in our browser support matrix

## Structure
SCSS partials are organised by type

- abstracts
  - constants - the fundamental design tokens of the UI
  - functions - SCSS helper functions
  - mixins - SCSS mixins
- base
  - grid - the base grid system with utility grid classes
  - normalise - for normalising browser default styles
  - typefaces
  - typescale  
- components - the basic blocks of the UI
- vendor - thrid party styles

## CSS variables

The fundamental tokens of the user interface should be defined in `src/css/abstracts/_constants.scss`. These should include
- colours
- vertical and horizontal spacing (baseline and gutter)
- typefaces
- typographic scale


## Grid
The grid system is based on constants defined in the `src/css/abstracts/_constants.scss` file. By default a 12 column grid with 24px horizontal spacing, and 1.5rem vertical spacing.

Breakpoints and their corresponding classNames are defined by the $mq-breakpoints, $grid-names and $grid-classes variables.

There are two ways to use the grid system
- use the classNames generated in `src/css/base/_grid.scss`
- use the column calculation helper function

### Grid classNames
A `.grid` containing element will set up a CSS grid.

Each child element should have a `.col` className to indicate that it should be a column, with one or more column size classNames to indicate width at different breakpoints.

Based on the default 12 column grid, 1 column will be 1/12th of the width of the containing element, 12 columns the full width.

#### Examples
Single row, with two element, full screen on small screens, two-up at the medium breakpoint and up
```
<div class="grid">
    <div class="col xs-12 md-6"></div>
    <div class="col xs-12 md-6"></div>
</div>
```

Multiple rows, elements full screen on small screens, two-up at the medium breakpoint, three-up at the large breakpoint and up
```
<div class="grid">
    <div class="col xs-12 md-6 lg-4"></div>
    <div class="col xs-12 md-6 lg-4"></div>
    <div class="col xs-12 md-6 lg-4"></div>
    <div class="col xs-12 md-6 lg-4"></div>
    <div class="col xs-12 md-6 lg-4"></div>
    <div class="col xs-12 md-6 lg-4"></div>
</div>
```
### Column calcultion function
Grid classNames are generated using the column calculation function.  A number of these are included by default, and these can be added or removed by updating the $grid-classes variable in `src/css/abstracts/_constants.scss` 

```

## PostCSS
The Scaffold uses PostCSS to post-process compiled CSS to add language features to support legacy browsers. In particular

- autoprefixer - adds vendor prefixes to CSS rules
- postcss-custom-properties - adds fallback rules for browsers that do not support CSS variables

Post-processing is based on the supported browser list defined in `.browserslistrc`. 


## Next
[JavaScript ⟶](./javascript.md)