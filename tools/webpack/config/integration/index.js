const base = require('../base');
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
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
                        delete: [{
                            source: path.join(process.cwd(), paths.integrationOutput, 'static-entry.js'),
                            options: { force: true },
                        }]
                    }
                },
            }),
            new MiniCssExtractPlugin({
                filename: path.join(paths.dest.css, 'index.css'),
                chunkFilename: '[id].css',
                ignoreOrder: false,
            }),
            // new CopyWebpackPlugin({
            //     patterns: [
            //         {
            //             from: path.join(process.cwd(), paths.src.assets),
            //             to: path.join(process.cwd(), paths.integrationOutput, paths.dest.assets)
            //         }
            //     ]
            // }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(process.cwd(), paths.src.img),
                        to: path.join(process.cwd(), paths.integrationOutput, paths.dest.img)
                    }
                ]
            }),
            // new ImageminWebpWebpackPlugin({
            //     config: [{
            //         test: /\.(jpe?g|png|gif)$/i,
            //         options: {
            //             quality: 50
            //         },
            //     }]
            // })
        ],
        optimization: {
            minimizer: [
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.sharpMinify,
                        options: {
                            encodeOptions: {
                                jpeg: {
                                    // https://sharp.pixelplumbing.com/api-output#jpeg
                                    quality: 80,
                                },
                                webp: {
                                    // https://sharp.pixelplumbing.com/api-output#webp
                                    quality: 80,
                                },
                                avif: {
                                    // https://sharp.pixelplumbing.com/api-output#avif
                                    quality: 50,
                                },
            
                                // png by default sets the quality to 100%, which is same as lossless
                                // https://sharp.pixelplumbing.com/api-output#png
                                png: {},
            
                                // gif does not support lossless compression at all
                                // https://sharp.pixelplumbing.com/api-output#gif
                                gif: {},
                            },
                        },
                    },
                }),
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.svgoMinify,
                        options: {
                            encodeOptions: {
                                // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
                                multipass: true,
                                plugins: [
                                    // set of built-in plugins enabled by default
                                    // see: https://github.com/svg/svgo#default-preset
                                    'preset-default',
                                ],
                            },
                        },
                    },
                }),
            ],
        },
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
