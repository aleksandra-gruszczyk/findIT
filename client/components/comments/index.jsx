import Comments from './entries'
import CommentsForm from './form'
import styles from './styles'

export default function CommentsSection({ id, comments }) {
  return (
    <div css={styles.section}>
      <h3>Comments</h3>
      <Comments comments={comments} />
      <CommentsForm id={id} css={styles.form} />
    </div>
  )
}
