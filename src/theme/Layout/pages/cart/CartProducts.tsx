import React from 'react';
import CartItem from './CartItem';
import { useCart } from 'src/components/modules/hooks/useCart';
import { Container, Divider, Grid, Box } from '@mui/material';

const CartProducts = () => {
  const { cartItems } = useCart();

  return (
    <Container maxWidth="lg" component="main">
      <Grid spacing={7} alignItems="center">
        {cartItems.map((product: { id: React.Key }) => (
          <Grid item xs={12} key={product.id}>
            <CartItem product={product} />
            <Box pb={2}>
              {+product.id - 1 !== cartItems.length ? <Divider /> : null}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CartProducts;
