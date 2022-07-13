import { Fragment } from 'react';

import { useCart } from 'src/hooks/useCart';
import { formatNumber } from 'src/helpers/utils';

import {
  Box,
  CssBaseline,
  GlobalStyles,
  IconButton,
  Typography
} from '@mui/material';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const minusStyles = makeStyles((theme) => ({
  customHoverFocus: {
    '&:hover, &.Mui-focusVisible': { color: '#ad1457' }
  }
}));

const plusStyles = makeStyles((theme) => ({
  customHoverFocus: {
    '&:hover, &.Mui-focusVisible': { color: '#57CA22' }
  }
}));

const trashStyles = makeStyles((theme) => ({
  customHoverFocus: {
    '&:hover, &.Mui-focusVisible': { color: '#FF1943' }
  }
}));

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useCart();
  const plusClasses = plusStyles();
  const minusClasses = minusStyles();
  const trashClasses = trashStyles();
  return (
    <Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        justifyItems="center"
        justifySelf="center"
        alignItems="center"
        alignContent="center"
        alignSelf="center"
        textAlign="start"
        flexWrap="wrap"
      >
        <Box>
          <img
            alt={product.name}
            style={{ margin: '0 auto', maxWidth: '150px' }}
            src={product.photo}
          />
        </Box>

        <Box>
          <Box>
            <Typography mb={1} variant="h5">
              {product.name}
            </Typography>
            <Box mb={1}>Price: {formatNumber(product.price)} </Box>
          </Box>
          <Box mb={0}>
            <p>Qty: {product.quantity}</p>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column">
          <IconButton
            className={plusClasses.customHoverFocus}
            aria-label="Delete"
            onClick={() => increase(product)}
          >
            <AddCircleIcon />
          </IconButton>

          {product.quantity > 1 && (
            <IconButton
              className={minusClasses.customHoverFocus}
              aria-label="Delete"
              onClick={() => decrease(product)}
            >
              <RemoveCircleIcon />
            </IconButton>
          )}

          {product.quantity === 1 && (
            <IconButton
              className={trashClasses.customHoverFocus}
              aria-label="Delete"
              onClick={() => removeProduct(product)}
            >
              <DeleteForeverIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default CartItem;
