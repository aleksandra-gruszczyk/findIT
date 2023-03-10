import Utils from '@components/utils'
import { useRef } from 'react'

import * as Card from './Card'

export function JobCard({ job, showRemove }) {
  const ref = useRef(null)
  if (!job) {
    return
  }

  const toggleFlip = () => {
    ref.current.toggleFlip()
  }

  return (
    <Utils.Flippable
      front={
        <Card.Front job={job} flipCard={toggleFlip} showRemove={showRemove} />
      }
      back={<Card.Back job={job} flipCard={toggleFlip} />}
      ref={ref}
    />
  )
}
