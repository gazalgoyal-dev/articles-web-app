import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchArticleById } from "../services/articleService"

const ArticleDetailPage = () => {
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchArticleById(Number(id)).then((article) => {
        if (article?.url) {
          window.location.replace(article.url)
        }
      })
    }
  }, [id])

  return <p>Redirecting to article…</p>
}

export default ArticleDetailPage
