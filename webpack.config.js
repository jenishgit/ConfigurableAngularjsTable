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
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=false'],
                exclude: [/\.(spec|e2e)\.ts$/]
              },
              /* Embed files. */
              { 
                test: /\.(html|css)$/, 
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
              },
              /* Async loading. */
              {
                test: /\.async\.(html|css)$/, 
                loaders: ['file?name=[name].[hash].[ext]', 'extract']
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