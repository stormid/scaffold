const path = require('node:path');
const webpack = require('webpack');
const paths = require(path.join(process.cwd(), `./paths.config`));
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(process.cwd(), `${paths.src.js}/index.js`),
        appinsights: path.join(process.cwd(), `${paths.src.js}/appinsights/index.js`)
    },
    target: 'browserslist',
    stats: {
        modules: false,
        entrypoints: false
    },
    // plugins: [
    //     new webpack.optimize.MinChunkSizePlugin({
    //         minChunkSize: 30000
    //     })
    // ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            enforceSizeThreshold: 0,
        },
        minimizer: [new TerserPlugin({
            extractComments: false,
            terserOptions: {
                format: {
                  comments: false,
                }
            }
        })]
    },
};