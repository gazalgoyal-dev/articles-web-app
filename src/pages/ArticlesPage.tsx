import { useEffect, useState } from "react"
import ArticleCard from "../components/ArticleCard"
import SearchBar from "../components/SearchBar"
import Filters from "../components/Filters"
import type { Article } from "../models/Article"
import { fetchArticles } from "../services/articleService"

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [searchText, setSearchText] = useState("")
  const [category, setCategory] = useState("all")

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch(console.error)
  }, [])

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchText.toLowerCase())

    const matchesCategory =
      category === "all" ||
      article.category.toLowerCase() === category.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <h1>Most read</h1>
      <h2>Our reader's highlights</h2>

      <SearchBar onSearch={setSearchText} />
      <Filters onSelectCategory={setCategory} />

      <div className="grid">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticlesPage
