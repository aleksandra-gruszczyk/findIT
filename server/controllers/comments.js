import { comments } from '../services/index.js'

export async function add(req, res) {
  const honeybadger_id = Number(req.params.id)
  const { comment } = req.body
  const newComment = { honeybadger_id, comment }

  try {
    const added = await comments.add(newComment)
    res.status(200).json({added})
  } catch(e) {
    // SqliteError can be caught here
    console.error(e)
    // If something goes wrong send a 500 error (Internal Server Error):
    res.sendStatus(500)
  }
}

export async function remove(req, res) {
  const id = Number(req.params.id)

  try {
    await comments.remove(id)
    res.sendStatus(200)
  } catch(e) {
    console.error(e)
    res.sendStatus(500)
  }
}
