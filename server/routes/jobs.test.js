import request from 'supertest'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import * as db from '../db/models/jobs'
import server from '../server'

vi.mock('../db/models/jobs')

// const mock = vi.fn().mockImplementation(getLatest)

beforeEach(() => {
  vi.resetAllMocks()
})

describe('get /api/v1/jobs', () => {
  it('should return jobs filtered via request body', () => {
    db.getJobs.mockReturnValue(
      Promise.resolve([
        {
          id: 0,
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
      ])
    )

    return request(server)
      .post('/api/v1/jobs')
      .then((res) => {
        expect(res.body).toHaveLength(1)
      })
  })
})

describe('post /api/v1/jobs/add', () => {
  it('should send a new job data', () => {
    db.addNewJob.mockImplementation(
      Promise.resolve([
        {
          company_name: 'Fingo',
          role: 'Java Developer',
          location: 'Auckland',
          details: 'something something',
          byline:
            'In this role, you will be assisting application support, reporting writing as well as business analysis to support the organisation.',
          logo: 'image.png',
          logo_bg: 'black',
          apply_link: 'https://www.seek.co.nz/job/5935695656',
          skills: ['Squeal', 'CHush'],
        },
      ])
    )
    return request(server)
      .post('/api/v1/jobs/add')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
