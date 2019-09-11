const path = require('path');
// const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('./static-site-generator-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssCustomProperties = require('postcss-custom-properties');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { getPaths } = require('./utils');
const paths = require('../../config').paths;

module.exports = [{
	entry: path.resolve(__dirname, './static-entry.js'),
  	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, `../../build`),
		libraryTarget: `umd`
	},
	mode: 'development',
	devtool: '#source-map',
	target: "node",
  	plugins: [
		new CleanWebpackPlugin(),
		new StaticSiteGeneratorPlugin({
			paths: getPaths(paths.src.templates)
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css',
			chunkFilename: '[id].css',
			ignoreOrder: false,
		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../../src/assets'),
			to: path.resolve(__dirname, `../../build/static`)
		}])
		// new BrowserSyncPlugin(
		//     {
		//       host: 'localhost',
		//       port: 3000,
		//       proxy: 'http://localhost:8080/'
		//     }
		// )
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
},
{
	entry: {
		index: path.resolve(__dirname, '../../src/js/index.js'),
		head: path.resolve(__dirname, '../../src/js/head.js'),
		polyfills: path.resolve(__dirname, '../../src/js/polyfills/index.js'),
	},
	mode: 'development',
	devtool: '#source-map',
  	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, `../../build`)
	},
	target: "web",
    plugins: [
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../../src/js/async'),
			to: path.resolve(__dirname, `../../build/static/js/async`)
		}])
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
}]