import { h, doctype } from './dom';
import { walker } from '../tools/utils';
import render from 'preact-render-to-string';
import fse from 'fs-extra';
import path from 'path';

const pages = walker(__dirname, `../src/html/pages`);

for(let page of pages){
    const html = render(require(`../src/html/pages/${page.path}/${page.name}`).default());
    //to do - mkdir if it doesn't exist
    fse.outputFile(
        path.resolve(__dirname, path.join(`../build`, page.path, `${page.name.replace(/.js/, '')}.html`)),
        doctype(html), 'utf8',
        () => {}
    );
}