import express from 'express'

import badgers from './badgers.js'
import jobs from './jobs.js'

const router = express.Router()
router.use('/badgers', badgers)
router.use('/jobs', jobs)
export default router
