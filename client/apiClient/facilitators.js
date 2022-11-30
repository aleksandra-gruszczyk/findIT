import request from 'superagent'

export function fetchFacilitators() {
  return request.get('/api/facilitators').then((res) => res.body.facilitators)
}

export function deleteFacilitator(id) {
  return request.delete(`/api/facilitators/${id}`).then((res) => res.body)
}
