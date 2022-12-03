import { JobCard } from '@components/Card/CardFlipTest'
import SwipingDeck from '@components/Deck/SwipingDeck'
import FilterForm from '@components/FilterForm'
import { Button, Space, Text } from '@mantine/core'
import useStoreJobFavourites from '@store/jobFavourites'
import useJobs from '@store/jobs'
import { BsSuitHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function CardView() {
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

  return (
    <Link to='/saved/:id'>
      <Button color='orange' radius='md'>
        <BsSuitHeartFill />
        <Space w='sm' />
        <Text>{favourites.length}</Text>
      </Button>
    </Link>
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
}
