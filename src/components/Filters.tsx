type Props = {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categories = ["all", "Economy", "Crypto", "Health", "Lifestyle"]

const Filters = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <div className="filters">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Filters
