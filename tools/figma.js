const SECRET = require('./secret');
const fetch = require('node-fetch');
const fse = require('fs-extra');
const path = require('path');
const NODE_NAMES = {
    RECTANGLE: 'div'
};
const TEMPLATES = {
    PRAGMA: `import { h } from '../../../../tools/dom';`,
    EXPORT(name){ return `export default ${name}`; }
};

const renderToString = ({ name, type, children }) => {
    const render = ({ name, type, children }, str = '') => {
        return name ? `const ${name} = () => <${type}>${children.map(child => render(child, str))}</${type}>;` : children;
    };

    return `${TEMPLATES.PRAGMA}

${render({ name, type, children })}

${TEMPLATES.EXPORT(name)}`;
};

const createVDOM = model => {
    const name = model.name;
    const tree = model.children.reduce((acc, child) => {
        if(child.type === 'TEXT') acc.push({ type: 'text', children: child.characters })
        else acc.push({ type: NODE_NAMES[child.type] })
        return acc;
    }, []);
    const composedVDOM = {...tree[0], name };
    composedVDOM.children = tree.slice(1);
    
    return composedVDOM;
};

fetch(`https://api.figma.com/v1/files/Vp8jwPAtd7d47QqgK9eB5lCm`, { 
    headers: { 'X-FIGMA-TOKEN': SECRET }
})
.then(res => res.json())
.then(json => {
    const findComponents = tree => {
        const walk = (tree, components = []) => {
            tree.forEach(item => {
                if(item.type === 'COMPONENT') components.push(item);
                if(item.children) walk(item.children, components);
            });
            return components;
        };
        return walk(tree);
    };
    
    VDfindComponents(json.document.children).map(createVDOM)
        .map(node => ({ name: node.name, dom: renderToString(node) }))
        .forEach(component => {
            fse.outputFile(
                path.resolve(__dirname, `../src/html/components/${component.name.toLowerCase()}/index.js`),
                component.dom,
                () => {}
            );
        });

});