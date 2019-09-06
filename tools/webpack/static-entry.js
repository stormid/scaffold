const h = require(`preact`).h;
const render = require('preact-render-to-string').render;
const Html = require(`./default-html`);
require('../../src/css/index.scss');
const path = require('path');
// const router = require('./route-requires');

module.exports = function(locals) {
    // if (module.hot) {
    //     module.hot.accept(`../../src/templates/pages/${locals.path}`, function() {
    //         console.log(`Accepting the updated ${locals.path}`);
    //     })
    // }
    const Body = require(`../../src/templates/pages/${locals.path}`).default;

    const assets = Object.keys(locals.webpackStats.compilation.assets)
    // const js = assets.filter(value => value.match(/\.js$/))
    const css = assets.filter(value => value.match(/\.css$/))

    return Promise.resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={<Body />} />)}`);
  };