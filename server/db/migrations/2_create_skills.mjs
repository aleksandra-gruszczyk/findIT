export const up = (knex) => {
  return knex.schema.createTable('skills', (table) => {
    table.integer('id')
    table.string('skill')
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('skills')
}
