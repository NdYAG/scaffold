var path = require('path')
var DEV_MODE = process.env.NODE_ENV !== 'production'
var plugins = []
// var cssLoaders = 'css-loader!postcss-loader'

if (DEV_MODE) {
  var webpack = require('webpack')
  plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = {
  DEV_MODE: DEV_MODE,
  entry: {
    app: [
      './src/client/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/client/public/'), // deploy path
    filename: '[name].js',
    publicPath: '/public/' // dev path
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
}
