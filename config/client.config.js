var path = require('path')
var config = require('./index')
var plugins = []

if (config.IS_DEV_MODE) {
  var webpack = require('webpack')
  plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = {
  entry: {
    app: [
      './src/client/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../dist/client/public'), // deploy path
    filename: '[name].js',
    publicPath: '/public/' // dev path
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: [
          [
            'react-transform', {
              'transforms': [{
                'transform': 'react-transform-hmr',
                'imports': ['react'],
                'locals': ['module']
              }, {
                'transform': 'react-transform-catch-errors',
                'imports': ['react', 'redbox-react']
              }]
            }
          ]
        ]
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?module'
    }]
  }
}
