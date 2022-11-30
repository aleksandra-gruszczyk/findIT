import server from './server.js'

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`)
})
