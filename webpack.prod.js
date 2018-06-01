const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VENDOR_LIBS = [
    'react', 'react-dom', 'axios', 'express',
]

const bundleDir = './public'


module.exports = {
    entry: {
        main: './src/client/app.js'
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]

            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    },

    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin([bundleDir]),
        new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),

        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
}

