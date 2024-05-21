// Components/Categories.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../store/categories';

function Categories() {
  const categories = useSelector((state) => state.categories.categories); // Access categories array
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;


