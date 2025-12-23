type FiltersProps = {
  onSelectCategory: (category: string) => void
}

const categories = ["all", "Economy", "Crypto", "Health", "Lifestyle"]

const Filters = ({ onSelectCategory }: FiltersProps) => {
  return (
    <div className="filters">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default Filters
