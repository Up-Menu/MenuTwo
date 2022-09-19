import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from 'src/context/Shop/CartContext';
import { Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <Button
        component={Link}
        to={'/theme/cart'}
        sx={{ margin: 1 }}
        color="primary"
      >
        <Box display="flex" justifyContent="center">
          <ShoppingCartIcon width={''} />
          Cart ({itemCount})
        </Box>
      </Button>
      <Button
        variant="outlined"
        component={Link}
        to={'/theme/store'}
        sx={{ margin: 1 }}
        color="primary"
      >
        Store
      </Button>
    </Box>
  );
};

export default Header;
