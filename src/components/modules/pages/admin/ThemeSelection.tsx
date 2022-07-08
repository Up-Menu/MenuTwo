import { useContext } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer';
import BottomNav from '../../shared/BottomNav';
import { ThemesList } from '../../../../theme/Themes';
import ProgressContext from 'src/contexts/ProgressContext';

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
      <Toaster />
      <Container maxWidth="lg">
        <Helmet>
          <title>انتخاب تم منو</title>
        </Helmet>
        <main>
          <Typography
            variant="h3"
            pt={2}
            pb={2}
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            Chose your theme from store:
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
                      onClick={choseHandler}
                    >
                      Active
                    </Button>
                    <Button
                      component={Link}
                      to={'/theme/store'}
                      sx={{ margin: 1 }}
                      color="warning"
                    >
                      Preview
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
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
