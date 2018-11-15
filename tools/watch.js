import chokidar from 'chokidar';
import { h, doctype } from './dom';
import { walker } from './utils';
import render from 'preact-render-to-string';
import fse from 'fs-extra';
import path from 'path';
const BASE_PATH = 'src/html';

export const writeFile = page => new Promise(resolve => {
    delete require.cache[require.resolve(`../src/html/pages/${page.path}/${page.name}`)];
    const html = render(require(`../src/html/pages/${page.path}/${page.name}`).default());
    fse.outputFile(
        path.resolve(__dirname, path.join(`../build`, page.path, `${page.name.replace(/.js/, '')}.html`)),
        doctype(html),
        'utf8',
        () => resolve(page.name)
    );
});
chokidar.watch(`${BASE_PATH}/**/*`).on('change', file => Promise.all(walker(__dirname, `../src/html/pages`).map(writeFile)));