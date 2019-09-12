const base = require('../base');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const paths = require('../../../../config').paths;

module.exports = [
    merge(base.main, {
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, `../../build`),
            // path: paths.output,
            libraryTarget: `umd`
        },
        mode: 'development',
        devtool: '#source-map',
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
                from: path.resolve(__dirname, '../../../../src/assets'),
                to: path.resolve(__dirname, `../../../../build/static`)
            }]),
            new CopyWebpackPlugin([{
                from:path.resolve(__dirname, '../../../../src/img'),
                to: path.resolve(__dirname, `../../../../build/static/img`)
            }]),
            // new BrowserSyncPlugin(
            //     {
            //       host: 'localhost',
            //       port: 3000,
            //       proxy: 'http://localhost:8080/'
            //     }
            // )
        ],
    }),
    merge(base.javascript, {
        entry: {
            index: path.resolve(__dirname, '../../../../src/js/index.js'),
            head: path.resolve(__dirname, '../../../../src/js/head.js'),
            polyfills: path.resolve(__dirname, '../../../../src/js/polyfills/index.js'),
        },
        mode: 'development',
        devtool: '#source-map',
          output: {
            filename: '[name].js',
            path: path.resolve(__dirname, `../../../../build`)
        },
        target: "web",
        plugins: [
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, '../../../../src/js/async'),
                to: path.resolve(__dirname, `../../../../build/static/js/async`)
            }])
        ]
    })
];