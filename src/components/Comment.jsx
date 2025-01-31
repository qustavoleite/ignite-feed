import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/qustavoleite.png'/>

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Gustavo Leite</strong>
                <time title='11 de Maio às 8:21' dateTime='2025-01-30 08:21:54'>
                  Cerca de 1h atrás
                </time>
              </div>

              <button title='Deletar comentários'>
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    )
}