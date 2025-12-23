import type { Article } from "../models/Article"

const API_URL = "http://localhost:4000/articles"

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch articles")
  }

  return response.json()
}

export const fetchArticleById = async (id: number): Promise<Article> => {
  const response = await fetch(`${API_URL}/${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch article")
  }

  return response.json()
}
