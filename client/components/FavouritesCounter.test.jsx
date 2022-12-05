import FavouritesCounter from '@components/FavouritesCounter'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, it, vi } from 'vitest'

import useFavourites from '../store/jobFavourites'

vi.mock('../store/jobFavourites')

describe('<FavouritesCounter/>', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  useFavourites.mockReturnValue([1, 3, 4])
  it('should show the counter button', () => {
    render(<FavouritesCounter />, { wrapper: MemoryRouter })

    const link = screen.getByRole('link', { name: /to favourites/i })
    expect(link).toHaveTextContent(/3/i)
  })
})

// test('restarting the gesture should book-keep offset and reset movement', () => {
//   rerender(<Component gestures={['Drag']} />)
//   fireEvent.pointerDown(screen.getByText('swipe'), { pointerId: 4, clientX: 10, clientY: 50, buttons: 1 })
//   fireEvent.pointerMove(swipeCard, { pointerId: 4, clientX: 90, clientY: 120, buttons: 1 })

// expect something here
// })

// fireEvent.pointerDown(screen.getByText('swipe'), {
//   pointerId: 1,
//   clientX: 10,
//   clientY: 50,
//   buttons: 1,
// })
