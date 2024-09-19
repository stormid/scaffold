# Styling

The Scaffold is set up to generate a CSS file `index.css` from the SCSS entry point `src/css/index.scss`.

There are intentionally few existing styles, only a few defaults are included. Though the Scaffold supports the full gamut of SCSS, by convention we aim to write SCSS in a way that is close to standard CSS.

## Conventions
- use minimal nesting, to keep specificity low and readability/maintainability high
- use single classNames for selectors as much as possible to keep specificity low
- use a BEM methodology for class naming
- use CSS variables not SCSS variables, for easier debugging and interop with JavaScript and DOM
- use mixins sparingly, they can generate a lot of repeat CSS
- use CSS grid for two dimensional layout, flexbox for one dimensional layout

## Structure
SCSS partials are organised by type

- abstracts
  - constants - the fundamental design tokens of the UI
  - mixins - SCSS mixins
- base
  - grid - the base grid system with utility grid classes
  - normalise - for normalising browser default styles
  - typefaces
  - typescale  
- components - the basic blocks of the UI
- vendor - third party styles

## CSS variables

The fundamental tokens of the user interface should be defined in `src/css/abstracts/_constants.scss`. These should include
- colours
- vertical and horizontal spacing (baseline and gutter)
- typefaces
- typographic scale


## Grid
The Scaffold grid system is implemented using CSS grid.

The grid system is based on constants defined in the `src/css/abstracts/_constants.scss` file. By default a 12 column grid with 24px horizontal spacing, and 1.5rem vertical spacing.

Breakpoints and their corresponding classNames are defined by the $mq-breakpoints, $grid-names and $grid-classes variables.

### Grid classNames
A `.grid` containing element will set up a CSS grid.

Each child element should have one or more utility column size class names to indicate width at different breakpoints.

Based on the default 12 column grid, 1 column will be 1/12th of the width of the containing element, 12 columns the full width.

Grid utility class names are generated using a mixin.  A number of utility classes are included by default.  These can be adjusted by updating the $grid-classes variable in `src/css/abstracts/_constants.scss` to give a more targeted list based on project requirements.

#### Examples
Single row with two elements, they are full width on on two rows on small screens, two-up on one row at the medium breakpoint and up
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

## Next
[JavaScript ⟶](./javascript.md)