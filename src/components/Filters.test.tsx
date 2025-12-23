import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Filters from "./Filters"

describe("Filters", () => {
  it("renders category buttons", () => {
    render(
      <Filters
        selectedCategory="all"
        onSelectCategory={vi.fn()}
      />
    )

    expect(screen.getByText("All")).toBeInTheDocument()
    expect(screen.getByText("Economy")).toBeInTheDocument()
    expect(screen.getByText("Crypto")).toBeInTheDocument()
    expect(screen.getByText("Health")).toBeInTheDocument()
    expect(screen.getByText("Lifestyle")).toBeInTheDocument()
  })

  it("calls onSelectCategory when a category is clicked", () => {
    const mockFn = vi.fn()

    render(
      <Filters
        selectedCategory="all"
        onSelectCategory={mockFn}
      />
    )

    fireEvent.click(screen.getByText("Economy"))

    expect(mockFn).toHaveBeenCalledWith("Economy")
  })
})
