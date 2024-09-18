const base = require('../base');
const path = require('node:path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('../../../../paths.config');

module.exports = [
    merge(base.css, {
        output: {
            filename: '[name].js',
            path: path.join(process.cwd(), paths.integrationOutput),
            libraryTarget: 'umd'
        },
        mode: 'production',
        plugins: [
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        delete: [{
                            source: path.join(process.cwd(), paths.integrationOutput, 'css.js'),
                            options: { force: true },
                        }]
                    }
                },
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(process.cwd(), paths.src.img),
                        to: path.join(process.cwd(), paths.integrationOutput, paths.dest.img),
                        noErrorOnMissing: true
                    },
                    {
                        from: path.join(process.cwd(), paths.src.assets),
                        to: path.join(process.cwd(), paths.integrationOutput, paths.dest.assets),
                        noErrorOnMissing: true
                    }
                ]
            })
        ]
    }),
    merge(base.javascript, {
        output: {
            filename: '[name].js',
            chunkFilename: `[name].[chunkhash].js`,
            chunkFormat: 'module',
            publicPath: paths.webpackPublicPath,
            path: path.join(process.cwd(), paths.integrationOutput, paths.dest.js)
        },
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin()
        ]
    })
];
