import { TutorialCard } from '@components/Card/TutorialCard'
import { Logo } from '@components/Graphics'
import useJobs from '@store/jobs'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, it, vi } from 'vitest'

vi.mock('@store/jobs')
vi.mock('@components/Graphics')

describe('<TutorialCard/>', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  useJobs.mockReturnValue([])
  it('should show the card component', () => {
    render(<TutorialCard />, {
      wrapper: MemoryRouter,
    })

    const tutorial = screen.getByText(
      'Swipe right to add the card to your favourites, swipe left if you are not interested in the job!'
    )
    expect(tutorial).toBeInTheDocument()
  })
})
