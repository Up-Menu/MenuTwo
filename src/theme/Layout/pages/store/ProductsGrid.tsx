import ProductItem from './ProductItem'
import styles from 'src/assets/styles/scss/ProductsGrid.module.scss'
import { useProducts } from 'src/components/modules/hooks/useProducts'
import { Key } from 'react'
import { TextField, Container, Grid, Box } from '@mui/material'

const ProductsGrid = () => {
  const { products } = useProducts()

  return (
    <Container maxWidth="lg">
      <Box pt={ 2 } pb={ 2 } display="flex" flexDirection="row" alignItems="center">
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 }>
            <div className="form-group">
              <TextField
                required
                label="Search"
                type="text"
              />
            </div>
          </Grid>
        </Grid>
      </Box>


      <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
        { products.map( ( product: { id: Key } ) => (
          <Grid item xs={ 2 } sm={ 4 } md={ 4 } key={ product.id }>
            <ProductItem key={ product.id } product={ product } />
          </Grid>
        ) ) }
      </Grid>
      <div className={ styles.p__footer }></div>
    </Container>
  )
}

export default ProductsGrid
