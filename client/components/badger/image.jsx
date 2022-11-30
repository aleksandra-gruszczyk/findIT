import React from 'react'
import medal from '@assets/gold-medal.png'
import styles from './styles'

export default function BadgerImage(props) {
  return (
    <div css={styles.wrapper}>
      {props.children}
      {props.isWinning && <Medal />}
      <img src={props.image} alt={props.name} css={styles.img} />
    </div>
  )
}

const Medal = () => (
  <img
    css={styles.medal}
    // src="/images/gold-medal.png"
    src={medal}
    alt="1st place medal"
  />
)
