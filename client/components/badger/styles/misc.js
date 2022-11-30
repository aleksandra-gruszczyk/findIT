import { css } from '@emotion/react'

/* Badger image and votes in a row layout */
export const badgerItem = css`
  display: flex;
`

/* Hover text on home view, otherwise detail view heading */
export const badgerName = css`
  color: white;
  font-family: 'Caveat';
  font-size: 2.5rem;
  font-weight: 700;

  align-self: start;
  margin: 12px 0;
`

export const badgerList = css`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 32px;
`