const h = require(`preact`).h;
const render = require('preact-render-to-string').render;
const Html = require(`./default-html`);
require('../../../src/css/index.scss');

module.exports = function(locals) {
	const body = require(`../../../src/templates/pages/${locals.path}`).default();
	const assets = Object.keys(locals.webpackStats.compilation.assets);
	const css = assets.filter(value => value.match(/\.css$/));	
	const title = require(`../../../src/templates/pages/${locals.path}`).title || '';
	try {
		return new Promise((resolve, reject) => {
			if(body.then) {
				body.then(Res => {
					resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={Res} title={title} />)}`);
				});
			}
			else resolve(`<!DOCTYPE html>${render(<Html css={css} htmlBody={body} title={title} />)}`);
		});
	} catch(e){
		console.log(`HTML render error: ${e}`);
	}
  };