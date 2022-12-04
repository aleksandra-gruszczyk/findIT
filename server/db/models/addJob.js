import connection from '../connection.js'

function addJob(newJob, db = connection) {
  return db('jobs').insert(newJob)
}

module.exports = { addJob }
