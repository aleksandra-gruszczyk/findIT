import express from 'express'

import * as db from '../db/models/index.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const skills = await db.skills.getAll()
    res.json(skills)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

export default router
