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
    <>
      <header className="hero">
        <div className="hero-inner">
          <h1>Most read</h1>
          <h2>Our reader&apos;s highlights</h2>

          <SearchBar
            onSearch={(value) => {
              setSearchText(value)
              setCategory("all")
            }}
          />

          <Filters
            selectedCategory={category}
            onSelectCategory={setCategory}
          />
        </div>
      </header>

      <main className="content">
        <div className="container">
          <div className="grid">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p className="empty-state">
                No articles match your search or selected category.
              </p>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        © 2025 Articles Web App · Built with React, Vite & TypeScript
      </footer>
    </>
  )
}

export default ArticlesPage
