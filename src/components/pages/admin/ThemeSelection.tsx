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
import Footer from '../../../shared/Footer';
import BottomNav from '../../../shared/BottomNav';
import { ThemesList } from '../../../theme/Themes';
import ProgressContext from 'src/context/ProgressContext';
import TitleText from '../../../UI/TitleText';
import RtlVersion from '../../../theme/RtlVersion';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';

const ThemeSelection = () => {
  const progressContext = useContext(ProgressContext);
  const choseHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RtlVersion>
        </Box>
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="createCategory"
          backLink="createRestaurant"
          forText="منو / افزودن دسته بندی"
          backText="رستوران - کافی شاپ"
        />
      </Container>
      <Footer />
    </>
  );
};

export default ThemeSelection;
