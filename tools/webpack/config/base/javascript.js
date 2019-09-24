const path = require('path');
const webpack = require('webpack');
const paths = require(path.join(process.cwd(), `./paths.config`));

module.exports = {
	entry: {
		index: path.join(process.cwd(), `${paths.src.js}/index.js`),
		head: path.join(process.cwd(), `${paths.src.js}/head.js`)
	},
	target: "web",
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 5
		}),
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 8000
		})
	],
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