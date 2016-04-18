import app from './app'
import http from 'http'

import { DEV_MODE, output } from '../../webpack.config'

var port = process.env.PORT || 3000
var devPort = Number(port) + 1

if (DEV_MODE) {
  var proxy = require('proxy-middleware')
  var url = require('url')
  app.use(output.publicPath, proxy(url.parse(url.resolve(`http://localhost:${devPort}/`, output.publicPath))))
} else {
  var express = require('express')
  app.use(output.publicPath, express.static(output.path))
}

var server = http.createServer(app)
server.listen(port)
server.on('listening', () => {
  console.log(`App listening on ${server.address().port}.`)
})
