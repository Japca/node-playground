const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const bundleDir = './dist'
const PRODUCTION = 'production';

module.exports = merge(common, {
    mode: PRODUCTION,

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(PRODUCTION)
        }),

        new CleanWebpackPlugin([bundleDir]),
    ]
})


