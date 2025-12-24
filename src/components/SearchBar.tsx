import { useState } from "react"

type SearchBarProps = {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setValue(text)
    onSearch(text)
  }

  const clearSearch = () => {
    setValue("")
    onSearch("")
  }

  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        className="search-input with-icons"
        placeholder="Search by title, category, or source..."
        value={value}
        onChange={handleChange}
      />

      {value && (
        <button
          type="button"
          className="clear-icon"
          onClick={clearSearch}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
