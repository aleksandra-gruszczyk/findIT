import express from 'express'

import filters from './job-filters.js'
import jobs from './jobs.js'

const router = express.Router()

router.use('/jobs', jobs)
router.use('/job-filters', filters)

export default router
