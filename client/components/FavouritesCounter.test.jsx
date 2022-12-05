import '@testing-library/jest-dom'

import FavouritesCounter from '@components/FavouritesCounter'
import { Button, Text } from '@mantine/core'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, it, vi } from 'vitest'

import useFavourites from '../store/jobFavourites'

describe('<FavouritesCounter/>', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  vi.spyOn(useFavourites, 'addToFavourites', 'set').mockImplementation((fn) =>
    fn({
      favourites: [0, 1, 4],
    })
  )
  it('should show the counter button', async () => {
    render(<FavouritesCounter className={'test'} />)
    // screen.debug()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  // it('should increase the count when card is added to favourites', () => {
  //   render(<FavouritesCounter />)
  //   const count = screen.getByText('3')
  //   expect(count).toBeInTheDocument()
  // })
})
