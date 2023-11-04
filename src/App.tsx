import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'
import styles from './styles/App.module.css'
import { v4 as uuidv4 } from 'uuid';

import './styles/global.css'

const posts: PostType[] = [
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://github.com/thomaz201.png",
      name: "Lucas Thomaz",
      role: "Tech Lead @Zup"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, nisl sed mattis sollicitudin," },
      { type: "paragraph", content: "arcu turpis maximus diam, ut elementum elit magna fermentum nulla. Praesent diam ante, tempus vitae congue/ sit amet, eleifend id augue. Proin tempus non turpis sit amet gravida. Praesent facilisis ligula turpis, id pellentesque eros cursus sit amet. Donec tempus neque quis erat iaculis tincidunt. Proin euismod luctus felis, tincidunt finibus lorem tincidunt sit amet. Cras feugiat malesuada quam sed eleifend." },
      { type: "paragraph", content: "Cras dignissim a ante at molestie. Vestibulum ante ipsum primis in faucibus" },
      { type: "link", content: "Thomazdesign/dogsandcats🐶" },
      { type: "link", content: "#aqui #agora #estudo" },

    ],
    publishedAt: new Date('2023-11-04 09:00:00')
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://github.com/sigaocaue.png",
      name: "Caue Prado",
      role: "Especialista @Zup"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, nisl sed mattis sollicitudin," },
      { type: "paragraph", content: "arcu turpis maximus diam, ut elementum elit magna fermentum nulla. Praesent diam ante, tempus vitae congue/ sit amet, eleifend id augue. Proin tempus non turpis sit amet gravida. Praesent facilisis ligula turpis, id pellentesque eros cursus sit amet. Donec tempus neque quis erat iaculis tincidunt. Proin euismod luctus felis, tincidunt finibus lorem tincidunt sit amet. Cras feugiat malesuada quam sed eleifend." },
      { type: "paragraph", content: "Cras dignissim a ante at molestie. Vestibulum ante ipsum primis in faucibus" },
      { type: "link", content: "Thomazdesign/dogsandcats🐶" },
      { type: "link", content: "#aqui #agora #estudo" },

    ],
    publishedAt: new Date('2023-11-04 08:00:00')
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://github.com/JeycianeFaria.png",
      name: "Jeyciane Faria",
      role: "Especialista @Zup"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, nisl sed mattis sollicitudin," },
      { type: "paragraph", content: "arcu turpis maximus diam, ut elementum elit magna fermentum nulla. Praesent diam ante, tempus vitae congue/ sit amet, eleifend id augue. Proin tempus non turpis sit amet gravida. Praesent facilisis ligula turpis, id pellentesque eros cursus sit amet. Donec tempus neque quis erat iaculis tincidunt. Proin euismod luctus felis, tincidunt finibus lorem tincidunt sit amet. Cras feugiat malesuada quam sed eleifend." },
      { type: "paragraph", content: "Cras dignissim a ante at molestie. Vestibulum ante ipsum primis in faucibus" },
      { type: "link", content: "Thomazdesign/dogsandcats🐶" },
      { type: "link", content: "#aqui #agora #estudo" },

    ],
    publishedAt: new Date('2023-11-03 20:00:00')
  },
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </>
  )
}
