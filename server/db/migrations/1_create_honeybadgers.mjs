export const up = (knex) => {
  return knex.schema.createTable('honeybadgers', (table) => {
    table.increments('id').primary()
    // table.integer('votes').defaultTo(0)
    table.string('name').notNullable()
    table.string('image').notNullable()
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('honeybadgers')
}
