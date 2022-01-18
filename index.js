const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static('public'));

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(8080, () => console.log('listening'));
