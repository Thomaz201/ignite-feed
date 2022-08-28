import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './styles/App.module.css'
import './styles/global.css'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </main>
      </div>
    </>
  )
}
