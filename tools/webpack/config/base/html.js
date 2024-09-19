const path = require('node:path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('../../plugins/static-site-generator-webpack-plugin');
const { getPaths } = require('../../../utils');
const paths = require('../../../../paths.config');

module.exports = {
    entry: { html: path.resolve(__dirname, '../../entry/html.js') },
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
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin({ resourceRegExp: /\.mdx$/, }),
        new StaticSiteGeneratorPlugin({
            paths: getPaths(paths.src.templates)
        })
    ],
    resolve: {
        alias: {
            '@templates': path.join(process.cwd(), 'src/templates/'),
            '@layouts': path.join(process.cwd(), 'src/templates/layouts'),
            '@components': path.join(process.cwd(), 'src/templates/components'),
        }
    }
};