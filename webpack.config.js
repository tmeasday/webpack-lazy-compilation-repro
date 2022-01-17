const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dynamic-entry.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    // port: 5000,
    hot: true,
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
  },

  experiments: {
    lazyCompilation: true,
  },
};