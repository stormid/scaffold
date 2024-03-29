const base = require('../base');
const path = require('path');
const merge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('../../plugins/static-site-generator-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const { getPaths } = require('../../utils');
const paths = require('../../../../paths.config');

module.exports = [
    merge(base.main, {
        output: {
            filename: '[name].js',
            path: path.join(process.cwd(), paths.output),
            publicPath: '/',
            libraryTarget: `umd`
        },
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            new StaticSiteGeneratorPlugin({
                paths: getPaths(paths.src.templates)
            }),
            new MiniCssExtractPlugin({
                filename: 'index.css',
                chunkFilename: '[id].css',
                ignoreOrder: false,
            }),
            new CopyWebpackPlugin([{
                from: path.join(process.cwd(), paths.src.assets),
                to: path.join(process.cwd(), paths.output, paths.dest.assets)
            }]),
            new CopyWebpackPlugin([{
                from: path.join(process.cwd(), paths.src.img),
                to: path.join(process.cwd(), paths.output, paths.dest.img)
            }]),
            new CleanWebpackPlugin(),
            new BrowserSyncPlugin(
                {
                    host: 'localhost',
                    port: 3000,
                    proxy: 'http://localhost:8080/'
                }
            ),
            new ImageminWebpWebpackPlugin({
                config: [{
                        test: /\.(jpe?g|png|gif)$/i,
                        options: {
                            quality:  50
                        },
                }]
            }),
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                svgo: {
                    plugins: [{
                        removeViewBox: false
                    }]
                }
            })
        ],
    }),
    merge(base.javascript, {
        output: {
            filename: '[name].js',
            publicPath: '/',
            path: path.join(process.cwd(), paths.output)
        },
        mode: 'development',
        devtool: 'cheap-module-eval-source-map'
    }),
    merge(base.polyfills, {
        output: {
            filename: '[name].js',
            publicPath: '/',
            path: path.join(process.cwd(), paths.output)
        },
        mode: 'development',
        devtool: 'cheap-module-eval-source-map'
    })
];