import express from 'express'
import http from 'http'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config'

var port = process.env.PORT || 3000
var devPort = Number(port) + 1

config.entry.app.unshift(`webpack-hot-middleware/client?path=http://localhost:${devPort}/__webpack_hmr`)

var app = express()
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  filename: 'app.js',
  noInfo: true,
  stats: {
    color: true
  }
}))
app.use(webpackHotMiddleware(compiler))

var server = http.createServer(app)
server.listen(devPort)
server.on('listening', () => {
  console.log(`Dev server listening on ${server.address().port}.`)
})
