import { JobCard } from '@components/Card'
import { TutorialCard } from '@components/Card/TutorialCard'
import FilterForm from '@components/FilterForm'
import { Arrow } from '@components/Graphics/Arrow'
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
      <FilterForm />
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
    <>
      <Arrow direction='left' />
      <Arrow direction='right' />
      <Utils.SwipeableStack onSwipeRight={swipeRightHandler}>
        {items}
      </Utils.SwipeableStack>
    </>
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
  /* Centers the children, primarily for the form component */
  display: flex;
  justify-content: center;

  /* All below required for:
    - Avoiding clipped drag bounds
    - Ensures minimum height of drag area, so that cards stay below the form.
  */
  /* Extend the drag area to full bounds of the AppShell content */
  width: 100%;
  /* Ensure that absolute children are contained within this parent */
  position: relative;
  /* This element will be given any remaining space on the flex-axis */
  flex-grow: 1;
`
