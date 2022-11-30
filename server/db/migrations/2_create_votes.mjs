export const up = (knex) => {
  return knex.schema.createTable('votes', (table) => {
    table.integer('honeybadger_id')
      .primary()
      .references('honeybadgers.id')
      // https://stackoverflow.com/questions/53859207/deleting-data-from-associated-tables-using-knex-js/53861921#53861921
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('total').defaultTo(0)
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('votes')
}
