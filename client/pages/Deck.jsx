import SwipingDeck from '@components/Deck/SwipingDeck'
import useJobs from '@store/jobs'

// TODO: No longer a page component, should be moved to components folder
export default function Deck() {
  const jobs = useJobs((state) => state.jobs)

  return (
    <div>
      <SwipingDeck jobs={jobs} />
    </div>
  )
}
