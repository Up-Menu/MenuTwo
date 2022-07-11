import React, { useContext } from 'react';
import {
  Card,
  Box,
  Container,
  Grid,
  styled,
  Typography,
  Button
} from '@mui/material';

import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer';
import BottomNav from '../../shared/BottomNav';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ProgressContext from 'src/contexts/ProgressContext';
import IosSwitch from '../../interfaces/IosSwitch';

const OrdersMng = () => {
  const progressContext = useContext(ProgressContext);
  const MyCard = styled(Card)`
    margin: 23px;
  `;
  const submitOrder = () => {
    progressContext.onOrder(true);
  };

  return (
    <>
      <Container maxWidth="lg" component="main">
        <Box textAlign="left">
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Box p={5}>
                <Typography variant="h2">Order types</Typography>
              </Box>
              <Box p={5}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ padding: 1 }}
                  startIcon={<DoneOutlineIcon />}
                  color="success"
                  onClick={submitOrder}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <MyCard variant="outlined">
                <Box p={3}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <IosSwitch />
                    <Typography variant="h4">Delivery</Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <IosSwitch />
                    <Typography variant="h4">Pickup</Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <IosSwitch />
                    <Typography variant="h4">Pickup</Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <IosSwitch />
                    <Typography variant="h4">
                      Table ordering (QR Code)
                    </Typography>
                    <Typography variant="h4" fontSize={12}>
                      <Link to="/someLink">
                        &nbsp; Generate QR code for dine-in
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </MyCard>
            </Grid>
          </Grid>
        </Box>
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="createMenu"
          backLink="tables"
          forText="Create Menu"
          backText="Table manager"
        />
      </Container>
      <Footer />
    </>
  );
};

export default OrdersMng;
