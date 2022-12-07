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
    const jobs = await getJobs({
      skills: ['.Net', 'React Native'],
      location: 'Auckland',
    })
    expect(jobs).toHaveLength(2)
  })
})

describe('gets all data from both jobs and skills table', () => {
  it('gets job by id', async () => {
    const job = await getById(1)
    const expected = {
      id: 1,
      company_name: 'Tribe',
      role: 'Software Engineer',
      location: 'Auckland',
      byline: 'Showcase how technology can enhance performance in sport.',
      logo: 'tribe.svg',
      logo_bg: 'tribe-bg.jpg',
      details:
        'At Tribe we have our guiding light to show us the way. We bring our whole selves to work. We encourage inclusion in every single interaction.\n\nWe genuinely care about people and are curious about their stories. We celebrate all points of view. We will help you find your tribe, the same way we have.\n\nWe’re all on a journey together so come along!',
      apply_link:
        'https://www.seek.co.nz/job/59243722?type=standout#sol=138d99a65a217c76a2f4a0120e1a71da3bee7bfc',
      skills: ['.Net', 'React Native'],
    }
    expect(job).toEqual(expected)
  })
})
