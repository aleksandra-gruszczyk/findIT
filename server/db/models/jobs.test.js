import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import connection from '../connection.js'
import { getById, getJobs } from './jobs.js'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('gets jobs filtered by location and skillIdArr', () => {
  it('does something', async () => {
    const jobs = await getJobs([1, 2], 'Auckland')
    expect(jobs).toHaveLength(3)
  })
})

describe('gets all data from both jobs and skills table', () => {
  it('gets job by id', async () => {
    const job = await getById(1)
    expect(job).toHaveProperty('role', 'Software Engineer')
    expect(job).toHaveProperty('skills', ['.Net', 'React Native'])
    expect(job.location).toBe('Auckland')
    expect(job.byline).toBe(
      'Showcase how technology can enhance performance in sport'
    )
    expect(job.company_name).toBe('Tribe')
    expect(job.logo).toBe('tribe.png')
    expect(job.details).toBe(
      'At Tribe we have our guiding light to show us the way. We bring our whole selves to work. We encourage inclusion in every single interaction. We genuinely care about people and are curious about their stories. We celebrate all points of view. We will help you find your tribe, the same way we have. We’re all on a journey together so come along…'
    )
    expect(job.apply_link).toBe(
      'https://www.seek.co.nz/job/59243722?type=standout#sol=138d99a65a217c76a2f4a0120e1a71da3bee7bfc'
    )
  })
})
