import { css, Global } from '@emotion/react'

const layout = css`
  html {
    min-width: 320px;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  main {
    min-height: 100%;

    display: flex;
    flex-direction: column;
  }
`

export default function GlobalStyles() {
  return <Global styles={[layout]} />
}
