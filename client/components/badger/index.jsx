import Image from './image'
import Votes from './votes'
import styles from './styles'
import { Link } from 'react-router-dom'

// Home view
export function List({ badgers }) {
  return (
    <ul css={styles.badgerList}>
      {badgers.map((hb_props, index) => {
        const { id } = hb_props
        return <ListItem {...hb_props} key={id} first={index === 0} />
      })}
    </ul>
  )
}

const ListItem = (props) => {
  const { id, name, image, votes, first } = props

  return (
    <li css={styles.badgerItem}>
      <Link to={'/the-cutest/' + id}>
        <Image name={name} image={image} isWinning={first}>
          <div css={styles.hoverText}>
            <Name text={name} />
            <p>-- Click to view their page --</p>
          </div>
        </Image>
      </Link>
      <Votes votes={votes} id={id} />
    </li>
  )
}

// Details view
export function Item(props) {
  const { id, name, image, votes } = props.data

  return (
    <div>
      <Name text={name} />
      <div css={styles.badgerItem}>
        <Image name={name} image={image} />
        <Votes votes={votes} id={id} />
      </div>
    </div>
  )
}

const Name = (props) => <h2 css={styles.badgerName}>{props.text}</h2>

export default {
  Item,
  List,
}
