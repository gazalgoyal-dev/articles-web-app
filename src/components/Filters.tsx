type Props = {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categories = [
  { label: "All", value: "all" },
  { label: "Economy", value: "Economy" },
  { label: "Crypto", value: "Crypto" },
  { label: "Health", value: "Health" },
  { label: "Lifestyle", value: "Lifestyle" },
]

const Filters = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <div className="filters">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          className={selectedCategory === value ? "active" : ""}
          onClick={() => onSelectCategory(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default Filters
