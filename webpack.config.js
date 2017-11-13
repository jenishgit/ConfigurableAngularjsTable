var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.ts$/, 
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
    ,
    resolve: {
        extensions: [ '.js', '.ts']
    },
    devtool:'#eval-source-map'
};