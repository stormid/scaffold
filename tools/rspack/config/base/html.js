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
                                runtime: 'automatic',
                                importSource: 'preact'
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
            // Name of the entry chunk (see `entry` above) the render function is
            // bundled into — passed explicitly so findAsset never has to guess
            // from chunk ordering.
            entry: 'html',
            // A function, not a fixed array: the pages directory is re-read on
            // every compilation, so a page added while the dev server is running
            // is rendered on the next rebuild instead of 404ing until restart.
            paths: () => getPaths(paths.src.templates)
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
