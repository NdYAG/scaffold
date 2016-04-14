import app from './app'
import http from 'http'

var port = process.env.PORT || 3000
var devPort = Number(port) + 1

if (process.env.NODE_ENV !== 'production') {
  var proxy = require('proxy-middleware')
  var config = require('../../webpack.config')
  var url = require('url')
  app.use(config.output.publicPath, proxy(url.parse(`http://localhost:${devPort}/js/`)))
}

var server = http.createServer(app)
server.listen(port)
server.on('listening', () => {
  console.log(`App listening on ${server.address().port}.`)
})
