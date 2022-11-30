import { Global, css } from '@emotion/react'

/*
  Center the content horizontally and vertically:
*/
const layout = css`
  html {
    min-width: 320px;
    height: 100%;
  }

  html > body {
    height: 100%;
  }

  main {
    min-height: 100%;

    display: flex;
    flex-direction: column;

    /* Centers items along the same axis across peers on that axis */
    align-items: center;
    /* Always ensure some white-space is present at the end of the page */
    padding-bottom: 48px;
  }
`

/* Additional styles */
const base = css`
  body {
    font-family: 'Noto Sans';
    background-color: hsl(220deg 25% 10%);
    margin: 0 min(5vw, 120px);
  }

  h1 {
    color: white;
    font-family: 'Caveat';
    /* range: 40px to 80px */
    font-size: clamp(2.5rem, 12vw, 5rem);
    font-weight: 700;
    text-align: center;
    margin: 48px 0;
  }
`

/***
  The new CSS reset - version 1.7.3 (last updated 7.8.2022)
  GitHub page: https://github.com/elad2412/the-new-css-reset
***/
const reset = css`
  /*
      Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
      - The "symbol *" part is to solve Firefox SVG sprite bug
  */
  *:where(:not(textarea, html, iframe, canvas, img, svg, video, audio):not(svg
        *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }
`

export default function GlobalStyles() {
  return <Global styles={[reset, layout, base]} />
}
