import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from 'superagent'

export default function JobDetails() {
  const { id } = useParams()
  const [job, setJob] = useState(null)

  useEffect(() => {
    // request
    //   .get('/api/v1/jobs/' + id)
    //   .then((res) => setJob(JSON.parse(res.text)))
  }, [])

  if (!job) {
    return
  }

  return <div css={pageLayout}>{/* <Job data={job} /> */}</div>
}

const pageLayout = css`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  align-items: center;
  margin: 0 auto;
`
