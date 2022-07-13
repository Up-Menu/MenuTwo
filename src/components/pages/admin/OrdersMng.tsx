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
import Footer from '../../../shared/Footer';
import BottomNav from '../../../shared/BottomNav';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ProgressContext from 'src/contexts/ProgressContext';
import IosSwitch from '../../../UI/IosSwitch';
import RtlVersion from '../../../UI/RtlVersion';

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
        <Box sx={{ direction: 'rtl' }}>
          <Grid container spacing={2}>
            <RtlVersion>
              <Grid item xs={12} md={5}>
                <Box p={5}>
                  <Typography variant="h2">انواع تحویل</Typography>
                </Box>
                <Box p={5}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ padding: 1 }}
                    endIcon={<DoneOutlineIcon />}
                    color="success"
                    onClick={submitOrder}
                  >
                    ثبت
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
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
                      <Typography variant="h4">تحویل</Typography>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <IosSwitch />
                      <Typography variant="h4">ماشین بر</Typography>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <IosSwitch />
                      <Typography variant="h4">اعلان میز</Typography>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <IosSwitch />
                      <Typography variant="h4">سفارش میز (QR Code)</Typography>
                      <Typography variant="h4" fontSize={12}>
                        <Link to="/someLink">
                          &nbsp; کد QR برای صرف غذا ایجاد کن
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </MyCard>
              </Grid>
            </RtlVersion>
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
