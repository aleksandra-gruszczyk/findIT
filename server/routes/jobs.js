import express from 'express'

import db from '../db/models/jobs.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await db.getJobs()
    res.json(jobs)
  } catch(e) {
    console.error(e)
    res.sendStatus(500)
  }
})

export default router
