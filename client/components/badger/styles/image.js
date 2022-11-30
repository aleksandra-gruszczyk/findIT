import { css } from '@emotion/react'

export const wrapper = css`
  /*
    border-radius will only work for this wrapping element if paired
    with 'overflow: hidden'.
  */
  border-radius: clamp(10px, 2.5vw, 16px);

  /* Clip any child content that exceeds this elements boundaries */
  position: relative;
  overflow: hidden;

  /*
    Line-height for some display types adds unnecessary white-space,
    this affects our border-radius with the 'overflow: hidden' unless
    we set it to 0. Text content however will need to restore 'lineheight'.
  */
  line-height: 0;

  /* Restore line-height workaround */
  h2,
  p {
    line-height: initial;
  }
`

export const img = css`
  width: 600px;
  max-height: 350px;
  object-fit: cover;
  aspect-ratio: 3/2;
`

// ${badgerItem}:first-of-type & {
export const medal = css`
  width: clamp(70px, 20vw, 140px);
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));

  /*
    Hang the medal off the top right corner of the parent element
    and clip a bit off the top (via 'overflow: hidden' on parent .image-wrapper),
    as original image has the ribbons starting at angles, not flat.
  */
  position: absolute;
  top: -2px;
  right: 4px;
`
