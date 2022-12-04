import { JobCard } from '@components/Card'
import { css } from '@emotion/react'
import useStoreJobFavourites from '@store/jobFavourites'

export default function SavedJobs() {
  const favourites = useStoreJobFavourites((state) => state.favourites)

  const savedJobs = favourites.map((favouriteJob) => (
    <li key={favouriteJob.id}>
      <JobCard job={favouriteJob} />
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
