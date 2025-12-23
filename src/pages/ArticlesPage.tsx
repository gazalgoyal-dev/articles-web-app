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
    const search = searchText.toLowerCase()

    const matchesSearch =
      article.title.toLowerCase().includes(search) ||
      article.category.toLowerCase().includes(search) ||
      article.source.toLowerCase().includes(search)

    const matchesCategory =
      category === "all" ||
      article.category.toLowerCase() === category.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container">
      <h1>Most read</h1>
      <h2>Our reader&apos;s highlights</h2>

      <SearchBar
        onSearch={(value) => {
          setSearchText(value)
          setCategory("all") // reset filter when searching
        }}
      />

      <Filters onSelectCategory={setCategory} />

      <div className="grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  )
}

export default ArticlesPage
