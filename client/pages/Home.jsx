import LandingPage from '@components/LandingPage'
import useStoreJobFilters from '@store/jobFilters'
import { useEffect } from 'react'
import request from 'superagent'

import Filter from '../components/FilterForm'
import CardStack from './Deck'

export default function Home() {
  return (
    <div>
      <CardView />
      <LandingPage />
    </div>
  )
}

function CardView() {
  const setChoices = useStoreJobFilters((state) => state.setChoices)

  useEffect(() => {
    request.get('/api/v1/job-filters').then((res) => setChoices(res.body))
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <CardStack />
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        <Filter />
      </div>
    </div>
  )
}
