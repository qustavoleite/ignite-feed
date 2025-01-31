import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/qustavoleite.png'
          />
          <div className={styles.authorInfo}>
            <strong>Gustavo Leite</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 8:21' dateTime='2025-01-30 08:21:54'>
          Publicado à 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            <a href=''> jane.design/doctorcare</a>
          </p>

          <p>
            <a href=''>#novoprojeto</a> <a href=''>#nlw</a>{' '}
            <a href=''>#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
