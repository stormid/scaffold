const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('./static-site-generator-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getPaths } = require('./utils');
const paths = require('../../config').paths;

module.exports = [{
    entry: path.resolve(__dirname, './static-entry.js'),
    mode: 'production',
  	output: {
        filename: 'static-entry.js',
        path: path.resolve(__dirname, `../../build`),
        libraryTarget: `umd`
    },
    target: "node",
  	plugins: [
        new FileManagerPlugin({
            onEnd: {
                delete: [ path.resolve(__dirname, '../../build/static-entry.js') ]
            }
        }),
        new StaticSiteGeneratorPlugin({
            paths: getPaths(paths.src.templates)
        }),
        new MiniCssExtractPlugin({
            filename: '/static/css/index.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../../src/assets'),
			to: path.resolve(__dirname, `../../build/static`)
		}]),
		new CopyWebpackPlugin([{
			from:path.resolve(__dirname, '../../src/img'),
			to: path.resolve(__dirname, `../../build/static/img`)
		}]),
		new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        // new BrowserSyncPlugin(
        //     {
        //       host: 'localhost',
        //       port: 3000,
        //       // proxy the Webpack Dev Server endpoint
        //       // (which should be serving on http://localhost:3100/)
        //       // through BrowserSync
        //       proxy: 'http://localhost:8080/'
        //     }
        //   )
    ],
  	module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
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
					  	},
					},
				  	'css-loader',
				  	'postcss-loader',
				  	'sass-loader'
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
    mode: 'production',
  	output: {
        filename: '[name].js',
        path: path.resolve(__dirname, `../../build/static/js`)
    },
    target: "web",
    plugins: [
        new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../../src/js/async'),
			to: path.resolve(__dirname, `../../build/static/js/async`)
        }]),
        // new webpack.DefinePlugin({
        //     VERSION: JSON.stringify(new Date())
        // })
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