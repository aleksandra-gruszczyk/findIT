import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

import connection from '../connection.js'
import { getJobs } from './jobs.js'

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
