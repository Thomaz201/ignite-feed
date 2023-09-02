import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/thomaz201.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Thomaz</strong>
            <span>Solutions Architect</span>
          </div>
        </div>

        <time title="2 de setembro as 08:13" dateTime="2023-09-02 08:13:30">Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, nisl sed mattis sollicitudin,</p>
        <p>arcu turpis maximus diam, ut elementum elit magna fermentum nulla. Praesent diam ante, tempus vitae congue/ sit amet, eleifend id augue. Proin tempus non turpis sit amet gravida. Praesent facilisis ligula turpis, id pellentesque eros cursus sit amet. Donec tempus neque quis erat iaculis tincidunt. Proin euismod luctus felis, tincidunt finibus lorem tincidunt sit amet. Cras feugiat malesuada quam sed eleifend.</p>
        <p>Cras dignissim a ante at molestie. Vestibulum ante ipsum primis in faucibus</p>
        <p><a href="">Thomazdesign/dogsandcats</a>{' '}🐶</p>
        <p><a href="">#aqui #agora #estudo</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}