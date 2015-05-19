var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    './index'
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    modulesDirectories: ['node_modules', '../src'],
    extensions: ['', '.js', '.jsx']
  },


  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.NormalModuleReplacementPlugin(
      /^webpack-react-starter$/,
      '../src/index'
    )
  ]
};