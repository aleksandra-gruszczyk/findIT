import connection from '../connection.js'

export function getAllByBadgerId(id, db = connection) {
  return db('comments')
    .where({honeybadger_id: id})
    .select('id', 'comment')
}

export function add(newComment, db = connection) {
  return db('comments')
    .insert(newComment)
    // `.returning()` required for Postgres compatibility,
    // select columns from inserted row(s) to return:
    // (we expect only 1 row, but `.first()` does not work here)
    .returning(['id', 'comment'])
    .then(result => result[0])
}

export function remove(id, db = connection) {
  return db('comments')
    .where({id})
    .del()
}
