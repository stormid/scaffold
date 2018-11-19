import { h, doctype } from './';
import { walker } from '../utils';
import render from 'preact-render-to-string';
import fse from 'fs-extra';
import path from 'path';

export const writeFile = page => new Promise(resolve => {
    delete require.cache[require.resolve(`../../src/html/pages/${page.path}/${page.name}`)];
    const output = require(`../../src/html/pages/${page.path}/${page.name}`).default();
    const renderOutput = content => {
        fse.outputFile(
            path.resolve(__dirname, path.join(`../../build`, page.path, `${page.name.replace(/.js/, '')}.html`)),
            doctype(render(content)),
            'utf8',
            () => resolve(page.name)
        );
    };
    if(output.then) output.then(res => renderOutput(res));
    else renderOutput(output);
});

export default () => Promise.all(walker(__dirname, `../../src/html/pages`).map(writeFile));