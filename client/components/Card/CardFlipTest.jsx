import * as Card from '@components/Card/Card'
import { Flip } from '@components/Card/Flip'
import { useRef } from 'react'

export function JobCard({ job }) {
  const ref = useRef(null)
  if (!job) {
    return
  }

  const toggleFlip = () => {
    ref.current.toggleFlip()
  }

  return (
    <Flip
      front={<Card.Front job={job} flipCard={toggleFlip} />}
      back={<Card.Back job={job} flipCard={toggleFlip} />}
      ref={ref}
    />
  )
}
