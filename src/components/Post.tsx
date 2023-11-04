import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { v4 as uuidv4 } from 'uuid';

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

export interface PostType {
  id: string
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: Array<{
    type: string
    content: string
  }>
  publishedAt: Date
}

interface IPost {
  post: PostType
}

interface IComment {
  id: string
  content: string
}

export function Post({ post }: IPost) {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState<IComment[]>([
    {
      id: uuidv4(),
      content: "Muito bom Lucas! Parabéns! 😎"
    }
  ]);

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    setComments([...comments, { id: uuidv4(), content: newCommentText }])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  function deleteComment(commentIdToDelete: string) {
    console.log(`Deletar comentario ${commentIdToDelete}`)

    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment.id !== commentIdToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  function handleInvalidNewComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório! 😅')
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleInvalidNewComment}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              content={comment.content}
              onDeleteComment={deleteComment}
            />
          )
        }
        )}
      </div>
    </article>
  )
}
