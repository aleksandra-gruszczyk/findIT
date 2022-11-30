export const seed = async (knex) => {
  // Foreign key delete cascade on the honeybadgers table
  // should automatically clear this table.
  //
  // However, unlike the votes table, there is a primary key
  // that auto-increments and should also be reset to 0.
  await knex('comments').truncate()

  await knex('comments').insert([
    {
      honeybadger_id: 2,
      comment: "Oh Shani, you're so fine, you're so fine, you blow my mind, hey Shani, hey Shani!",
    },
    {
      honeybadger_id: 2,
      comment: "Shani has seen better days haha"
    },
  ])
}
