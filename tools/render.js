import { h, doctype } from './dom';
import { walker } from '../tools/utils';
import render from 'preact-render-to-string';
import fse from 'fs-extra';
import path from 'path';

const writeFile = page => new Promise(resolve => {
    fse.outputFile(
        path.resolve(__dirname, path.join(`../build`, page.path, `${page.name.replace(/.js/, '')}.html`)),
        doctype(render(require(`../src/html/pages/${page.path}/${page.name}`).default())),
        'utf8',
        () => resolve(page.name)
    );
});

export default () => Promise.all(walker(__dirname, `../src/html/pages`).map(writeFile));