import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';

const Categories = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div>
      <h3>Categories</h3>
      <List>
        {categories.map(category => (
          <ListItem 
            key={category.id} 
            button 
            onClick={() => handleCategoryClick(category)}
            selected={category === categories.activeCategory}
          >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Categories;
