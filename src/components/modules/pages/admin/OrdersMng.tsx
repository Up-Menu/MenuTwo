import {
  Card,
  Box,
  Container,
  Grid,
  styled,
  Typography,
  Button
} from '@mui/material';
import React, { useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer';
import BottomNav from '../../shared/BottomNav';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ProgressContext from 'src/contexts/ProgressContext';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#57CA22 !important',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#57CA22',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#FF1943',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));
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
                    <FormGroup>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label=""
                      />
                    </FormGroup>
                    <Typography variant="h4">Delivery</Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label=""
                      />
                    </FormGroup>
                    <Typography variant="h4">Pickup</Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label=""
                      />
                    </FormGroup>
                    <Typography variant="h4">Pickup</Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label=""
                      />
                    </FormGroup>
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
