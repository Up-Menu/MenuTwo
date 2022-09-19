import { Box } from '@mui/material';
import Layout from './Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Layout title="Store" description="This is the Store page">
        <div>
          <div className="text-center mt-5">
            <h1>Store</h1>
            <p>This is the Store Page.</p>
          </div>
          <ProductsGrid />
        </div>
      </Layout>
    </Box>
  );
};

export default Store;
