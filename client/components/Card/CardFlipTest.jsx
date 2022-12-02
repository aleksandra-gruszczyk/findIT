import * as Card from '@components/Card/Card'
import Flip from '@components/Card/Flip'
import { animated } from '@react-spring/web'
import useJobs from '@store/jobs'
import { useEffect } from 'react'
import request from 'superagent'

export default function JobCard() {
  const jobs = useJobs((state) => state.jobs)
  const setJobs = useJobs((state) => state.setJobs)

  useEffect(() => {
    request.get('/api/v1/jobs/1').then((res) => setJobs([res.body]))
  }, [])

  // TODO: Get job from props instead of first job from jobs store?
  const job = jobs[0]

  if (!job) {
    return
  }

  return (
    <div>
      <Flip
        front={(props) => <Animated.Front job={job} {...props} />}
        back={(props) => <Animated.Back job={job} {...props} />}
      />
    </div>
  )
}

const Animated = {
  Front: animated(Card.Front),
  Back: animated(Card.Back),
}
