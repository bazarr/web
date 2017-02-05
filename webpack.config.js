const path = require('path');

module.exports = {
  entry: {
        frontPage: "./src/front_page",
        searchResults: "./src/search_results"
  },
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
    filename: '[name]-bundle.js',
    path: path.join(__dirname, 'public/js/'),
  },
};
