var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: [
      './src/client/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/client/js/'), // deploy path
    filename: '[name].js',
    publicPath: '/js/' // dev path
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel']
    }]
  }
}
