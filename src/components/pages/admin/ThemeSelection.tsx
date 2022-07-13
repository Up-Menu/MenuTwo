import { useContext } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box
} from '@mui/material';

import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Footer from '../../../shared/Footer';
import BottomNav from '../../../shared/BottomNav';
import { ThemesList } from '../../../theme/Themes';
import ProgressContext from 'src/contexts/ProgressContext';
import TitleText from '../../../UI/TitleText';
import RtlVersion from '../../../UI/RtlVersion';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ThemeSelection = () => {
  const progressContext = useContext(ProgressContext);
  const choseHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('theme chosen!');
    toast.success('!تم با موفقیت انتخاب شد');
    progressContext.onTheme(true);
  };
  return (
    <>
      <TitleText header="انتخاب تم منو" />
      <Toaster />
      <Container maxWidth="lg">
        <Box sx={{ direction: 'rtl' }}>
          <RtlVersion>
            <Typography
              variant="h3"
              pt={2}
              pb={2}
              display="flex"
              flexDirection="column"
              textAlign="center"
            >
              تم خود را انتخاب کنید
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {ThemesList.map((data: any) => (
                <Grid item xs={12} md={6} key={data.id}>
                  <Card sx={{}}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={data.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        color="success"
                        endIcon={<InstallDesktopIcon />}
                        onClick={choseHandler}
                      >
                        نصب
                      </Button>
                      <Button
                        component={Link}
                        to={'/theme/store'}
                        sx={{ margin: 1 }}
                        color="warning"
                        endIcon={<VisibilityIcon />}
                      >
                        پیش نمایش
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RtlVersion>
        </Box>
        <BottomNav
          className="pt-5"
          nextStep={false}
          preStep={true}
          forLink="order-type"
          backLink="createMenu"
          forText="ساخت حساب"
          backText="Create Menu"
        />
      </Container>
      <Footer />
    </>
  );
};

export default ThemeSelection;
