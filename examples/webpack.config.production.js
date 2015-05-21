var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: './index',

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    modulesDirectories: ['node_modules', '../src'],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.NormalModuleReplacementPlugin(
      /^webpack-react-starter$/,
      '../src/index'
    ),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [new RegExp(path.join(__dirname, '../src'))]
      }
    ]
  },

  eslint: {
    configFile: '../.eslintrc',
    emitError: true
  }
  
};