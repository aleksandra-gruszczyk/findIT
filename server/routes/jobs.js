import express from 'express'

import * as db from '../db/models/index.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const filterQuery = req.body

  try {
    const jobs = await db.jobs.getJobs(filterQuery)
    res.json(jobs)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.post('/add', async (req, res) => {
  const job = req.body
  const newJob = {
    job: {
      company_name: job.company_name,
      role: job.role,
      location: job.location,
      byline: job.byline,
      logo: job.logo,
      details: job.details,
      apply_link: job.apply_link,
    },
    skills: job.skills,
  }
  try {
    const job_id = await db.jobs.addNewJob(newJob)
    const skills = await db.skills.getSkillsForJobId(job_id)
    const newNewJob = { ...newJob.job, skills, id: job_id }
    res.json(newNewJob)
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
