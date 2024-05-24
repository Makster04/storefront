const createCategory = (name, display, desc) => ({
  name,
  display,
  description: desc,
});

const initialState = {
  categories: [
    createCategory("Adidas", "Adidas", "Better for Offense?"),
    createCategory("Nike", "Nike", "Better for Defense?"),
  ],
  activeCategory: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        categories: state.categories,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};