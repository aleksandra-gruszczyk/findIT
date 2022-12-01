import { useEffect, useState } from 'react'
import request from 'superagent'
// import SwipeView from '@components/SwipeView'

export default function Home() {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    // `useEffect()` cannot take an async function as a parameter.
    // You need to define a new async function to use one,
    // or just use a promise with `.then(res => { ... })` instead.
    const getJobs = async () => {
      const res = request.get('/api/v1/jobs')
      // Not implemented yet..
      // setJobs(JSON.parse(res.text))
    }

    getJobs()
  }, [])

  if (!jobs) {
    return
  }

  return <div>{/* <SwipeView jobs={jobs} /> */}</div>
}
