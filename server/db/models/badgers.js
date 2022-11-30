import connection from '../connection.js'

export function getAll(db = connection) {
  return db('honeybadgers')
    .join('votes', 'honeybadgers.id', 'votes.honeybadger_id')
    .select('honeybadgers.*', 'votes.total as votes')
}

export function getById(id, db = connection) {
  return getAll(db).where({id}).first()

  // return db('honeybadgers')
  //   .where({id})
  //   .join('votes', 'honeybadgers.id', 'votes.honeybadger_id')
  //   .select('honeybadgers.*', 'votes.total as votes')
  //   .first()
}
