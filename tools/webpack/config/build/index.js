const base = require('../base');
const path = require('node:path');
const { merge } = require('webpack-merge');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('../../../../paths.config');

module.exports = [
    merge(base.html, {
        output: {
            filename: 'html.js',
            path: path.join(process.cwd(), paths.output),
            libraryTarget: 'umd'
        },
        mode: 'production',
        plugins: [
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        delete: [
                            path.join(process.cwd(), paths.output, 'html.js'),
                            path.join(process.cwd(), paths.output, 'main.js')
                        ]
                    }
                }
            }),
        ]
    }),
    merge(base.css, {
        output: {
            filename: 'css.js',
            path: path.join(process.cwd(), paths.output),
            libraryTarget: 'umd'
        },
        mode: 'production',
        plugins: [
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        delete: [
                            {
                                source: path.join(process.cwd(), paths.output, 'css.js'),
                                options: { force: true },
                            }
                        ]
                    }
                },
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(process.cwd(), paths.src.img),
                        to: path.join(process.cwd(), paths.output, paths.dest.img),
                        noErrorOnMissing: true
                    },
                    {
                        from: path.join(process.cwd(), paths.src.assets),
                        to: path.join(process.cwd(), paths.output, paths.dest.assets),
                        noErrorOnMissing: true
                    }
                ]
            })
        ],
    }),
    merge(base.javascript, {
        output: {
            filename: '[name].js',
            chunkFilename: `[name].[chunkhash].js`,
            chunkFormat: 'module',
            publicPath: paths.webpackPublicPath,
            path: path.join(process.cwd(), paths.output, paths.dest.js)
        },
        mode: 'production',
        performance: {
            hints: 'warning'
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    })
];