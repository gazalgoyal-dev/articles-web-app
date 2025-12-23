import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import ArticleCard from "./ArticleCard"
import type { Article } from "../models/Article"

const mockArticle: Article = {
  id: 1,
  category: "Economy",
  source: "Politico",
  title: "Europe Economy",
  image: "",
  readTime: "5 min read",
  url: "https://example.com"
}

describe("ArticleCard", () => {
  test("renders article title, source and read time", () => {
    render(<ArticleCard article={mockArticle} />)

    expect(screen.getByText("Europe Economy")).toBeInTheDocument()
    expect(screen.getByText("Politico")).toBeInTheDocument()
    expect(screen.getByText("5 min read")).toBeInTheDocument()
  })

  test("renders article link with target blank", () => {
    render(<ArticleCard article={mockArticle} />)

    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", mockArticle.url)
    expect(link).toHaveAttribute("target", "_blank")
  })
})
