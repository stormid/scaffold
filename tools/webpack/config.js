const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('./static-site-generator-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { getPaths } = require('./utils');
const paths = require('../../config').paths;

module.exports = [{
    entry: path.resolve(__dirname, './static-entry.js'),
    mode: 'development',
  	output: {
        filename: '[name].js',
        path: path.resolve(__dirname, `../../build/static`),
        libraryTarget: `umd`
    },
    target: "node",
  	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new StaticSiteGeneratorPlugin({
            paths: getPaths(paths.src.templates)
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
            publicPath: `build/static`,
        }),
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
                test: /\.scss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development',
                    },
                  },
                  'css-loader',
                  'sass-loader',
                //   'postcss-loader'
                ],
            }
        ]
    }
},
{
    entry: path.resolve(__dirname, '../../src/js/app.js'),
    mode: 'development',
  	output: {
        filename: 'index.js',
        path: path.resolve(__dirname, `../../build/static`),
        libraryTarget: `umd`
    },
    target: "web",
  	plugins: [
        new webpack.HotModuleReplacementPlugin()
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