import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post
            author='Gustavo Leite'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi, deleniti rerum voluptate eligendi pariatur? Molestiae'
          />

          <Post
            author='Gustavo Leite'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi, deleniti rerum voluptate eligendi pariatur? Molestiae'
          />
        </main>
      </div>
    </div>
  )
}
