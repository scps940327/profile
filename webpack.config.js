const HtmlWebPackPlugin = require("html-webpack-plugin"); // 載入轉存 css 檔案的套件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require('webpack');

module.exports = {
  entry: {
      index: "./src/index.js",
      // about:"./src/js/about.js"
  },
  output: {
      path: __dirname + '/dist',
      filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
              loader: 'url-loader',
              options: {limit: 1000000, outputPath: 'img/'},
          
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index'] // 預設會將打包出的所有 js 插入 html。故需指明頁面需要的模組
    }),
    // new HtmlWebPackPlugin({
    //   template: 'src/index.html',
    //   filename: 'about.html',
    //   chunks: ['about']
    // }),
    new MiniCssExtractPlugin({
      // 指定輸出位置
      // [name] 為上方進入點設定的 "名稱"
      filename: "./css/style.css"
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ]
};