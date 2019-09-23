const base = require('../base');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const paths = require('../../../../config').paths;

module.exports = [
    merge(base.main, {
        output: {
          filename: 'static-entry.js',
          path: path.join(process.cwd(),'../src/SampleProject'),
          libraryTarget: `umd`
        },
        mode: 'production',        
        plugins: [
            new FileManagerPlugin({
                onEnd: {
                    delete: [ path.join(process.cwd(), paths.integrationOutput, 'static-entry.js') ]
                }
            }),
            new MiniCssExtractPlugin({
                filename: path.join(paths.dest.css, 'index.css'),
                chunkFilename: '[id].css',
                ignoreOrder: false,
            }),
            new CopyWebpackPlugin([{
                from: path.join(process.cwd(), paths.src.assets),
                to: path.join(process.cwd(), paths.integrationOutput, paths.dest.assets)
            }]),
            new CopyWebpackPlugin([{
                from: path.join(process.cwd(), paths.src.img),
                to: path.join(process.cwd(), paths.integrationOutput, paths.dest.img)
            }]),
            new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        ],
    }),
    merge(base.javascript, {
        output: {
            filename: '[name].js',
            path: path.join(process.cwd(), paths.integrationOutput, paths.dest.js)
        },
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin()
        ]
    })
];