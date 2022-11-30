import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import request from 'superagent'
import Badger from '@components/badger'
import CommentsSection from '@components/comments'

function Details() {
  const { id } = useParams()
  const [hb, setBadger] = useState(null)

  useEffect(() => {
    request
      .get('/api/v1/badgers/' + id)
      .then((res) => setBadger(JSON.parse(res.text)))
  }, [])

  if (!hb) {
    return
  }

  return (
    <div css={pageLayout}>
      <Badger.Item data={hb} />
      <CommentsSection id={hb.id} comments={hb.comments} />
    </div>
  )
}

const pageLayout = css`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  margin: 0 auto;
`

export default Details
