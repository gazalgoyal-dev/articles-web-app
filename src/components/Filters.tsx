import { useState } from "react"

type Props = {
  onSelectCategory: (category: string) => void
}

const categories = ["All", "Economy", "Crypto", "Health", "Lifestyle"]

const Filters = ({ onSelectCategory }: Props) => {
  const [active, setActive] = useState("All")

  const handleClick = (category: string) => {
    setActive(category)
    onSelectCategory(category.toLowerCase()) 
  }

  return (
    <div className="filters">
      {categories.map((category) => (
        <button
          key={category}
          className={active === category ? "active" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Filters
