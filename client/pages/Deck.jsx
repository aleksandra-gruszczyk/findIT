import { JobCard } from '@components/Card'
import FavouritesCounter from '@components/FavouritesCounter'
import FilterForm from '@components/FilterForm'
import Utils from '@components/utils'
import { css } from '@emotion/react'
import useStoreJobFavourites from '@store/jobFavourites'
import useStoreJobs from '@store/jobs'
import { useEffect } from 'react'

import { TutorialCard } from '@components/Card/TutorialCard'


export default function CardView() {
  const resetJobs = useStoreJobs((state) => state.resetJobs)
  useEffect(resetJobs, [])

  return (
    <div css={styles.cardView}>
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
  const hasJobs = jobs.length > 0
  const items = hasJobs
    ? jobs.map((job) => <JobCard key={job.id} job={job} />)
    : [<TutorialCard key='item' />]

  const swipeRightHandler = (i) => {
    if (!hasJobs) {
      return
    }
    addToFavourites(jobs[i])
  }

  return (
    <div>
      <Utils.SwipeableStack onSwipeRight={swipeRightHandler}>
        {items}
      </Utils.SwipeableStack>
      <FavouritesCounter css={styles.favourites} />
    </div>
  )
}

const styles = {
  cardView: css`
    width: 100%;
    /* Ensure that absolute children are contained within this parent */
    position: relative;
    /* This element will be given any remaining space on the flex-axis */
    flex-grow: 1;
    background: lightblue;
  `,

  favourites: css`
    position: absolute;
    top: 0;
    right: 0;

    margin: 8px;
  `,
}
