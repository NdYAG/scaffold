import app from './app'
import http from 'http'

var port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  var proxy = require('proxy-middleware')
  var config = require('../../webpack.config')
  var url = require('url')
  app.use(config.output.publicPath, proxy(url.parse(`http://localhost:${port + 1}/js/`)))
}

var server = http.createServer(app)
server.listen(port)
server.on('listening', () => {
  console.log(`App listening on ${server.address().port}.`)
})
