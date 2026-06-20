const base = require('../base');
const path = require('node:path');
const browserslist = require('browserslist');
const { merge } = require('../../../utils');
const rspack = require('@rspack/core');
const DeleteAssetsPlugin = require('../../plugins/delete-assets-plugin');
const paths = require('../../../../paths.config');

// Read the browser query from .browserslistrc and hand it to Lightning CSS, which
// resolves it with its own bundled caniuse data and then adds exactly the prefixes
// those browsers need and downlevels modern syntax (nesting, @layer) for them.
// Pass the query (not browserslist()'s resolved versions, which Lightning CSS's
// older bundled data can fail to parse). Keeps .browserslistrc the single source
// of truth for JS + CSS browser support.
const cssTargets = (browserslist.findConfig(process.cwd()) || {}).defaults || ['> 5%'];

module.exports = [
    merge(base.html, {
        output: {
            filename: 'html.js',
            path: path.join(process.cwd(), paths.output),
            library: { type: 'umd' }
        },
        mode: 'production',
        plugins: [
            new DeleteAssetsPlugin({ assets: ['html.js', 'main.js'] })
        ]
    }),
    merge(base.css, {
        output: {
            filename: 'css.js',
            path: path.join(process.cwd(), paths.output),
            library: { type: 'umd' }
        },
        mode: 'production',
        plugins: [
            new DeleteAssetsPlugin({ assets: ['css.js'] }),
            new rspack.CopyRspackPlugin({
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
        optimization: {
            minimizer: [
                new rspack.LightningCssMinimizerRspackPlugin({
                    minimizerOptions: {
                        targets: cssTargets
                    }
                })
            ],
        },
    }),
    merge(base.javascript, {
        output: {
            filename: '[name].js',
            chunkFilename: `[name].[chunkhash].js`,
            chunkFormat: 'module',
            publicPath: paths.webpackPublicPath,
            path: path.join(process.cwd(), paths.output, paths.dest.js),
            clean: true
        },
        mode: 'production',
        performance: {
            hints: 'warning'
        }
    })
];
