import { useState } from "react"
import ArticleCard from "../components/ArticleCard"
import SearchBar from "../components/SearchBar"
import Filters from "../components/Filters"
import type { Article } from "../models/Article"

const mockArticles: Article[] = [
  {
    id: 1,
    category: "Economy",
    source: "Politico",
    title: "The surprising reason Europe came together against Putin",
    image: "/images/politics.png",
    readTime: "12 min read",
    content: "Europe's response to Putin was driven by economic unity, shared security concerns, and political pressure..."
  },
  {
    id: 2,
    category: "Crypto",
    source: "Platformer",
    title: "Instagram's co-founders are mounting a comeback",
    image: "/images/tech.png",
    readTime: "7 min read",
    content: "Kevin Systrom and Mike Krieger are working on a new social media platform that focuses on user privacy..."
  },
  {
    id: 3,
    category: "Health",
    source: "Healthline",
    title: "10 habits that improve mental health",
    image: "/images/health.png",
    readTime: "5 min read",
    content: "Incorporating these habits into your daily routine can significantly boost your mental well-being..."
  },
  {
    id: 4,
    category: "Lifestyle",
    source: "Lifestyle Weekly",
    title: "Minimalist living: why less is more",
    image: "/images/lifestyle.png",
    readTime: "6 min read",
    content: "Embracing minimalist living can lead to greater happiness and reduced stress by focusing on what truly matters..."
  }
]

const ArticlesPage = () => {
  const [searchText, setSearchText] = useState("")
  const [category, setCategory] = useState("all")

  const filteredArticles = mockArticles.filter((article) => {
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
