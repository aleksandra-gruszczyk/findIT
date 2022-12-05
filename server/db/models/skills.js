import connection from '../connection.js'

export function getAll(db = connection) {
  return db('skills').select('skill')
}

export function getSkillsForJobId(id, db = connection) {
  return db('jobs_skills')
    .where({ jobs_id: id })
    .join('skills', 'skills.id', 'skills_id')
    .select('skill')
    .then((skills) => skills.map(({ skill }) => skill))
}

export default {
  getAll,
  getSkillsForJobId,
}
