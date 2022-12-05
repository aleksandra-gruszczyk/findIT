import connection from '../connection.js'

function addNewJob(newJob, db = connection) {
  return db('jobs').insert(newJob)
}

function addSkills(skills, db = connection) {
  return db('skills').insert(skills)
}

export default { addNewJob, addSkills }
