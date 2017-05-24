var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var UglifyJsPlugin = require('uglify-js-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {

  entry: {
    'vendor': './static/vendor.ts',
    'app': './static/main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]

  },
  output: {
    path: './dist',
    filename: '[name].js',
    chunkFilename: '[hash].[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, include: path.resolve('static/app'), loader: 'raw' },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), options: {
          minimize: true
        }
      },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, use: 'imports?jQuery=jquery' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css']
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      //  "Tether": 'tether',
       // "window.Tether": "tether",
       // d3: 'd3',
       // Rickshaw: 'rickshaw',
       // Raphael: 'webpack-raphael',
       // 'window.Raphael': 'webpack-raphael',
        //nv: 'nvd3'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: './static/assets/images/',
        to: './static/assets/images/'
      }
    ]),
    new ExtractTextPlugin('[name].css'),
    new OptimizeCssAssetsPlugin({
      minimize: true,
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new UglifyJsPlugin({
      beautify: false, //prod
      output: {
        comments: false
      }, //prod
      mangle: {
        screw_ie8: true
      }, //prod
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false // we need this for lazy v8
      },
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]

};
