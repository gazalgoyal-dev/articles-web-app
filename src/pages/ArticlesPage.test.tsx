import { render, screen, waitFor } from "@testing-library/react"
import { vi } from "vitest"
import ArticlesPage from "./ArticlesPage"
import * as articleService from "../services/articleService"

const mockArticles = [
  {
    id: 1,
    category: "Economy",
    source: "Politico",
    title: "Europe Economy",
    image: "",
    readTime: "5 min read",
    url: "https://example.com"
  }
]

test("renders articles from API", async () => {
  vi.spyOn(articleService, "fetchArticles").mockResolvedValue(mockArticles as any)

  render(<ArticlesPage />)

  await waitFor(() => {
    expect(screen.getByText("Europe Economy")).toBeInTheDocument()
  })
})
