import express from 'express'

import jobs from './jobs.js'
import skills from './skills.js'

const router = express.Router()

router.use('/jobs', jobs)
router.use('/skills', skills)

export default router
