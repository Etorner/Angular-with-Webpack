var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';


module.exports = {
    resolve: {
        extensions: ['.js']
    },
    devtool: (isProd ? 'eval-source-map' : 'source-map'),
    entry: {
        app: './src/app/app.js'
    },
    output: {
        path: (isProd ? './dist' : '/dist'),                                                   // when using only webpack = ./ and when using webpack-dev-server = /
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader?sourceMap!postcss-loader','sass-loader?sourceMap']),
            },
            {
                test: /\.html$/,use: ['raw-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 11000, name: 'images/[name].[ext]' }                   // Convert images < 10k to base64 strings
                    }
                ]
            }
        ],   
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new webpack.LoaderOptionsPlugin({
        test: /\.css$/i,
            options: {
                postcss: {
                    plugins: [autoprefixer]
                }
            }
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('css/styles.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}