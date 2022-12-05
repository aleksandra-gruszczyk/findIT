import { JobCard } from '@components/Card'
import { css } from '@emotion/react'
import useStoreJobFavourites from '@store/jobFavourites'

export default function SavedJobs() {
  const favourites = useStoreJobFavourites((state) => state.favourites)

  // Tack on the index because who knows why
  // (but avoids a rendering bug with removals if same job id)
  // Yet if all have the key 0, the problem doesn't happen :/
  const savedJobs = favourites.map((favouriteJob, i) => (
    <li key={favouriteJob.id + '-' + i}>
      <JobCard job={favouriteJob} showRemove={true} />
    </li>
  ))

  return <ul css={grid}>{savedJobs}</ul>
}

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 100%;
  height: 100%;
  gap: 50px;
  max-width: fit-content;

  margin: 0;
  padding: 0;

  > li {
    list-style: none;
  }
`
