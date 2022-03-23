# Creating pages

The Scaffold build system looks in the pages directory (`src/templates/pages`) and compiles static HTML files for each .js template file it finds. The structure of the folders and template names are preserved in the compiled HTML.

JSX is the template language used in the Scaffold. It is compiled using the PreactJS (https://preactjs.com/) framework. 

Note that the Preact component lifecycle runs once to generate an HTML string. If you want to use Preact on the client-side you can create a JavaScript module or microfrontend that returns a component in the `src/js/modules/` directory.
<!-- 
To do:
- add microfrontend example in JS folder
-->

## Templates

Generally three types of template are used.
1. Pages
The entry points for each page in the website - one for each page on the website. The structure of the static build site follows the structure of the pages directory.

Most often the page template will render the `<main>` of the HTML document.

2. Layouts
Define the general structure of the page. Layout templates tend to render the global elements of the page such as the `<header>`, primary `<nav>`, and `<footer`.

Layout templates are useful when a page should have a different overall structure - login pages and error pages for example. 

3. Components
Components are reusable pieces of the interface. If part of the UI appears multiple times across the codebase it is a candidate component.

Components can be composed of smaller sub-components.



## Head attributes and meta data

Adding page title, meta data, editing head...



## Example
A typical page will look something like this:

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