import { ReactComponent as NopeSVG } from '@assets/undraw/leftArrowCross.svg'
// import { ReactComponent as ArrowSVG } from '@assets/undraw/rightarrow.svg'
import { ReactComponent as KeenSVG } from '@assets/undraw/rightArrowHeart.svg'
import { css } from '@emotion/react'
import { useMantineTheme } from '@mantine/core'

export function Arrow({ direction, width }) {
  const theme = useMantineTheme()
  const directionStyle = direction === 'left' ? styles.left : styles.right
  const Arrow = direction === 'left' ? NopeSVG : KeenSVG

  return (
    <div
      css={[styles.arrow, directionStyle]}
      style={{
        width,
        color: theme.colors[theme.primaryColor][7],
      }}
    >
      <Arrow
        style={{
          width: '100%',
        }}
      />
    </div>
  )
}

const styles = {
  arrow: css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  `,

  left: css`
    > svg {
      /* transform: translate(-340px, 70px) scale(-100%, -100%); */
      transform: translate(-340px, 30px);
    }
  `,

  right: css`
    > svg {
      /* transform: translate(340px, -70px) scale(100%, 100%); */
      transform: translate(340px, -30px);
    }
  `,
}
