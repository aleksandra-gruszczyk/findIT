import { getJobs } from '../apis/jobs'

export const SET_JOBS = 'SET_JOBS'

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    payload: jobs,
  }
}

export function fetchJobs() {
  return (dispatch) => {
    return getJobs().then((jobs) => {
      dispatch(setJobs(jobs))

    })
  }
}
