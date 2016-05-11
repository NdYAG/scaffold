import app from './app'
import http from 'http'

import { IS_DEV_MODE, PORT, DEV_PORT, output } from '../../config/'

if (IS_DEV_MODE) {
  var proxy = require('proxy-middleware')
  var url = require('url')
  app.use(output.publicPath, proxy(url.parse(url.resolve(`http://localhost:${DEV_PORT}/`, output.publicPath))))
} else {
  var express = require('express')
  app.use(output.publicPath, express.static(output.path))
}

var server = http.createServer(app)
server.listen(PORT)
server.on('listening', () => {
  console.log(`App listening on ${server.address().port}.`)
})
