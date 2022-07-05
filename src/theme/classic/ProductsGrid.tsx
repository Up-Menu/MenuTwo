import { useState } from 'react';
import ProductItem from './ProductItem';
import styles from 'src/assets/styles/scss/ProductsGrid.module.scss';
import { useProducts } from 'src/components/modules/hooks/useProducts';
import { Key } from 'react';
import { Container, Grid, Box } from '@mui/material';
import Search from './Search';

const ProductsGrid = () => {
  const { products } = useProducts();

  const filterPosts = (posts: any[], query: string) => {
    if (!query) return posts;

    return posts.filter((post: { name: string }) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(products, searchQuery);

  return (
    <Container maxWidth="lg">
      <Box pt={2} pb={2} display="flex" flexDirection="row" alignItems="center">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="form-group">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {filteredPosts.map((product: { id: Key }) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductItem key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
      <div className={styles.p__footer}></div>
    </Container>
  );
};

export default ProductsGrid;
