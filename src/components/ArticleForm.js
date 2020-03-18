import React, { useContext } from "react"
import { ArticlesContext } from "../context"

const ArticleForm = () => {
  const { saveArticle } = useContext(ArticlesContext)

  const title = React.createRef();
  const description = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    const article = { 'title': title.current.value, 'description': description.current.value }
    saveArticle(article)
  }

  return (
    <section id="articles-list">
      <form>
        <div>
          <label htmlFor="title">Title: </label>
          <input ref={title} type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea ref={description} name="description" id="description"></textarea>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>ADD</button>
        </div>
      </form>
    </section>
  )
}

export default ArticleForm