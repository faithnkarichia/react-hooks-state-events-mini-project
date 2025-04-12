import React from "react";

function CategoryFilter({ categories, selected, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories && categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "selected" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter