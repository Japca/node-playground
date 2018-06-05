const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VENDOR = [
    'react', 'react-dom', 'axios', 'express',
    '@material-ui/core', '@material-ui/icons'
];

const bundleDir = './public'


module.exports = {
    // mode: 'production',
    entry: {
        main: './src/ui/app.js'
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
                use: {
                    loader: 'file-loader?name=fonts/[name].[ext]',
                }
            },
            {
                test: /\.(png|jpg?)(\?[a-z0-9]+)?$/,
                use: {
                    loader: 'file-loader?name=images/[name].[ext]',
                }
            }

        ],
    },

    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin([bundleDir]),
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


