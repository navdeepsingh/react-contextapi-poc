import React, { useContext } from "react"
import { ArticlesContext } from "../context"

const ArticleForm = () => {
  const { dispatch } = useContext(ArticlesContext)

  const title = React.createRef();
  const description = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    const article = { type: "ADD_ARTICLE", 'title': title.current.value, 'description': description.current.value }
    dispatch(article)
  }

  return (
    <section id="articles-list">
      <form onSubmit={handleSubmit}>
        <div className="label-field">
          <label htmlFor="title">Title: </label>
          <input ref={title} type="text" name="title" id="title" required />
        </div>
        <div className="label-field">
          <label htmlFor="description">Description: </label>
          <textarea ref={description} name="description" id="description" required></textarea>
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
    </section>
  )
}

export default ArticleForm