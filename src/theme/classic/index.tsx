import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from './Layout';
import { useCart } from 'src/hooks/useCart';
import { formatNumber } from 'src/helpers/utils';
import {
  Alert,
  Box,
  Button,
  Divider,
  Stack,
  styled,
  Typography
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const MyAlert = styled(Alert)`
  border: 1px solid green;
  color: rgb(187, 233, 166);
  background-color: rgba(17, 57, 0, 0.3);
  align-items: baseline;
`;

const Cart = () => {
  const { total, cartItems, clearCart, checkout, handleCheckout } = useCart();

  return (
    <Layout title="Cart" description="This is the Cart page">
      <div>
        <Box textAlign="center" mt={5} mb={5}>
          <Typography variant="h1">Cart</Typography>
          <p>This is the Cart Page.</p>
        </Box>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <Box p={3} textAlign="center">
                Your cart is empty
              </Box>
            )}

            {checkout && (
              <Box p={3} textAlign="center">
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <MyAlert severity="success">Checkout successful</MyAlert>
                </Stack>

                <Link to="/theme/store">
                  <Button
                    size="large"
                    sx={{ padding: 1 }}
                    endIcon={<AddShoppingCartIcon />}
                  >
                    BUY MORE
                  </Button>
                </Link>
              </Box>
            )}
          </div>
          {cartItems.length > 0 && (
            <Box p={3}>
              <Box display="flex" flexDirection="column" textAlign="center">
                {/* <p className="mb-1">Total Items</p>
                <Typography variant="h4">{itemCount}</Typography> */}
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Box display="flex" justifyContent="center">
                    <MyAlert severity="success">
                      <Typography variant="h3">
                        {formatNumber(total)}
                      </Typography>
                    </MyAlert>
                  </Box>
                </Stack>
              </Box>
              <Box pt={2} pb={2}>
                <Divider />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                pb={5}
              >
                <Box pl={2} pr={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ padding: 1 }}
                    endIcon={<PriceCheckIcon />}
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </Button>
                </Box>

                <Box pl={2} pr={2}>
                  <Button
                    size="small"
                    sx={{ padding: 1 }}
                    endIcon={<DeleteSweepIcon />}
                    onClick={clearCart}
                  >
                    CLEAR
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
