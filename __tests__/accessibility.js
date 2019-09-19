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
        const url = `${link.path ? `/${link.path}` : ''}/${link.name}`;

        describe(`Accessibility`, () => { 

            it(`should have no violations on ${url}`, async () => {
                const body = require(path.join(`../../src/templates/pages/`, url)).default();
                const result = await new Promise((resolve, reject) => {
                    if(body.then) body.then(Res => {
                        resolve(`<!DOCTYPE html>${render(<Html htmlBody={Res} />)}`);
                    });
                    else resolve(`<!DOCTYPE html>${render(<Html htmlBody={body} />)}`);
                });
                expect(await axe(result)).toHaveNoViolations()
            });

        });
    });