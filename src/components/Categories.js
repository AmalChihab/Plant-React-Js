import React, { useState } from 'react';
import "../Style/Categories.css";

const Categories = ({ plantList, onCategoryChange }) => {
  const uniqueCategories = [...new Set(plantList.map((item) => item.category))];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = () => {
    onCategoryChange(selectedCategory);

  };

  return (
    <div className="categories-container">
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Select a category</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Recherche</button>
    </div>
  );
};

export default Categories;
