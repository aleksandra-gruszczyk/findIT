export const up = async (knex) => {
  return knex.schema.createTable('facilitators', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('phrase')
  })
}

export const down = async (knex) => {
  return knex.schema.dropTable('facilitators')
}
