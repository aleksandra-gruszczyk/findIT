import request from 'superagent'
const rootUrl = '/api/v1/'
export function getJobs(queryFilter) {
  return request
    .post(rootUrl + 'jobs')
    .send(queryFilter)
    .then((res) => {
      return res.body
    })
}
