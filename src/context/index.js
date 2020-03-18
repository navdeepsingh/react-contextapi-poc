// Create the Context
import React, { createContext, useState } from "react"
export const ArticlesContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Article 1', description: 'Description goes here 1' },
    { id: 2, title: 'Article 2', description: 'Description goes here 2' }
  ])

  const saveArticle = ({ title, description }) => {
    const newArticle = {
      id: Math.random(),
      title: title,
      description: description
    }
    setArticles([...articles, newArticle]);
  }

  return (
    <ArticlesContext.Provider value={{ articles, saveArticle }}>
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticleProvider;