import 'dotenv/config'

import express from 'express'
import path from 'path'

import routes from './routes/index.js'

const server = express()


// Additional configuration:
server.use(express.json())
// Required for form submission to support receiving data on `req.body`:
server.use(express.urlencoded({ extended: false }))
server.use('/assets', express.static(path.resolve('server/public')))

// Routes:
server.use('/api/v1', routes)


const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

if (!isDev) {
  server.use(express.static(path.resolve('dist')))
  server.use('*', (req, res) => {
    res.sendStatus(404)
  })
} else {
  server.use('*', (req, res) => {
    res.status(404).send('Not Found: Running in dev mode')
  })
}

export default server
