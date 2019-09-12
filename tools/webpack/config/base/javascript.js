const path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, '../../../../src/js/index.js'),
		head: path.resolve(__dirname, '../../../../src/js/head.js'),
		polyfills: path.resolve(__dirname, '../../../../src/js/polyfills/index.js'),
	},
	target: "web",
  	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};