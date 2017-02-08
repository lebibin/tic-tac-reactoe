// http://ccoenraets.github.io/es6-tutorial-react/setup/
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'app.bundle.js',
    publicPath: '/assets/js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
