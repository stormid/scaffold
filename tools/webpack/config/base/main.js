// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../../plugins/static-entry.js'),
    target: 'node',
    stats: {
        modules: false,
        entrypoints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ico)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@templates': path.join(process.cwd(), 'src/templates/'),
            '@layouts': path.join(process.cwd(), 'src/templates/layouts'),
            '@components': path.join(process.cwd(), 'src/templates/components'),
        }
    }
};