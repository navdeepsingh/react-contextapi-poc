import React, { useContext } from "react"
import { ArticlesContext } from '../context'

const ArticleList = () => {
  const { articles } = useContext(ArticlesContext)
  return (
    <section id="articles-list">
      {
        articles.map(article => {
          return <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        })
      }
    </section>
  )
}

export default ArticleList