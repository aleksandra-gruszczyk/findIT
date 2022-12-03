import * as Card from '@components/Card/Card'
import Flip from '@components/Card/Flip'
import { animated } from '@react-spring/web'

export default function JobCard({ job, ...props }) {
  if (!job) {
    return
  }

  return (
    <animated.div
      {...props}
      style={{
        ...props.style,
      }}
    >
      {/* <Flip
        front={(props) => <Animated.Front job={job} {...props} />}
        back={(props) => <Animated.Back job={job} {...props} />}
      /> */}
      <Flip front={Animated.Front} back={Animated.Back} job={job} />
    </animated.div>
  )
}

const Animated = {
  Front: animated(Card.Front),
  Back: animated(Card.Back),
}
