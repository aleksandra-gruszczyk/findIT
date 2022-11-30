import { badgers } from '../services/index.js'

export async function getAll(req, res) {
  try {
    const honeybadgers = await badgers.getAll()

    res.json(honeybadgers)
  } catch(e) {
    console.error(e)
    res.sendStatus(500)
  }
}

export async function getOne(req, res) {
  const id = Number(req.params.id)

  try {
    const honeybadger = await badgers.getOne(id)

    res.json(honeybadger)
  } catch(e) {
    console.error(e)
    res.sendStatus(500)
  }
}
