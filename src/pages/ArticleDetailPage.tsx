import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type { Article } from "../models/Article"
import { fetchArticleById } from "../services/articleService"

const ArticleDetailPage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    if (id) {
      fetchArticleById(Number(id)).then(setArticle)
    }
  }, [id])

  if (!article) return <p>Loading...</p>

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p className="source">{article.source}</p>
      <span>{article.readTime}</span>

      {article.content.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
    </div>
  )
}

export default ArticleDetailPage
