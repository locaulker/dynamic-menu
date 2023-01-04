import React from "react"

const Categories = ({ categories, filteredItems }) => {
  return (
    <div className="btn-container">
      {/* Manual menu buttons setup: ----------- */}
      {/* <button className="filter-btn" onClick={() => filteredItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filteredItems("breakfast")}>
        Breakfast
      </button> */}

      {/* Dynamic menu button setup: ---------- */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filteredItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
