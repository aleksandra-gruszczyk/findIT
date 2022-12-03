import SwipingDeck from '@components/Deck/SwipingDeck'
import useJobFavourites from '@store/jobFavourites'
import useJobs from '@store/jobs'

// TODO: No longer a page component, should be moved to components folder
export default function Deck() {
  const jobs = useJobs((state) => state.jobs)

  return (
    <div>
      <SwipingDeck jobs={jobs} />
      <FavouritesCounter />
    </div>
  )
}

// If we didn't have a separate component for this,
// when the `favourites` state is updated elsewhere (eg within SwipingDeck),
// it would re-render the Deck component, which then re-renders SwipingDeck
// TODO: This can now be split out to a separate component
function FavouritesCounter() {
  const favourites = useJobFavourites((state) => state.favourites)

  return <span style={{ position: 'absolute' }}>{favourites.length}</span>
}
