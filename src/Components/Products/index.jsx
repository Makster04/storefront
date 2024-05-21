import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Products = () => {
  const { products, activeCategory } = useSelector(state => ({
    products: state.products,
    activeCategory: state.categories.activeCategory,
  }));

  const filteredProducts = activeCategory 
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div>
      <h3>Products</h3>
      <Grid container spacing={3}>
        {filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="body1">
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;

