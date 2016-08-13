var webpack = require('webpack');
var _ = require('lodash');
var config = module.exports = require('./main.config.js');
config.plugins.push(new webpack.HotModuleReplacementPlugin())

config = _.merge(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'sourcemap',
});

var HotDevServerPort = 3500;

config.entry.app.push(
  'webpack-dev-server/client?http://localhost:' + HotDevServerPort,
  'webpack/hot/only-dev-server'
);

config.output.publicPath = 'http://localhost:' + HotDevServerPort + '/assets/',

config.plugins.push(
  new webpack.optimize.CommonsChunkPlugin('common', 'common-bundle.js')
);
