import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJobs } from '../actions/jobs'

useEffect(() => {
  dispatch(fetchJobs())
}, [])

export default function JobList(){
  return(
    <section>
        <ul>
          {jobs.map((job, i) => (
            <li key={i}>
              
                <h2>{job.company_name}</h2> <h3>{job.role}</h3> {job.location} {job.requirements} {job.byline}
                {job.logo}
                </li>
          ))}
        </ul>
      </section>
  )
}