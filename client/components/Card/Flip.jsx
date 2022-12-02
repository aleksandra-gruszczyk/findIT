import { css } from '@emotion/react'
import { useSpring } from '@react-spring/web'
import { useState } from 'react'

export default function Flip({ front: Front, back: Back }) {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring(springConfig(flipped))

  const flipCard = () => setFlipped((state) => !state)

  return (
    <div css={cardContainer} onClick={flipCard}>
      <Front
        css={cardStyles}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <Back
        css={cardStyles}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  )
}

function springConfig(flipped) {
  return {
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  }
}

const cardContainer = css`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`

const cardStyles = css`
  position: absolute;
  max-width: 500px;
  max-height: 500px;
  width: 350px;
  height: 200px;
  cursor: pointer;
  will-change: transform, opacity;
`
