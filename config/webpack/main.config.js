var path = require('path');
var webpack = require('webpack');

var config = module.exports = {

  // the base path which will be used to resolve entry points
  context: path.join(__dirname, '../', '../'),

  // the main entry point for our application's frontend JS
  entry: {
    app: ['babel-polyfill', 'bootstrap-loader', './app/frontend/javascripts/entry.js'],
    devise: ['bootstrap-loader']
  }
};

config.output = {

  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, '../', '../', 'app', 'assets', 'javascripts'),

  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name]-bundle.js',

  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: '/assets/',

  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
};

config.resolve = {

  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.js'],

  // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
  // Bower, we want it to look in there too
  modulesDirectories: ['node_modules'],
};

config.module = {
  loaders: [
    {
      test : /\.jsx?/,
      include : path.join(__dirname, '../', '../', 'app', 'frontend', 'javascripts'),
      loaders : ['react-hot']
    },
    {
      test : /\.jsx?/,
      include : path.join(__dirname, '../', '../', 'app', 'frontend', 'javascripts'),
      loader : 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-2', 'react'],
      }
    },

    {
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }
  ]
}

config.plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
];
