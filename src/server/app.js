import express from 'express'
import path from 'path'
import swig from 'swig'

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.engine('swig', swig.renderFile)
app.set('view engine', 'swig')

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Document'
  })
})

export default app
