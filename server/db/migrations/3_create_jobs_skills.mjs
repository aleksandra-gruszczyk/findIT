export const up = (knex) => {
  return knex.schema.createTable('jobs_skills', (table) => {
    table.increments('id').primary()

    table.integer('jobs_id')
      .references('jobs.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('skills_id')
      .references('skills.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('jobs_skills')
}
