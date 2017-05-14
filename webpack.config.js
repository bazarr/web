const path = require('path');

module.exports = {
  node: {
    fs: "empty"
  },
  entry: {
    frontPage: "./src/front_page",
    searchResults: "./src/search_results"
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.jsx?$/,
    },{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }]
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, 'public/js/'),
  }
};
