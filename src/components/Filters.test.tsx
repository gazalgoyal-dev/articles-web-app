import { render, screen, fireEvent } from "@testing-library/react"
import Filters from "./Filters"

test("renders category buttons", () => {
  render(<Filters onSelectCategory={vi.fn()} />)

  expect(screen.getByText("Economy")).toBeInTheDocument()
  expect(screen.getByText("Health")).toBeInTheDocument()
})

test("calls onSelectCategory when clicked", () => {
  const mockFn = vi.fn()
  render(<Filters onSelectCategory={mockFn} />)

  fireEvent.click(screen.getByText("Economy"))
  expect(mockFn).toHaveBeenCalledWith("Economy")
})
