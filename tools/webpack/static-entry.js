const h = require(`preact`).h;
const render = require('preact-render-to-string').render;
const Html = require(`./default-html`);
require('../../src/css/index.scss');

module.exports = function(locals) {
	const body = require(`../../src/templates/pages/${locals.path}`).default();
    const assets = Object.keys(locals.webpackStats.compilation.assets);
    const css = assets.filter(value => value.match(/\.css$/));
    return new Promise((resolve, reject) => {
		if(body.then) body.then(Res => {
			resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={Res} />)}`);
		});
    	else resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={body} />)}`);
    });
  };