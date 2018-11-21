import { h } from './h';
import { doctype } from './doctype';
import { walker } from '../utils';
import render from 'preact-render-to-string';
import fse from 'fs-extra';
import path from 'path';
import { paths } from '../../config';

export const write = page => new Promise(resolve => {
    delete require.cache[require.resolve(`../../${paths.src.templates}/pages/${page.path}/${page.name}`)];
    const output = require(`../../${paths.src.templates}/pages/${page.path}/${page.name}`).default();
    const renderOutput = content => {
        fse.outputFile(
            path.resolve(__dirname, path.join(`../../${paths.dest.templates}`, page.path, `${page.name.replace(/.js/, '')}.html`)),
            doctype(render(content)),
            'utf8',
            () => resolve(page.name)
        );
    };
    if(output.then) output.then(res => renderOutput(res));
    else renderOutput(output);
});

export default () => Promise.all(walker(__dirname, `../../${paths.src.templates}/pages`).map(write));