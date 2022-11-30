import { Chat } from './styles'

export default function Comments({ comments }) {
  const hasComments = comments?.length > 0
  const CommentsList = () => (
    <>
      {comments.map(({ id, comment }) => (
        <Comment key={id} text={comment} />
      ))}
    </>
  )

  return (
    <Chat.Container css={Chat.layoutGrid}>
      {hasComments ? (
        <CommentsList />
      ) : (
        <Chat.Empty>No comments yet!</Chat.Empty>
      )}
    </Chat.Container>
  )
}

const Comment = ({ text }) => (
  <>
    <Chat.Emoji />
    <Chat.Bubble>{text}</Chat.Bubble>
  </>
)

//
// Earlier variant with `commentsList`:
// - Array of components instead of using as a component in JSX
// - Comment treated as children input instead of using a prop
//

/*
function Comments({ comments }) {
  const hasComments = comments?.length > 0
  const commentsList = comments.map((comment, index) => (
    <Comment key={index}>{comment}</Comment>
  ))

  return (
    <Chat.Container css={Chat.layoutGrid}>
      {hasComments ? (
        commentsList
      ) : (
        <Chat.Empty>No comments yet!</Chat.Empty>
      )}
    </Chat.Container>
  )
}

const Comment = ({ children }) => (
  <>
    <Chat.Emoji />
    <Chat.Bubble>{children}</Chat.Bubble>
  </>
)
*/

//
// Emotion css prop instead of styled()
// Slight benefit of reducing devtools noise more easily?
// styled() adds `ForwardRef` components to the tree,
// and the grouping prefix used (Chat.) is not present,
// thus you couldn't use a prefix like `Styled.` and filter on that?
//

// import { chat as styles } from './styles'

/*
function Comments({ comments }) {
  const hasComments = comments?.length > 0
  const CommentsList = () => (
    <>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </>
  )

  return (
    <div css={[styles.container, styles.layoutGrid]}>
      {hasComments ? (
        <CommentsList />
      ) : (
        <p css={styles.empty}>No comments yet!</p>
      )}
    </div>
  )
}

const Comment = ({ text }) => (
  <>
    <span css={styles.emoji}></span>
    <p css={styles.bubble}>{text}</p>
  </>
)
*/
