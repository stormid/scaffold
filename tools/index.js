import { h, doctype } from './dom';
import render from 'preact-render-to-string';
import fs from 'fs';
import path from 'path';

const walkDir = (base, dir) => {
    const baseDir = path.join(base, dir);
    const walk = (dir, filelist = []) => {
        fs.readdirSync(dir).forEach(file => {
            filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? walk(path.join(dir, file), filelist)
            : filelist.concat(path.join(dir.split(baseDir)[1], file));
        });
        return filelist;
    };
    return walk(path.join(base, dir));
};

const pages = walkDir(__dirname, `../src/html/pages`);

for(let page of pages){
    const html = render(require(`../src/html/pages/${page}`).default());
    const name = page.replace(/.js/, '');
    fs.writeFile(path.resolve(__dirname, path.join('../build/', `${name}.html`)), doctype(html), 'utf8', () => console.log(`Rendered ${name}`));
}