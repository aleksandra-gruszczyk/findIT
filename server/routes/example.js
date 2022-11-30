import express from 'express'
const { badgers, comments, votes } = require('../controllers')

const router = express.Router()

router.get('/', badgers.getAll)
router.get('/:id', badgers.getOne)

router.put('/:id/votes', votes.update)

// router.get('/:id/comments', comments.getAll)
router.post('/:id/comments', comments.add)
router.delete('/:id/comments', comments.remove)

export default router
