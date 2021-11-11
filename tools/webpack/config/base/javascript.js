const path = require('path');
const webpack = require('webpack');
const paths = require(path.join(process.cwd(), `./paths.config`));

module.exports = {
    entry: {
        index: path.join(process.cwd(), `${paths.src.js}/index.js`),
        appinsights: path.join(process.cwd(), `${paths.src.js}/appinsights/index.js`)
    },
    target: 'web',
    stats: {
        modules: false,
        entrypoints: false
    },
    plugins: [
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 30000
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};