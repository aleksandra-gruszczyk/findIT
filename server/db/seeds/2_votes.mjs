export const seed = async (knex) => {
  // Foreign key delete cascade on the honeybadgers table
  // should automatically clear this table.

  await knex('votes').insert([
    {
      honeybadger_id: 0,
      total: 5,
    },
    {
      honeybadger_id: 1,
      total: 4,
    },
    {
      honeybadger_id: 2,
      total: 2,
    },
    {
      honeybadger_id: 3,
      total: 1,
    }
  ])
}
