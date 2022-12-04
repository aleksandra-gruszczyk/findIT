import seedHelper from '../utils/seeds.js'

export const seed = async (knex) => {
  await knex('skills').truncate()
  await knex('skills').insert(skillRows)
}

const skillRows = Object.entries(seedHelper.skills).map(([skill, id]) => {
  return {
    id,
    skill
  }
})
