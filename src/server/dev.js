import express from 'express'
import http from 'http'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { DEV_PORT } from '../../config/'
import config from '../../config/webpack.config'

config.entry.app.unshift(`webpack-hot-middleware/client?path=http://localhost:${DEV_PORT}/__webpack_hmr`)

// https://github.com/gaearon/react-transform-hmr/issues/5
config.module.loaders[0].query.plugins.push([
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
])

var app = express()
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
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
