const base = require('../base');
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const paths = require('../../../../paths.config');

module.exports = [
    merge(base.main, {
        output: {
            filename: 'static-entry.js',
            path: path.join(process.cwd(), paths.integrationOutput),
            libraryTarget: 'umd'
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(s)?css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    fiber: false,
                                },
                            },
                        }
                    ]
                }
            ]
        },
        plugins: [
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        delete: [ path.join(process.cwd(), paths.integrationOutput, 'static-entry.js') ]
                    }
                }
            }),
            new MiniCssExtractPlugin({
                filename: path.join(paths.dest.css, 'index.css'),
                chunkFilename: '[id].css',
                ignoreOrder: false,
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(process.cwd(), paths.src.assets),
                        to: path.join(process.cwd(), paths.integrationOutput, paths.dest.assets)
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(process.cwd(), paths.src.img),
                        to: path.join(process.cwd(), paths.integrationOutput, paths.dest.img)
                    }
                ]
            }),
            new ImageminWebpWebpackPlugin({
                config: [{
                        test: /\.(jpe?g|png|gif)$/i,
                        options: {
                            quality: 50
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
            publicPath: paths.webpackPublicPath,
            path: path.join(process.cwd(), paths.integrationOutput, paths.dest.js)
        },
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin()
        ]
    }),
    merge(base.polyfills, {
        output: {
            filename: '[name].js',
            publicPath: paths.webpackPublicPath,
            path: path.join(process.cwd(), paths.integrationOutput, paths.dest.js)
        },
        mode: 'production'
    })
];
