import express from 'express'

import * as db from '../db/models/index.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const filterQuery = req.body

  try {
    const jobs = await db.jobs.getJobs(filterQuery)
    console.log(jobs)
    res.json(jobs)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const job = await db.jobs.getById(id)
    res.json(job)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

export default router
