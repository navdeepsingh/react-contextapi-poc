// Create the Context
import React, { createContext, useReducer } from "react"
import reducer from "../reducer"
export const ArticlesContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { id: 1, title: 'Article 1', description: 'Description goes here 1' },
    { id: 2, title: 'Article 2', description: 'Description goes here 2' }
  ])

  return (
    <ArticlesContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticleProvider;