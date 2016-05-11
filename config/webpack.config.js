var config = require('./index')
var plugins = []
// var cssLoaders = 'css-loader!postcss-loader'

if (config.IS_DEV_MODE) {
  var webpack = require('webpack')
  plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = {
  entry: config.entry,
  output: config.output,
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
}
