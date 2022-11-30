import { votes } from '../db/models/index.js'

export async function update({id, action}) {
  switch (action) {
    case "upvote": { 
      await votes.up(id)
      break
    }
    case "downvote": {
      await votes.down(id)
      break
    }
  }
}
