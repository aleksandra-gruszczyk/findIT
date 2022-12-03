import { css } from '@emotion/react'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const Slider = ({ children }) => {
  const [{ x, transform, scale }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    transform: 'rotateY(90deg)',
    // ...left,
  }))
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      transform: active ? `rotateY(${x}deg)` : '',
      scale: active ? 1.1 : 1,
      // ...(x < 0 ? left : right),
      // immediate: (name) => active && name === 'x',
    })
  )

  return (
    <animated.div {...bind()} style={{ touchAction: 'none' }}>
      <animated.div style={{ x, transform, scale }}>{children}</animated.div>
    </animated.div>
  )
}

export default function App({ children }) {
  return (
    <div>
      <Slider>{children}</Slider>
    </div>
  )
}
