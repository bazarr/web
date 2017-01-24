const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.jsx?$/,
    },{
      test: /\.css/,
      loaders: ['style', 'css'],
      include: __dirname + '/src'
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js/'),
  },
};
