/* eslint no-var: 0, no-console: 0 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var webpackConfig = require('./config/webpack/development.config');

var HotDevServerPort = 3500;

var compiler = webpack(webpackConfig);

var devServer = new WebpackDevServer(compiler, {
  contentBase: 'http://localhost:3000/assets/',
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
});

devServer.listen(3500, 'localhost', function (err) {
  if (err) console.error(err);
  console.log(
    "=> Webpack development server is running on port " + HotDevServerPort
  );
});
