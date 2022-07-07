import {
  Card,
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Button
} from '@mui/material';
import BottomNav from '../../shared/BottomNav';
import Footer from '../../shared/Footer';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const MobileApp = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <Box pt={4} pl={4} pb={2}>
                <Typography variant="h3">Pick color</Typography>
              </Box>
              <Divider />
              <Box pt={4} pl={4} pb={2}>
                <Typography variant="h6">
                  In this section please chose your menu color theme from <br />
                  below palettes:
                </Typography>
              </Box>

              <Box pt={4} pl={4} pb={2}>
                {/* put color palettes there */}
              </Box>

              <Box pt={4} pl={4} pb={2}>
                <Button
                  size="large"
                  variant="outlined"
                  sx={{ padding: 1 }}
                  startIcon={<DownloadDoneIcon />}
                >
                  Finish Installation
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box p={4}>xs=6 md=8</Box>
            </Card>
          </Grid>
        </Grid>
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="delivery"
          backLink="finish"
          forText="Add delivery zone"
          backText="Finish installation"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default MobileApp;
