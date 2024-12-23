import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>

      <Post
        author='Gustavo Leite'
        content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi, deleniti rerum voluptate eligendi pariatur? Molestiae'
      />

      <Post
        author='Luis Henrique'
        content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi, deleniti rerum voluptate eligendi pariatur? Molestiae'
      />
    </div>
  )}
