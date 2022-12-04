import { css } from '@emotion/react'
import { animated, useSpring } from '@react-spring/web'
import { forwardRef, useImperativeHandle, useState } from 'react'

export const Flippable = forwardRef(_Flippable)

function _Flippable({ front: Front, back: Back }, ref) {
  const [flipped, setFlipped] = useState(false)
  const { transform } = useSpring(flipConfig(flipped))

  const toggleFlip = () => setFlipped((state) => !state)
  useImperativeHandle(ref, () => ({ toggleFlip }))

  return (
    <div css={cardContainer}>
      <animated.div css={cardStyles} style={{ transform }}>
        {Front}
      </animated.div>

      <animated.div
        css={cardStyles}
        // rotateY: https://react-spring.dev/basics#shorthand-style-props
        style={{
          transform,
          // adds additional offset to the transform rotateY value
          rotateY: '180deg',
        }}
      >
        {Back}
      </animated.div>
    </div>
  )
}

function flipConfig(flipped) {
  return {
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  }
}

const cardContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Should be same as Card.Front + Card.Back */
  width: 350px;
  height: 450px;
`

const cardStyles = css`
  /* Overlap front and back panes */
  position: absolute;

  will-change: transform;
  /* When flipped, the back of a pane should not be visible */
  backface-visibility: hidden;
`
