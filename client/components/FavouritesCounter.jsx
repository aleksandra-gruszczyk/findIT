import { Button, Space, Text } from '@mantine/core'
import useStoreJobFavourites from '@store/jobFavourites'
import { BsSuitHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function FavouritesCounter(props) {
  const favourites = useStoreJobFavourites((state) => state.favourites)

  return (
    <Link to='/saved'>
      <Button color='orange' radius='md' className={props.className}>
        <BsSuitHeartFill />
        <Space w='sm' />
        <Text>{favourites.length}</Text>
      </Button>
    </Link>
  )
}
