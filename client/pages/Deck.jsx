import { JobCard } from '@components/Card'
import { TutorialCard } from '@components/Card/TutorialCard'
import FilterForm from '@components/FilterForm'
import Utils from '@components/utils'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import useStoreJobFavourites from '@store/jobFavourites'
import useStoreJobs from '@store/jobs'
import { useEffect } from 'react'

export default function CardView() {
  const resetJobs = useStoreJobs((state) => state.resetJobs)
  useEffect(resetJobs, [])

  return (
    // <div css={styles.cardView}>
    <StyledCardView>
      <CardStack />
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        <FilterForm />
      </div>
      {/* </div> */}
    </StyledCardView>
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
    addToFavourites(jobs[i].id)
  }

  return (
    <Utils.SwipeableStack onSwipeRight={swipeRightHandler}>
      {items}
    </Utils.SwipeableStack>
  )
}

// How to use the `css` prop from emotion:
// const styles = {
//   cardView: css`
//     width: 100%;
//     /* Ensure that absolute children are contained within this parent */
//     position: relative;
//     /* This element will be given any remaining space on the flex-axis */
//     flex-grow: 1;
//     background: lightblue;
//   `,
// }

// How to use the `styled` HoC from emotion:
// Using styled API to make a component instead of using the `css` prop
// can accept a function in `${}` to use the theme prop:
const StyledCardView = styled.div`
  width: 100%;
  /* Ensure that absolute children are contained within this parent */
  position: relative;
  /* This element will be given any remaining space on the flex-axis */
  flex-grow: 1;
  /* background: lightblue; */
`
