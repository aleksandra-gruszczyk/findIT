import { ActionIcon } from '@mantine/core'
import useStoreJobFavourites from '@store/jobFavourites'
import { BsSuitHeartFill } from 'react-icons/bs'

export function RemoveButton({ job }) {
  const removeFromFavourites = useStoreJobFavourites(
    (state) => state.removeFromFavourites
  )

  return (
    <ActionIcon
      size='xl'
      radius='xl'
      onClick={() => removeFromFavourites(job.id)}
      className='remove-btn'
      color='primary'
    >
      <BsSuitHeartFill size={24} />
    </ActionIcon>
  )
}
