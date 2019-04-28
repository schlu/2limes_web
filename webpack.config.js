const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    yorecuerdo: './src/yo-recuerdo/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /src\/.*\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chuncks: ["index"],
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chuncks: ["yorecuerdo"],
      template: './src/yo-recuerdo/index.html',
      filename: 'yo-recuerdo.html'
    })
  ]
};