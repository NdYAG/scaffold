var path = require('path')

module.exports = {
  entry: './src/client/app.js',
  target: 'node',
  output: {
    path: path.join(__dirname, '../dist/server/'),
    filename: 'template.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'css-loader/locals?module'
    }]
  }
}
