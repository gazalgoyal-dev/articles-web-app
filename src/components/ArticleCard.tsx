import type { Article } from "../models/Article"
import placeholder from "../assets/placeholder.jpg"

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <article className="card horizontal">
        <div className="card-image-wrapper">
          <img
            src={article.image?.trim() ? article.image : placeholder}
            alt={article.title}
            onError={(e) => {
              e.currentTarget.src = placeholder
            }}
          />
        </div>

        <div className="card-content">
          <p className="source">{article.source}</p>
          <h3 className="title">{article.title}</h3>
          <span className="read-time">{article.readTime}</span>
        </div>
      </article>
    </a>
  )
}

export default ArticleCard
