import express from 'express'
import path from 'path'
import swig from 'swig'

import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './template'

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.engine('swig', swig.renderFile)
app.set('view engine', 'swig')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Document',
    html: renderToString(<App />)
  })
})

export default app
