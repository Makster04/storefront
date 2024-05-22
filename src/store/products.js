export const createProduct = (
  category,
  name,
  desc,
  image,
  price,
  countInStock,
) => ({
  category,
  name,
  description: desc,
  image,
  price,
  countInStock,
});

const initialState = {
  products: [
    createProduct(
      "Nike",
      "Nike LeBron 21 Akoya",
      "The top sportswear brand on the planet by a longshot, it only makes sense that the cream of the crop in the NBA would want to rock The Swoosh on the court while getting paid to do so.",
      "https://cdn.sanity.io/images/d6wcctii/production/c945dbe965fe0208503e85e632202772e06b1f91-1070x760.png?w=768&q=75&fit=clip&auto=format",
      130.0,
      20,
    ),
    createProduct(
      "Nike",
      "Nike KD 16 Aunt Pearl",
      "Kevin Durant has made waves throughout his Nike KD line, now onto the Nike KD 16. He often brings forth colorways that tie into his personal life, like his love for music or raising awareness for breast cancer with his yearly tribute to his Aunt Pearl.",
      "https://cdn.sanity.io/images/d6wcctii/production/9fbb4a69c17385b5905abd3243341e59ed2fa76e-1070x760.png?w=768&q=75&fit=clip&auto=format",
      125.0,
      15,
    ),
    createProduct(
      "Nike",
      "Nike Ja 1 Day One",
      "As for the next generation of Nike Basketball athletes, we reported earlier in the year that Ja Morant would be the next athlete on The Swoosh’s roster to receive his own signature silhouette, aptly dubbed the Nike Ja 1.",
      "https://cdn.sanity.io/images/d6wcctii/production/0db38693b8bdb41a765ba6037781e27eebd5f998-1070x760.png?w=768&q=75&fit=clip&auto=format",
      135.0,
      25,
    ),
    createProduct(
      "Nike",
      "Nike PG 6 Paisley",
      "An aging star in the NBA, Paul George has been with Nike since 2016 and has released six different silhouettes since then with the latest being the Nike PG 6.",
      "https://cdn.sanity.io/images/d6wcctii/production/415d23a30b36056552843e6c2805fe27135b2b44-1070x760.png?w=768&q=75&fit=clip&auto=format",
      135.0,
      30,
    ),
    createProduct(
      "Nike",
      "Nike Zoom Freak 5 Milk 'N Oreos",
      "Nicknamed The Greek Freak, Giannis Antetokounmpo has become one of the leagues biggest stars thanks to his explosive play and large build.",
      "https://cdn.sanity.io/images/d6wcctii/production/5fb685b2598a7900aa073e054567ce8022241b22-1070x760.png?w=768&q=75&fit=clip&auto=format",
      135.0,
      18,
    ),
  
    createProduct(
      "Adidas",
      "Adidas Dame 8",
      "The Bucks' point guard, Damian Lillard, has not only made waves with his on-court prowess but also with his adidas signature sneakers.",
      "https://cdn.sanity.io/images/d6wcctii/production/d389f44639463983cec0cda39dcc51d3f2f60bc6-1070x760.png?q=75&fit=clip&auto=format",
      125.0,
      20,
    ),
    createProduct(
      "Adidas",
      "Adidas Harden Volume 7",
      "The adidas Harden Vol. 7 is the pinnacle of the series with its advanced construction including Lightstrike and Jet Boost cushioning.",
      "https://cdn.sanity.io/images/d6wcctii/production/ffe499440542bc971628f08d96c49ec36fe1e3bd-1070x760.png?q=75&fit=clip&auto=format",
      125.0,
      15,
    ),
    createProduct(
      "Adidas",
      "Adidas D.O.N. Issue #4",
      "Donovan Mitchell of the Cleveland Cavaliers has showcased his unique style and dedication through his signature line with adidas.",
      "https://cdn.sanity.io/images/d6wcctii/production/669d218582ce7b7e9c10ebae7309081ba0863069-1070x760.png?q=75&fit=clip&auto=format",
      130.0,
      25,
    ),
    createProduct(
      "Adidas",
      "Adidas Trae Young 1",
      "The Atlanta Hawks' sharpshooter, Trae Young, is another fantastic talent who has partnered with adidas.",
      "https://cdn.sanity.io/images/d6wcctii/production/4462908f5fb89808769e3e307e1bb8916d1da3ba-1070x760.png?q=75&fit=clip&auto=format",
      130.0,
      30,
    ),
    createProduct(
      "Adidas",
      "Adidas AE 1",
      "The Timberwolves' superstar, Anthony Edwards, is the new comer of the Adidas franchise and needs you,.",
      "https://cdn.sanity.io/images/d6wcctii/production/49cccf47ce478a7cb8681521a2783db6fc6ae26c-620x380.png?w=768&q=75&fit=clip&auto=format",
      130.0,
      18,
    ),
  ],
  filteredProducts: [
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        products: state.products,
        filteredProducts: state.products.filter((product) => {
          if (product.category === action.payload) {
            return product;
          } else if (action.payload === "") {
            return product;
          }
        }),
      };

    default:
      return state;
  }
};

export const productFilter = (category) => {
  return {
    type: "FILTER",
    payload: category,
  };
};
