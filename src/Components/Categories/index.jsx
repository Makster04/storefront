import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../../store/global-action/action.js';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Categories() {

  const categories = useSelector(state => state.category.categories);
  const activeCategory = useSelector(state => state.category.activeCategory)
  const dispatch = useDispatch();

  const handleClick = (category) => {
    dispatch(updateCategory(category.name))
  }

  const clearCategory = () => {
    dispatch(updateCategory(''))
  };

  return (
    <section style={{ textAlign: 'center' }}> {/* Center align the content */}
      <h2 style={{ margin: '20px 0' }}>Browse our Categories</h2> {/* Added margin */}
      {activeCategory ? <h3 style={{ margin: '10px 0' }}> Selected Category: {activeCategory}</h3> : <h3 style={{ margin: '10px 0' }}>Please Select A Category</h3>} {/* Added margin */}
      <Button onClick={() => clearCategory()}>Reset</Button>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', // Center align cards horizontally
        }}
      >
        {categories.map((category, idx) => {
          return <Card key={idx} sx={{ minWidth: 275, margin: 1 }}> {/* Added margin */}
            <CardContent>
              <Typography variant="h5" component="div">
                {category.name}
              </Typography>
              <Typography variant="body2">
                {category.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleClick(category)}>Select</Button>
            </CardActions>
          </Card>
        })}
      </Box>
    </section>
  );
}
