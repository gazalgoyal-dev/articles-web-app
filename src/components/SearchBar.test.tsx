import { render, screen, fireEvent } from "@testing-library/react"
import SearchBar from "./SearchBar"

test("calls onSearch when typing", () => {
  const onSearchMock = vi.fn()

  render(<SearchBar onSearch={onSearchMock} />)

  const input = screen.getByPlaceholderText(/search/i)
  fireEvent.change(input, { target: { value: "Economy" } })

  expect(onSearchMock).toHaveBeenCalledWith("Economy")
})
