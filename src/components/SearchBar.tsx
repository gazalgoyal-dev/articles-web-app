type SearchBarProps = {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search by title, category, or source..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        padding: "8px",
        width: "100%",
        marginBottom: "16px",
        fontSize: "14px",
      }}
    />
  )
}

export default SearchBar
