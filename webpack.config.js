var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.jsx?$/
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js/')
  }
};
