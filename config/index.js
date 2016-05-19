var path = require('path')
var DEV_MODE = process.env.NODE_ENV || 'development'
var IS_DEV_MODE = DEV_MODE !== 'production'
var PORT = process.env.PORT || 3000
var DEV_PORT = Number(PORT) + 1

module.exports = {
  DEV_MODE: DEV_MODE,
  IS_DEV_MODE: IS_DEV_MODE,
  PORT: PORT,
  DEV_PORT: DEV_PORT,
  entry: {
    app: [
      './src/client/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../dist/client/public/'), // deploy path
    filename: '[name].js',
    publicPath: '/public/' // dev path
  }
}
