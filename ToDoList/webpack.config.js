// webpack.config.js

//The path module provides utilities for working with file and directory paths. It can be accessed.
var path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            presets: ['env', 'react'] //
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [".js", '.jsx', '*']
  }
};
