export const up = (knex) => {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('company_name').notNullable()
    table.string('role').notNullable()
    table.string('location').notNullable()
    table.text('details').notNullable()
    table.string('byline').notNullable()
    table.string('logo').notNullable()
    table.string('logo_bg').notNullable()
    table.string('apply_link').notNullable()
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('jobs')
}
