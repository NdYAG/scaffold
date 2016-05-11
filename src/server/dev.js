import express from 'express'
import http from 'http'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { PORT, DEV_PORT } from '../../config/'
import config from '../../config/webpack.config'

config.entry.app.unshift(`webpack-hot-middleware/client?path=http://localhost:${DEV_PORT}/__webpack_hmr`)

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
server.listen(DEV_PORT)
server.on('listening', () => {
  console.log(`Dev server listening on ${server.address().port}.`)
})
