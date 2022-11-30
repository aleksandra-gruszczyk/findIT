export const up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()

    table.integer('honeybadger_id')
      .references('honeybadgers.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.string('comment').notNullable()
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('comments')
}
