import JobCard from '@components/Card/CardFlipTest'
import SwipingDeck from '@components/Deck/SwipingDeck'
import useStoreJobFavourites from '@store/jobFavourites'
import useStoreJobFilters from '@store/jobFilters'
import useJobs from '@store/jobs'
import { useEffect } from 'react'
import request from 'superagent'

import Filter from '../components/FilterForm'

export default function CardView() {
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

export function CardStack() {
  const jobs = useJobs((state) => state.jobs)
  const addToFavourites = useStoreJobFavourites(
    (state) => state.addToFavourites
  )
  const items = jobs.map((job) => <JobCard key={job.id} job={job} />)

  return (
    <div>
      <SwipingDeck onSwipeRight={(i) => addToFavourites(jobs[i])}>
        {items}
      </SwipingDeck>
      <FavouritesCounter />
    </div>
  )
}

// If we didn't have a separate component for this,
// when the `favourites` state is updated elsewhere (eg within SwipingDeck),
// it would re-render the Deck component, which then re-renders SwipingDeck
// TODO: This can now be split out to a separate component
function FavouritesCounter() {
  const favourites = useStoreJobFavourites((state) => state.favourites)

  return <span style={{ position: 'absolute' }}>{favourites.length}</span>
}
