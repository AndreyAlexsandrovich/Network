const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const isPord = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: isPord ? "/Network/" : "/",
  },
  mode: isPord ? "production" : "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true, 
    port: 8080, 
    open: true, 
  },
  // webpack.config.js
resolve: {
  alias: {
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@components': path.resolve(__dirname, 'src/components'),
  }
},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',

          options: { importLoaders: 1 }
        },
    'postcss-loader']
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|jpeg)$/,
        type: 'asset/resource'
      },
    ],
  },
  plugins:  [
    new HtmlWebpackPlugin({
        template: './src/index.html', 
        filename: 'index.html',
        chunks: ['main']
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/404.html', 
        filename: '404.html',
        chunks: ['main']
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/home.html', 
        filename: 'home.html',
        chunks: ['main']
      }),
      new CleanWebpackPlugin(),
       new MiniCssExtractPlugin({ 
        filename: 'main.css'
       }),
      ],
      
};