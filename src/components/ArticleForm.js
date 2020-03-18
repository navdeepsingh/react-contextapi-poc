import React, { useContext, useState } from "react"
import { ArticlesContext } from "../context"

const ArticleForm = () => {
  const { saveArticle } = useContext(ArticlesContext)

  const title = React.createRef();
  const description = React.createRef();
  const article = { title, description }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveArticle(article)
  }

  return (
    <section id="articles-list">
      <form>
        <div>
          <label for="title">Title: </label>
          <input ref={title} type="text" name="title" id="title" />
        </div>
        <div>
          <label for="description">Description: </label>
          <textarea ref={description} name="description" id="description"></textarea>
        </div>
        <div>
          <button onClick={handleSubmit()}>ADD</button>
        </div>
      </form>
    </section>
  )
}

export default ArticleForm