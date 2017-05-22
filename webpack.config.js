var path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: 'cacheDirectory=true',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },

  devtool: 'cheap-module-source-map'
};
