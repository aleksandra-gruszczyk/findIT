import { css } from '@emotion/react'

export const form = css`
  color: white;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  margin-top: 12px;

  textarea {
    width: 100%;

    color: hsl(184deg 22% 60%);
    background-color: #202932;

    font-size: 1rem;
    font-family: 'Roboto Serif', serif;
    font-weight: 300;

    border: none;
    border-radius: 4px;
    padding: 8px;

    resize: vertical;
  }

  input[type='submit'] {
    align-self: end;

    color: hsl(148deg 46% 35%);
    background-color: hsl(148deg 76% 75%);

    border-radius: 4px;
    padding: 8px;
  }
`
