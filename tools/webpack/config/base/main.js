const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../../plugins/static-entry.js'),
	target: "node",
  	plugins: [
		new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
	],
  	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(ico)$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /\.(s)?css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					  	options: {
							hmr: process.env.NODE_ENV === 'development',
							sourceMap: true
					  	},
					},
				  	'css-loader',
				  	'postcss-loader',
					'sass-loader',
				]
			}
		]
	}
};