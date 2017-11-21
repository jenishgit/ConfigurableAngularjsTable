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
              { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
              {
                test: /\.css$/,
                use: ['style-loader','css-loader']
              },
              /* Embed files. */
              { 
                test: /\.html$/, 
                loader: 'raw-loader',
                exclude: /\.async\.(html)$/
              },
              /* Async loading. */
              {
                test: /\.async\.(html)$/, 
                loaders: ['file?name=[name].[hash].[ext]', 'extract']
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
          })
    ]
    ,
    resolve: {
        extensions: [ '.js', '.ts']
    },
    devtool:'#eval-source-map'
};