// store/categories.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setCategories, setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

