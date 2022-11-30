import connection from '../connection.js'

export function up(honeybadger_id, db = connection) {
  return db('votes')
    .where({honeybadger_id})
    .increment('total')
}

export function down(honeybadger_id, db = connection) {
  return db('votes')
    .where({honeybadger_id})
    .decrement('total')
}
