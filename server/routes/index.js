import express from 'express'

import badgers from './badgers.js'

const router = express.Router()
router.use('/badgers', badgers)

export default router
