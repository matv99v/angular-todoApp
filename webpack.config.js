/* eslint-disable */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),

    entry: "./entry.js",

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },

    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },

    devtool: 'eval',

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        // new webpack.ProvidePlugin({
        //     'ng': 'angular'
        // })
    ],

    devServer: {
        contentBase: './public'
    },

    // resolve: {
    //     alias: {
    //         // 'ng': 'angular',
    //         'ngRoute': 'angular-route',
    //     }
    // }
};
