import connection from '../connection.js'

// TODO:
// We would like to get all the jobs as an array of objects
// that also has a field with an array of skills for each job,
// and we'd like to be able to filter the results returned
// by jobs.location and by preferred skills
export function getJobs(skillIdArr, location, db = connection) {
  return (
    db('jobs_skills')
      .join('jobs', 'jobs.id', 'jobs_id')
      .whereIn('skills_id', skillIdArr)
      .andWhere('jobs.location', location)
      .select()
  )
}

export function getById(id, db = connection) {
  return getJobs(db).where({ id }).first()
}

export default {
  getJobs,
  getById,
}
