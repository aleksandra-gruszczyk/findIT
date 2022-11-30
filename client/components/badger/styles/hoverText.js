import { css } from '@emotion/react'

export const hoverText = css`
  visibility: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: rgb(0 0 0 / 75%);
  padding: 24px;
  /* Looks a bit more centered vertically? */
  margin-top: -24px;

  > h2 {
    align-self: center;
    margin: 0;
    margin-bottom: 16px;
  }

  > p {
    color: white;
    font-family: 'Roboto Serif', serif;
    font-size: clamp(0.5rem, 4vw, 1rem);
    font-weight: 700;
  }

  a:hover & {
    visibility: visible;
  }
`