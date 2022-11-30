import { badgers, comments } from '../db/models/index.js'

export async function getAll() {
  return badgers.getAll()
}

export async function getOne(id) {
  const honeybadger = await badgers.getById(id)
  honeybadger.comments = await comments.getAllByBadgerId(id)

  return honeybadger
}
