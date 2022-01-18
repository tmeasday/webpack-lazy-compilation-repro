const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', `./simple-entry.js`],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: { hot: true },

  experiments: {
    lazyCompilation: process.env.NO_LAZY
      ? false
      : {
          test: (x) => !/webpack-hot-middleware/.test(x.nameForCondition()),
        },
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};
