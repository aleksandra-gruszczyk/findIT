import nock from 'nock'
import { describe, expect, it } from 'vitest'

import { getJobs } from './jobs'

describe('Client API', () => {
  it('getsJobs should receive a response (array of jobs)', async () => {
    const expected = [
      {
        id: '0',
        company_name: 'Fingo',
        role: 'Java Developer',
        location: 'Auckland',
        details: 'something something',
        byline:
          'In this role, you will be assisting application support, reporting writing as well as business analysis to support the organisation.',
        logo: 'image.png',
        apply_link: 'https://www.seek.co.nz/job/59334044',
        skills: ['SQL', 'C#', 'MontyPython'],
      },
    ]

    const scope = nock('http://localhost')
      .post('/api/v1/jobs')
      .reply(200, expected)

    const jobsArr = await getJobs()
    expect(jobsArr).toEqual(expected)
    expect(scope.isDone()).toBe(true)
  })
})
