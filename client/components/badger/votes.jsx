import React from 'react'
import request from 'superagent'
import styles from './styles'

function Votes({ id, votes }) {
  return (
    <div css={styles.votes}>
      <button onClick={() => sendVote(id, 'upvote')}>⇈</button>
      <span>{votes}</span>
      <button onClick={() => sendVote(id, 'downvote')}>⇊</button>
    </div>
  )
}

async function sendVote(id, action) {
  await request.put(`/api/v1/badgers/${id}/votes`).send({ action })
}

export default Votes
