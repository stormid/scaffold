# Heading component

The Heading component is an abstraction over h1-h6 elements. The main advantage of the component is to codify the solution to the [VoiceOver screenreader bug when a heading contains child elements](https://github.com/stormid/scaffold/issues/98).

## Props

| Prop      | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| children  | child elements, [any phrasing content is permitted](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) |
| level     | the heading level, Number between 1 and 6, default 1                                                                    |
| className | the heading element className                                                                                           |
