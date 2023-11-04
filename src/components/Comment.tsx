import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface IComment {
  id: string
  content: string
  onDeleteComment: (id: string) => void
}

export function Comment({ id, content, onDeleteComment }: IComment) {
  const [likeCount, setLikeCount] = useState(0)

  function handelDeleteComment() {
    onDeleteComment(id)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/thomaz201.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Thomaz</strong>
              <time title="2 de setembro as 08:13" dateTime="2023-09-02 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handelDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}