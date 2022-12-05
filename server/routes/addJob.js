import express from 'express'

import * as db from '../db/models/index.js'
const router = express.Router()

router.post('/new', (req, res) => {
  const jobs = req.body
  const newJob = {
    company_name: jobs.companyName,
    role: jobs.role,
    location: jobs.location,
    byline: jobs.byline,
    logo: jobs.logo,
    details: jobs.details,
    apply_link: jobs.applyLink,
    //skill: skill.skill,
  }
  db.addJob
    .addNewJob(newJob)
    .then(() => res.sendStatus(201))
    .catch((e) => {
      console.error(e)
      res.sendStatus(500)
    })
})

// router.post('/:id', async (req, res) => {
//   try {
//     const jobs = await db.addJob.addNewJob()
//     const skill = await db.addJob.addSkills()
//     const newJob = {
//       company_name: jobs.companyName,
//       role: jobs.role,
//       location: jobs.location,
//       byline: jobs.byline,
//       logo: jobs.logo,
//       details: jobs.details,
//       apply_link: jobs.applyLink,
//       skill: skill.skill,
//     }
//     res.json(newJob)
//   } catch (e) {
//     console.error(e)
//     res.sendStatus(500)
//   }
// })
