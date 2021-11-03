const path = require('path');
const webpack = require('webpack');
const paths = require(path.join(process.cwd(), `./paths.config`));

module.exports = {
    entry: {
        index: path.join(process.cwd(), `${paths.src.js}/modules/main/index.js`),
        head: path.join(process.cwd(), `${paths.src.js}/head.js`)
    },
    target: 'web',
    stats: {
        modules: false,
        entrypoints: false
    },
    plugins: [
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 2000
        })
    ],
	optimization: {
		splitChunks: {
		  cacheGroups: {
			polyfills: {
			  test: /polyfills/,
			  name: 'polyfills',
			  chunks: 'all',
			}
		  }
		}
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};