const path = require('node:path');
const paths = require('../../../../paths.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: { css: path.resolve(__dirname, '../../entry/css.js') },
    target: 'node',
    stats: {
        modules: false,
        entrypoints: false
    },
    module: {
        rules: [
            {
                test: /\.(ico)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
                dependency: { not: ['url'] },
                loader: 'file-loader',
                options: {
                    outputPath: `${paths.dest.assets}/fonts`,
                    publicPath: `/${paths.dest.assets}/fonts`,
                    esModule: false
                },
                type: 'javascript/auto'
            },
            {
                test: /\.(s)?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass-embedded'),
                            sassOptions: {
                                api: 'modern-compiler'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join(paths.dest.css, 'index.css'),
            chunkFilename: '[id].css',
            ignoreOrder: false,
        })
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
                            plugins: [{
                                // set of built-in plugins enabled by default
                                // see: https://github.com/svg/svgo#default-preset
                                name: 'preset-default',
                                params: {
                                    overrides: {
                                        removeViewBox: false,
                                    }
                                }
                            }],
                        },
                    },
                },
            }),
        ],
    }
};