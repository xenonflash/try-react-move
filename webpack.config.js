var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': path.join(__dirname, './src/app.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: './webpack_cache/',
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}