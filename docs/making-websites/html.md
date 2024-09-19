# Creating pages

The Scaffold build system looks in the pages directory (`src/templates/pages`) and compiles static HTML files for each .js template file it finds. The structure of the folders and template names are preserved in the compiled HTML.

HTML templates are authored in JSX in the Scaffold, and compiled using the PreactJS (https://preactjs.com/) framework. 

<b>Note</b> the component lifecycle only runs once during the Scaffold build to generate an HTML string - similar to server-side rendering. If you want to use Preact on the client-side you can create a JavaScript module or microfrontend in the `src/js/modules/` directory.

## Templates

Generally three types of template are used.

### Pages
Page templates are the entry points for each page in the website - one for each page on the website. The structure of the static build site follows the structure of the pages directory.

Most often the page template will render the content of the `<main>` of the HTML document.

The Scaffold expects the Page content to be returned in the default export - see the example below.

### Layouts
Layout templates define the general structure of the page. Layout templates tend to render the global elements of the page such as the `<header>`, primary `<nav>`, and `<footer`. Page templates are rendered as children of the layout template - see the example below.

Different layout templates are useful when a page should have a different overall structure - login pages and error pages for example. 

### Components
Components are reusable pieces of the interface. If part of the UI appears multiple times across the codebase it is a candidate component.

Components can be composed of smaller sub-components.

There are a few default and helper components in with the scaffold, including
- [Image](./components/image.md) - an abstraction over responsive images using the picture tag
- [Heading](./components/heading.md) - a screen reader optimised abstraction over h1-h6 tags
- [Example](./components/example.md) - a fully featured demo component


## Data

Data and content can be imported into a Page in a number of ways
- from a JSON file imported by the Page .js file
- from a MarkDown file imported by the Page .js file (requires a JSX/Markdown parser to be installed)
- from an asynchronous data source, such as an external API (requires returning a Promise from the default Page function).


## Head

Title and meta tags can be added to a Page using named exports.

### Title
To add a Page-specific title, export a String called 'title' from a Page .js file:

```
export const title = 'My Page Title';
```

### Meta tags
To add Page-specific meta tags export an Array of meta Objects from a Page .js file. A meta Object consists of a 'content' property, and either a 'name' or 'property' property:

```
export const meta = [
    { name: 'description', content: 'My page description' },
    { property: 'og:title', content: 'My Page Title' },
    { property: 'og:image', content: '/static/img/og-image.png' }
];
```

The `<head>` element is itself a component, it can be edited in `src/templates/components/head`.

## Aliases
Webpack allows you to define aliases that can be used for a path to a resource, rather than having to use relative paths that change if files move around.

Aliases for JSX imports are set in  `tools\webpack\config\base\html.js`. The default aliases define paths to commonly used HTML template directories:

```
'@templates': path.join(process.cwd(), 'src/templates/'),
'@layouts': path.join(process.cwd(), 'src/templates/layouts'),
'@components': path.join(process.cwd(), 'src/templates/components')
```

This allows importing of components without a relative or absolute path, e.g.

```
import DefaultLayout from @layouts/default;
import Card from @components/card;
```

## Full example
```
import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import { List, Item } from '@components/List';

export const title = 'Example';

export const meta = [{
    name: 'My example page',
    content: 'My example page'
}];

const Example = () => <DefaultLayout>
    <List>
        <Item type="type-1">One</Item>
        <Item type="type-2">Two</Item>
        <Item type="type-3">Three</Item>
    </List>
</DefaultLayout>;

export dafault Example;

```


## Next
[Styling ⟶](./css.md)