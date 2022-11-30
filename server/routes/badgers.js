import express from 'express'

import { badgers, comments, votes } from '../controllers/index.js'

const router = express.Router()

router.get('/', badgers.getAll)
router.get('/:id', badgers.getOne)

router.put('/:id/votes', votes.update)

router.post('/:id/comments', comments.add)
router.delete('/:id/comments', comments.remove)

export default router
