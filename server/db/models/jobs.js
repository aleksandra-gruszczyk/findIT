import connection from '../connection.js'
import { getSkillsForJobId } from './skills.js'

export function getJobs(queryFilter, db = connection) {
  const shouldFilterLocation =
    queryFilter.location && queryFilter.location !== 'Anywhere'
  const shouldFilterBySkills = queryFilter.skills?.length > 0

  // Base query, get all jobs:
  const query = db('jobs')

  if (shouldFilterLocation) {
    query.where('jobs.location', queryFilter.location)
  }

  if (shouldFilterBySkills) {
    // Converts the requested skills to id values,
    // which can then be matched to a job via jobs_skills table:
    const subquery = db('skills')
      .whereIn('skill', queryFilter.skills)
      .select('id')

    query
      .join('jobs_skills', 'jobs_id', 'jobs.id')
      .whereIn('skills_id', subquery)
  }

  // `groupBy()` to avoid duplicate rows of same job from joins.
  // Only return the jobs columns, then add the skills for each job:
  return query
    .groupBy('jobs.id')
    .select('jobs.*')
    .then((jobs) => Promise.all(jobs.map((job) => includeSkills(job))))
}

export function getById(id, db = connection) {
  return db('jobs').where({ id }).select().first().then(includeSkills)
}

export function getAllRegions(db = connection) {
  return db('jobs')
    .groupBy('location')
    .select('location')
    .then((regions) => regions.map((row) => row.location))
}

async function includeSkills(job, db = connection) {
  return {
    ...job,
    skills: await getSkillsForJobId(job.id, db),
  }
}

export async function addNewJob(newJob, db = connection) {
  const [job_id] = await db('jobs').insert(newJob.job)

  await addSkills(newJob.skills, job_id)
  return job_id
}

function addSkills(skills, jobs_id, db = connection) {
  const rows = skills.map((skills_id) => {
    return { jobs_id, skills_id }
  })
  return db('jobs_skills').insert(rows)
}

export default {
  getJobs,
  getById,
  getAllRegions,
  addNewJob,
}
