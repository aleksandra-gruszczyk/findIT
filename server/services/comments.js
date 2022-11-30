import { comments } from '../db/models/index.js'

export async function add(newComment) {
  return comments.add(newComment)
}

export async function remove(id) {
  return comments.remove(id)
}
