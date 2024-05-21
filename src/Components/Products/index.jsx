// Components/Products.jsx
import React from 'react';
import { useSelector } from 'react-redux';

function Products() {
  const activeCategory = useSelector((state) => state.activeCategory);
  const products = useSelector((state) => state.products);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Inventory: {product.inventory}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
