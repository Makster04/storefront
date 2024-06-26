import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import AnchorTemporaryDrawer from '../Cart';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.length;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <header style={{ display: 'flex', alignContent: 'space-between' }}>
      <div>
        <h1 style={{ marginLeft: '30px' }}>
          Who Is Your Idol???
        </h1>
      </div>
      <div>
        <Button onClick={toggleDrawer('right', true)}>
          Cart: {cartItemCount}
        </Button>
        <AnchorTemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
      </div>
    </header>
  );
};

export default Header;

