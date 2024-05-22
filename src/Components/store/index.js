const createCategory = (name, display, desc) => ({
  name,
  display,
  description: desc,
});

const initialState = {
  categories: [
    createCategory("Adidas", "Adidas", "Lets be Kareem Abdul-Jabbar"),
    createCategory("Nike", "Nike", "Lets be Michael Jordan"),
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
}

export const updateCategory = (category) => {
  return {
    type: "UPDATE",
    payload: category
  }
}

