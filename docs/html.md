# Creating pages

The Scaffold build system looks in the pages directory (`src/templates/pages`) and compiles static HTML files for each JSX .js template file it finds. The structure of the folders and template names are preserved in the compiled HTML.

JSX is the template language used in the Scaffold. It is compiled using the PreactJS (https://preactjs.com/) framework. 

<div style="padding: 12px; background-color: rgba(255,255,255, .1);color: #191919">
<b>Note</b> the component lifecycle only runs once during the scaffold build to generate an HTML string - similar to server-side rendering. If you want to use Preact on the client-side you can create a JavaScript module or microfrontend in the `src/js/modules/` directory.
</div>

<!-- 
To do:
- add microfrontend example in JS folder
-->

## Templates

Generally three types of template are used.
### Pages
The entry points for each page in the website - one for each page on the website. The structure of the static build site follows the structure of the pages directory.

Most often the page template will render the `<main>` of the HTML document.

The Scaffold expects the Page content to be returned in the default export - see the example below.

### Layouts
Define the general structure of the page. Layout templates tend to render the global elements of the page such as the `<header>`, primary `<nav>`, and `<footer`.

Layout templates are useful when a page should have a different overall structure - login pages and error pages for example. 

### Components
Components are reusable pieces of the interface. If part of the UI appears multiple times across the codebase it is a candidate component.

Components can be composed of smaller sub-components.

## Data

Data and content can be imported into a Page in a number of ways
- from a JSON file imported by the Page .js file
- from a MarkDown file imported by the Page .js file (requires a JSX/Markdown parser to be installed)
- from an asynchronous data source, such as an external API (requires returning a Promise from the default Page function).


## Head elements

Title and meta tags can be added to a Page using named exports.

### Title
To add a Page-specific title, export a String called 'title' from a Page .js file:

```
export const title = 'My Page Title';
```

## Aliases
Webpack allows you to define aliases that can be used for a path to a resource, rather than having to use relative paths that change if files move around.

Aliases for JSX imports are set in  `tools\webpack\config\base\main.js`. The default aliases define paths to comomonly used HTML template directories:

```
'@templates': path.join(process.cwd(), 'src/templates/'),
'@layouts': path.join(process.cwd(), 'src/templates/layouts'),
'@components': path.join(process.cwd(), 'src/templates/components')
```

Allows importing of components without a relative or absolute path, e.g.

```
import DefaultLayout from @layouts/default;
import Card from @components/card;
```


### Meta tags
To add Page-specific meta tags export an Array of meta Objects from a Page .js file. A meta Object consists of a content property, and either a name or property property:

```
export const meta = [
    { name: 'description', content: 'My page description' },
    { property: 'og:title', content: 'My Page Title' },
    { property: 'og:image', content: '/static/img/og-image.png' }
];
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
[Styling ⟶]('./css.md')