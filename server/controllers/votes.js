import { votes } from '../services/index.js'

export async function update(req, res) {
  const vote = { 
    id: Number(req.params.id),
    action: req.body.action,
  }

  try {
    await votes.update(vote)
    res.sendStatus(200)
  } catch(e) {
    console.error(e)
    res.sendStatus(500)
  }
}
