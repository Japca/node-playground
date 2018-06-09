const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bundleDir = './dist'

module.exports = {
     mode: 'development',

    entry: {
        app: './src/ui/app.js'
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
        filename: 'bundle.js'

    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: {
                    loader: 'file-loader?name=fonts/[name].[ext]',
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader?name=images/[name].[ext]',
                }
            }
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: path.join(__dirname, bundleDir),
        host: 'localhost',
        publicPath: '/'

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()


    ]
}