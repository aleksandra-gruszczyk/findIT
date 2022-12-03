import { css } from '@emotion/react'
import { useSpring } from '@react-spring/web'
import { useState } from 'react'

export default function Flip({ front: Front, back: Back, job }) {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring(flipConfig(flipped))

  const flipCard = () => setFlipped((state) => !state)

  return (
    <div
      css={cardContainer}
      // NOTE: This flips the card as the swipe interaction is released,
      // That also affects the swipe yeeting animation as the flip mixes in with it
      // TODO: Move this to be triggered by card flip button?
      onClick={flipCard}
    >
      <Front
        job={job}
        css={cardStyles}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <Back
        job={job}
        css={cardStyles}
        style={{
          opacity,
          transform,
          // https://react-spring.dev/basics#shorthand-style-props
          rotateY: '180deg',
        }}
      />
    </div>
  )
}

function flipConfig(flipped) {
  return {
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  }
}

const cardContainer = css`
  display: flex;
  align-items: center;
  /* height: 100%; */
  justify-content: center;
`

const cardStyles = css`
  position: absolute;
  /* max-width: 500px;
  max-height: 500px; */
  width: 350px;
  height: 450px;
  cursor: pointer;
  will-change: transform, opacity;
`
