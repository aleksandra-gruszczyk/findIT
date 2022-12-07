import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import connection from '../connection.js'
import { getAll, getSkillsForJobId } from './skills.js'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('gets all skills from database', () => {
  it('returns all skills with their ids', async () => {
    const skill = await getAll()
    expect(skill).toHaveLength(22)
  })
})

describe('gets skills for a specific job', () => {
  it('given a job id, it returns all the skills for the job', async () => {
    const skills = await getSkillsForJobId(1)
    const expected = ['.Net', 'React Native']
    expect(skills).toEqual(expected)
  })
})
