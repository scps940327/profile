var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 使用 extract text webpack plugin
//var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
    //target:'electron',
    entry: ['./main.js'], // 在 index 檔案後的 .js 副檔名是可選的
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    //watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader"
                    }]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 1000000, outputPath: 'img/'},
                    
                    },
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../css/fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/bundle.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}

//config.target = webpackTargetElectronRenderer(config);
module.exports = config;