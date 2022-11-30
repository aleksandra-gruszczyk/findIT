// import styles from './styles'

// Could style form here via `css` prop,
// or use the css prop on parent component that uses it,
// and that will set the `className` prop here:
function CommentsForm({ className, id }) {
  return (
    <form
      // css={styles.form}
      className={className}
      action={`/api/v1/badgers/${id}/comments`}
      method="post"
    >
      <label htmlFor="comment">Add a comment:</label>
      <textarea id="comment" name="comment"></textarea>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CommentsForm
