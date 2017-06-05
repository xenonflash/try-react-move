var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': path.resolve(__dirname, './src/app.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: path.resolve(__dirname, './public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules'),
        options: {
          cacheDirectory: './webpack_cache/',
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}