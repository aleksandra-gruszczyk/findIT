import express from 'express'
const db = require('../db/jobs')

const router = express.Router()

router.get('/', (req, res) => {
  db.getJobs()
    .then(res.json)
    .catch((e) => {
      console.error(e)
      res.sendStatus(500)
    })
})

export default router
