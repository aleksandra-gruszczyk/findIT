import { JobCard } from '@components/Card/CardFlipTest'
import SwipingDeck from '@components/Deck/SwipingDeck'
import FavouritesCounter from '@components/FavouritesCounter'
import FilterForm from '@components/FilterForm'
import { css } from '@emotion/react'
import useStoreJobFavourites from '@store/jobFavourites'
import useStoreJobs from '@store/jobs'
import { useEffect } from 'react'

export default function CardView() {
  const resetJobs = useStoreJobs((state) => state.resetJobs)
  useEffect(resetJobs, [])

  return (
    <div style={styles.cardView}>
      <CardStack />
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        <FilterForm />
      </div>
    </div>
  )
}

export function CardStack() {
  const jobs = useStoreJobs((state) => state.jobs)
  const addToFavourites = useStoreJobFavourites(
    (state) => state.addToFavourites
  )
  const items = jobs.map((job) => <JobCard key={job.id} job={job} />)

  return (
    <div>
      <SwipingDeck onSwipeRight={(i) => addToFavourites(jobs[i])}>
        {items}
      </SwipingDeck>
      <FavouritesCounter css={styles.favourites} />
    </div>
  )
}

const styles = {
  cardView: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
  },

  favourites: css`
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
  `,
}
