import jest from 'jest';
import { toHaveNoViolations } from 'jest-axe';
const fs = require('fs');
const path = require('path');
import { walker } from '../tools/utils';
import config from '../jest-puppeteer.config';

expect.extend(toHaveNoViolations);

walker(__dirname, `../src/templates/pages`)
    .forEach(link => {
        // url = url === '.' ? '/' : url;
        const url = path.join(`${link.path ? `/${link.path}` : ''}/${link.name.replace('.js', '.html')}`);

        describe(`Accessibility`, () => {        
            beforeAll(async () => {
                await page.goto(`http://localhost:${config.server.port}${url}`, { waitUntil: 'load'});
                await page.addScriptTag({ path: require.resolve('axe-core') });
            });

            it(`should have no violations on ${url}`, async () => {
                const result = await page.evaluate(() => {
                    return new Promise(resolve => {
                        window.axe.run((err, results) => {
                            if (err) throw err;
                            resolve(results);
                        });
                    });
                });
                expect(result).toHaveNoViolations();
            });
        });
    });