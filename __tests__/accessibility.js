import jest from 'jest';
const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations);
const h = require(`preact`).h;
const render = require('preact-render-to-string').render;
const Html = require(`../tools/webpack/default-html`);
const fs = require('fs');
const path = require('path');
import { walker } from '../tools/utils';

expect.extend(toHaveNoViolations);

walker(__dirname, `../src/templates/pages`)
    .forEach(link => {
        console.log(link);
        // url = url === '.' ? '/' : url;
        // const url = path.join(`${link.path ? `/${link.path}` : ''}/${link.name.replace('.js', '.html')}`);

        // describe(`Accessibility`, () => { 

        //     it(`should have no violations on ${url}`, async () => {
        //         const body = require(`../../src/templates/pages/${locals.path}`).default();
        //         const assets = Object.keys(locals.webpackStats.compilation.assets);
        //         const css = assets.filter(value => value.match(/\.css$/));
        //         const result = awit new Promise((resolve, reject) => {
        //             if(body.then) body.then(Res => {
        //                 resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={Res} />)}`);
        //             });
        //             else resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={body} />)}`);
        //         });
        //         expect(await axe(result)).toHaveNoViolations()
        //     });

        // });
    });