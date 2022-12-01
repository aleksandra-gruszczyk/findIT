import React, { useEffect, useState } from 'react'
import request from 'superagent'

export default function SavedJobs() {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    // request
    //   .get('/api/v1/jobs/saved/')
    //   .then((res) => setJobs(JSON.parse(res.text)))
  }, [])

  if (!jobs) {
    return
  }

  return <div>{/* <Job data={job} /> */}</div>
}
