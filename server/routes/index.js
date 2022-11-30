import express from 'express'

import jobs from './jobs.js'

const router = express.Router()

router.use('/jobs', jobs)
export default router
