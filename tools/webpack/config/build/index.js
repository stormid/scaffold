const base = require('../base');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const StaticSiteGeneratorPlugin = require('../../plugins/static-site-generator-webpack-plugin');
const { getPaths } = require('../../utils');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const paths = require('../../../../config').paths;

module.exports = [
    merge(base.main, {
        output: {
          filename: 'static-entry.js',
          path: path.resolve(process.cwd(), `build`),
          libraryTarget: `umd`
        },
        mode: 'production',        
        plugins: [
            new FileManagerPlugin({
                onEnd: {
                    delete: [ path.resolve(__dirname, '../../../../build/static-entry.js') ]
                }
            }),
            new StaticSiteGeneratorPlugin({
                paths: getPaths(paths.src.templates)
            }),
            new MiniCssExtractPlugin({
                filename: 'static/css/index.css',
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
            new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        ],
    }),
    merge(base.javascript, {
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, `../../../../build/static/js`)
        },
        mode: 'production',
        target: "web",
        plugins: [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, '../../../../src/js/async'),
                to: path.resolve(__dirname, `../../../../build/static/js/async`)
            }])
        ]
    })
];