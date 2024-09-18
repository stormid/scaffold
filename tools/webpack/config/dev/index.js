const base = require('../base');
const path = require('node:path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-v3-webpack-plugin');
const paths = require('../../../../paths.config');

module.exports = [
    merge(base.html, {
        output: {
            filename: '[name].js',
            path: path.join(process.cwd(), paths.output),
            publicPath: '/',
            libraryTarget: `umd`,
            assetModuleFilename: 'fonts/[name][ext]'
        },
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            static: path.join(process.cwd(), paths.output, paths.dest.assets),
            port: 8081
        },
        plugins: [
            new CleanWebpackPlugin(),
            new BrowserSyncPlugin(
                {
                    host: 'localhost',
                    port: 3000,
                    proxy: 'http://localhost:8081/'
                }
            )
        ]
    }),
    merge(base.css, {
        output: {
            filename: '[name].js',
            path: path.join(process.cwd(), paths.output),
            libraryTarget: 'umd',
            assetModuleFilename: 'fonts/[name][ext]'
        },
        mode: 'production',
        plugins: [
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
            publicPath: paths.webpackPublicPath,
            path: path.join(process.cwd(), paths.output)
        },
        mode: 'development',
        devtool: 'eval-source-map'
    })
];