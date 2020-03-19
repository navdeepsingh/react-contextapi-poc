import React, { useContext } from "react"
import { ArticlesContext } from '../context'

const ArticleList = () => {
  const { articles } = useContext(ArticlesContext)
  return (
    <section>
      <ul id="articles-list">
        {
          articles.map(article => {
            return <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </li>
          })
        }
      </ul>
    </section>
  )
}

export default ArticleList