import connection from '../connection.js'

export function addNewJob(newJob, db = connection) {
  return db('jobs').insert(newJob)
}

export function addSkills(skills, jobs_id, db = connection) {
  const rows = skills.map((skills_id) => {
    return { jobs_id, skills_id }
  })
  console.log(rows)
  return db('jobs_skills').insert(rows)
}

export default { addNewJob, addSkills }
