import { css } from '@emotion/react'
import styled from '@emotion/styled'

import glasses from '@assets/emoji-glasses.png'
import confounded from '@assets/emoji-confounded.png'

const emoji = {
  glasses,
  confounded,
}

/* This ended up looking like facebook chat messages, but whatever, good enough! */
// export const container = css`
export const Container = styled.div`
  width: 100%;
  background-color: #202932;
  border-radius: 12px;

  padding: 16px;
`

export const layoutGrid = css`
  --side-column-width: 48px;
  --comment-gap: 8px;

  display: grid;
  gap: var(--comment-gap);
  row-gap: 16px;

  /*
    three column layout,
    - two static side-columns for our students,
    - the remaining space fills the middle column (1fr) aka chat bubble
  */
  grid-template-columns: var(--side-column-width) 1fr var(--side-column-width);

  /*
    dense flow lets grid items hijack earlier empty space (in a row or column) if they can fit. 
    This way the chat bubble can effectively "swap" places with a span (emoji) element
    that made a new row and skipped two columns for our chat bubble to jump into.
  */
  grid-auto-flow: dense;

  /* .conversation > .chat-bubble, .conversation > p { ... }*/
  /* Support the fallback 'no comments' p element too */
  > p {
    grid-column: span 2;
  }
`

// export const empty = css`
export const Empty = styled.p`
  color: hsl(184deg 22% 60%);

  font-family: 'Roboto Serif', serif;
  font-size: 1rem;
  font-weight: 300;
`

/* These will be our chat bubbles that span two columns wide in the grid */
// export const bubble = css`
export const Bubble = styled.p`
  --gutter-width: calc(var(--side-column-width) + var(--comment-gap));

  width: fit-content;
  color: rgb(240, 240, 240);
  font-family: 'Noto Sans', sans-serif;

  background-color: rgb(27, 107, 210);
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 12px;

  :last-child {
    margin-bottom: 4px;
  }

  /*
    ':nth-of-type()' will adjust styles, alternating for left to right sides.
    The margin will keep our chat bubble in the center column, while leaving
    the other side-column empty.
  */
  :nth-of-type(even) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 20px;
    justify-self: end;
  }

  :nth-of-type(odd) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 20px;
  }

  /* At a smaller viewport, fill that empty side-column too */
  @media (min-width: 500px) {
    :nth-of-type(even) {
      margin-left: var(--gutter-width);
    }

    :nth-of-type(odd) {
      margin-right: var(--gutter-width);
    }
  }
`

/* emoji columns */
// export const emoji = css`
export const Emoji = styled.span`
  grid-column: 1;
  width: var(--side-column-width);
  aspect-ratio: 1;

  background-image: url(${emoji.glasses});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center top;

  /*
    Alternate the emoji,
    Even rows (right-side column) will use a different emoji
  */
  :nth-of-type(even) {
    grid-column: 3;
    background-image: url(${emoji.confounded});
  }
`
