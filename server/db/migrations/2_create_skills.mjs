export const up = (knex) => {
  return knex.schema.createTable('skills', (table) => {
    table.increments('id').primary()
    table.string('skill')
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('skills')
}
