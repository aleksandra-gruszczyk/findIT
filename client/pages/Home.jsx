import useStoreJobFilters from '@store/jobFilters'
import { useEffect } from 'react'
import request from 'superagent'

import Filter from '../components/FilterForm'

export default function Home() {
  const setChoices = useStoreJobFilters((state) => state.setChoices)

  useEffect(() => {
    request.get('/api/v1/job-filters').then((res) => setChoices(res.body))
  }, [])

  return (
    <div>
      <Filter />
    </div>
  )
}
