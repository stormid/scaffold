const h = require(`preact`).h;
const render = require('preact-render-to-string').render;
const Html = require(`./default-html`);
require('../../src/css/index.scss');

module.exports = function(locals) {
    const Body = require(`../../src/templates/pages/${locals.path}`).default;

    // if (module.hot) {
    //      module.hot.accept()
    // }
    const assets = Object.keys(locals.webpackStats.compilation.assets);
    const css = assets.filter(value => value.match(/\.css$/))
    return Promise.resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={<Body />} />)}`);

  };