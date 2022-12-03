import { css } from '@emotion/react'
import { animated, to as interpolate, useSprings } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useState } from 'react'

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -5 + Math.random() * 10,
  delay: i * 100,
})

const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function CardStack({ children, onSwipeRight }) {
  const [gone] = useState(() => new Set())

  const [springs, api] = useSprings(
    children.length,
    (i) => ({
      ...to(i),
      from: from(i),
    }),
    []
  )

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      direction: [xDir],
      velocity: [velocityX],
    }) => {
      const trigger = velocityX > 0.2 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

      api.start((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring

        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocityX : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit

        if (isGone && dir === 1) {
          addToFavourites(children[i])
        }

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })

      // reset card stack, animate back to "to()" positions
      if (!down && gone.size === children.length)
        setTimeout(() => {
          gone.clear()
          api.start((i) => to(i))
        }, 600)
    }
  )

  return (
    <div css={deckContainerStyles}>
      {springs.map(({ x, y, rot, scale }, i) => (
        // Falling into stack animation:
        <animated.div
          css={deckStyles}
          key={i}
          style={{ x, y, transform: interpolate([rot, scale], trans) }}
          {...bind(i)}
        >
          {children[i]}
        </animated.div>
      ))}
    </div>
  )
}

const deckContainerStyles = css`
  background: lightblue;

  // Center child elements
  display: flex;
  align-items: center;
  justify-content: center;

  // Stretch this elements bounds to the containing blocks bounds:
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // Cards are flung out of the elements bounds,
  // clip those bounds, otherwise adds a scrollbar from the extended width
  overflow: hidden;
`

const deckStyles = css`
  /* width: 300px; */
  /* height: 200px; */

  position: absolute;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  will-change: transform;
  // Important for element with drag gesture
  // for correct behaviour on touch devices
  touch-action: none;

  > div {
    border-radius: 10px;
    box-shadow: 0 12px 12px rgb(0 0 0 / 12%);
    will-change: transform;
    /* touch-action: none; */
    user-select: none;
  }
`
