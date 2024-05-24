import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, lightBlue, orange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = useState(false);

  const filteredProducts = useSelector(state => state.product.filteredProducts);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {

  }, [filteredProducts])

  return (
    <>
      <h2 style={{ marginLeft: '30px'}}>Our Products</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 420,
            height: 500,
            marginLeft: '30px',
          },
        }}
      >
        {filteredProducts.map((product, idx) => {
          return <Card key={idx} sx={{ maxWidth: 345, 
          bgcolor: grey[500], 
          }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="basketball">
                  BASKETBALL
                </Avatar>
              }
              title={`${product.name} - $${product.price}`}
              subheader={`${product.category} - ${product.countInStock} in stock`}
            />
            <CardMedia
              component="img"
              height="300"
              sx={{ objectFit: 'contain',
              }}
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <Button
            variant='contained' disableElevation
              sx={{ bgcolor: lightBlue[500],
                color: 'black',
                marginLeft: '20px',
               }}
              onClick={() => dispatch(addToCart(product))}
            >ADD TO CART</Button>
            <Link to={`/products/${product.id}`}>Product Details</Link>
          </Card>

        })}
      </Box>
    </>
  );
}