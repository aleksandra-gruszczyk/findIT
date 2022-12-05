import { ActionIcon } from '@mantine/core'
import useStoreJobFavourites from '@store/jobFavourites'
import { BsSuitHeartFill } from 'react-icons/bs'

export function RemoveButton({ job }) {
  const removeFromFavourites = useStoreJobFavourites(
    (state) => state.removeFromFavourites
  )

  return (
    <ActionIcon
      color='grape'
      size='xl'
      radius='xl'
      variant='filled'
      onClick={() => removeFromFavourites(job.id)}
      className='remove-btn'
    >
      <BsSuitHeartFill size={24} />
    </ActionIcon>
  )
}
