# Example component

The Example component in `src/templates/components/example` is demonstration-only, to document how you might create a fully-featured component with 
- multiple states in a single file - loading, empty, error, and success
- BEM CSS classNames
- a configurable heading level, so the component never dictates the page's document outline
- a test for each state in `src/templates/components/example/__tests__`

## Props

| Prop     | Description                                                                                  |
| -------- | -------------------------------------------------------------------------------------------- |
| href     | destination of the title link                                                                |
| title    | title text                                                                                   |
| summary  | optional summary text                                                                        |
| level    | heading level of the title, Number between 1 and 6, default 2 (rendered via [Heading](./heading.md)) |
| children | child elements, rendered after the summary                                                   |

## Heading levels

A component that can appear more than once on a page must not hardcode `<h1>`, or every instance competes with the page's own heading. `level` defaults to `2` and is passed through to the [Heading](./heading.md) component, so the page keeps a single `<h1>` and you can adjust the component to fit the outline where it is used:

```
<Example href="/news/1" title="Quick brown fox" level={3} />
```