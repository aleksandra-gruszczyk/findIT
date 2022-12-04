import utils from '@components/utils'
import { useRef } from 'react'

import * as Card from './Card'

export function JobCard({ job }) {
  const ref = useRef(null)
  if (!job) {
    return
  }

  const toggleFlip = () => {
    ref.current.toggleFlip()
  }

  return (
    <utils.Flip
      front={<Card.Front job={job} flipCard={toggleFlip} />}
      back={<Card.Back job={job} flipCard={toggleFlip} />}
      ref={ref}
    />
  )
}
