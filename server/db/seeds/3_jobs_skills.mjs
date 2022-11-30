import seedHelper from '../utils/seeds.js'

export const seed = async (knex) => {
  await knex('jobs_skills').truncate()
  await knex('jobs_skills').insert(seedHelper.jobs_skills_mapping)
}
