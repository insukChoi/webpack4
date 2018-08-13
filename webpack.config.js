var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index'],
    output : {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../webpack4/src/index.html'),
            inject: false,
            filename: path.join(__dirname, '../webpack4/dist/bundle.html')
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    module: {
        loaders: [{ /* npm install --save-dev style-loader css-loader */
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }]
    }
}