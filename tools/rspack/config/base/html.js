const path = require('node:path');
const rspack = require('@rspack/core');
const StaticSiteGeneratorPlugin = require('../../plugins/static-site-generator-plugin');
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
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: {
                            syntax: 'ecmascript',
                            jsx: true
                        },
                        transform: {
                            react: {
                                pragma: 'h'
                            }
                        },
                        target: 'es2022'
                    }
                },
                type: 'javascript/auto'
            }
        ]
    },
    plugins: [
        new rspack.IgnorePlugin({ resourceRegExp: /\.mdx$/, }),
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
