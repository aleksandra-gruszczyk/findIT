import connection from '../connection.js'

export function getJobs(skillIdArr, location, db = connection) {
  return db('jobs_skills')
    .join('jobs', 'jobs.id', 'jobs_id')
    .whereIn('skills_id', skillIdArr)
    .andWhere('jobs.location', location)
    .select('jobs.*')
}

export function getById(id, db = connection) {
  return db('jobs')
    .join('jobs_skills', 'jobs_id', 'jobs.id')
    .join('skills', 'jobs_skills.skills_id', 'skills.id')
    .where('jobs.id', id)
    .select()
    .then((rows) => {
      return {
        ...rows[0],
        skills: rows.map((row) => row.skill),
      }
    })
}

export default {
  getJobs,
  getById,
}
