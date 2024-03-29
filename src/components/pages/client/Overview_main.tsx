import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ReactTypingEffect from 'react-typing-effect';
import Alert from '@mui/material/Alert';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../../../shared/Footer';
import images from 'src/widgets/importer';
import { Divider, useTheme, styled } from '@mui/material';

const MyButton = styled(Button)`
  svg {
    margin-right: 0.5em;
  }
`;

function PricingContent() {
  const theme = useTheme();

  const MyAlert = styled(Alert)`
    border: 1px solid red;
    color: ${theme.palette.mode === 'dark' ? '#FF1943' : 'red'};
    background-color: ${theme.palette.mode === 'dark'
      ? 'rgba(122, 2, 2, 0.3)'
      : '#fbaaaa'};
    justify-content: center;

    svg {
      color: ${theme.palette.mode === 'dark' ? '#FF1943' : 'red'};
      padding-top: 1px;
    }
  `;
  const MyLink = styled(Link)`
    color: ${theme.palette.mode === 'dark' ? '#9EA4C1' : '#000000d4'};
  `;
  const ArrowLeftIcon = styled(ArrowForwardIcon)`
    transform: rotate(180deg);
  `;
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      <Box sx={{ pt: 15, pb: 6, direction: 'rtl' }}>
        <Container maxWidth="lg" component="main">
          <Grid container spacing={9} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h2">
                سیستم سفارش آنلاین منو رستوران
              </Typography>

              <>
                <ReactTypingEffect
                  text={['اپلیکیشن موبایل.', 'صفحه فیسبوک', 'وبسایت رستوران']}
                  eraseSpeed={60}
                  cursorRenderer={(
                    cursor:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                  ) => <h1 dir="ltr">{cursor}</h1>}
                  displayTextRenderer={(text: string, i: any) => {
                    return (
                      <h1>
                        {text.split('').map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span
                              key={key}
                              style={
                                i % 2 === 0
                                  ? { color: '#8C7CF0' }
                                  : { color: '#8C7CF0' }
                              }
                            >
                              {char}
                            </span>
                          );
                        })}
                      </h1>
                    );
                  }}
                />
              </>
              <Typography variant="h4">
                بدون هزینه کمیسیون 5 دقیقه دیگر شروع کنید.
              </Typography>

              <Box display="flex" flexDirection="row" pt={4}>
                <Button
                  variant="outlined"
                  sx={{ padding: 1, marginLeft: 2 }}
                  size="large"
                  color="primary"
                >
                  آزمایش رایگان را شروع کنید
                </Button>
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<SlowMotionVideoIcon />}
                >
                  دیدن ویدئو آموزشی
                </MyButton>
              </Box>

              <Typography variant="h6" fontSize={10} pt={1}>
                بدون نیاز به کارت اعتباری・رایگان به مدت 7 روز・بدون تعهد
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <img src={images['burger.png']} alt="" />
            </Grid>
          </Grid>

          <Box
            pt={3}
            pb={3}
            display="flex"
            flexDirection="row"
            textAlign="center"
            alignContent="center"
            justifyContent="center"
          >
            <Stack>
              <Link to="/component">
                <MyAlert severity="error">
                  چگونه UpMenu به فروش آنلاین در طول COVID-19 کمک می کند
                </MyAlert>
              </Link>
            </Stack>
          </Box>

          <Box
            pb={3}
            display="flex"
            flexDirection="row"
            textAlign="center"
            alignContent="center"
            justifyContent="center"
          >
            <Typography variant="h2">
              مورد استفاده بیش از 7600 صاحب رستوران در سراسر ایران
            </Typography>
          </Box>

          <Box
            pb={3}
            display="flex"
            flexDirection="row"
            textAlign="center"
            alignContent="center"
            justifyContent="center"
          >
            <Typography variant="h6" fontSize={14} pt={1}>
              از سیستم سفارش رستوران بهره ببرید و درآمد بیشتری کسب کنید درست مثل
              مشتریان ما!
            </Typography>
          </Box>

          <Box
            pb={3}
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            textAlign="center"
            alignContent="center"
            justifyContent="center"
          >
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <img src={images['logo-subway.png']} alt="" />
              </Grid>
              <Grid item xs={2}>
                <img src={images['logo-77sushi.png']} alt="" />
              </Grid>
              <Grid item xs={2}>
                <img src={images['logo-elburro.png']} alt="" />
              </Grid>
              <Grid item xs={2}>
                <img src={images['logo-tasteburger.png']} alt="" />
              </Grid>
              <Grid item xs={2}>
                <img src={images['logo-fiero.png']} alt="" />
              </Grid>
              <Grid item xs={2}>
                <img src={images['logo-otosushi.png']} alt="" />
              </Grid>
            </Grid>
          </Box>

          <Grid pb={5} pt={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h2">
                سفارش آنلاین غذا برای رستوران ها
              </Typography>
              <p>
                یک سیستم سفارش رستوران بدون کمیسیون راه اندازی کنید و کاهش دهید
                پورتال تحویل تا 70 درصد هزینه دارد. در مورد هزینه های ثابت در
                ماه تصمیم بگیرید برای کسب و کار رستوران شما
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowLeftIcon />}
                >
                  با سیستم سفارش آنلاین آشنا شوید
                </MyButton>
              </Link>
            </Grid>

            <Grid item xs={12} md={8}>
              <img src={images['burger.png']} alt="" />
            </Grid>
          </Grid>

          <Grid pt={5} pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 1, md: -1 }}>
              <img src={images['new-home-2.png']} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">اپلیکیشن موبایل مارک دار</Typography>
              <p>
                فروش را افزایش دهید و تا 20٪ سفارشات آنلاین بیشتری دریافت کنید
                با تشکر از برنامه تلفن همراه مارک برای رستوران ها. بسازید کسب و
                کار شما در هر دستگاهی موجود است.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowLeftIcon />}
                >
                  با اپلیکیشن موبایل برای سیستم های سفارش آنلاین آشنا شوید
                </MyButton>
              </Link>
            </Grid>
          </Grid>

          <Grid pt={5} pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h2">رستوران رایگان</Typography>

              <Typography variant="h2" color="#8C7CF0">
                سازنده وب سایت
              </Typography>
              <p>
                وب سایتی برای سفارش رستوران با استفاده از رایگان بسازید قالب های
                UpMenu در 5 دقیقه و تماشای تبدیل تا 40 درصد افزایش یابد. بدون
                نیاز به مهارت کدنویسی جمع آوری ترافیک بیشتر به صفحه وب کسب و کار
                رستوران شما.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowLeftIcon />}
                >
                  با سایت های رستوران با سیستم سفارش آشنا شوید
                </MyButton>
              </Link>
            </Grid>

            <Grid item xs={12} md={7}>
              <img src={images['new-home-3.png']} alt="" />
            </Grid>
          </Grid>

          <Grid pt={5} pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: -1 }}>
              <img src={images['new-home-4.png']} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">سیستم رزرو میز</Typography>
              <p>
                60 درصد از مشتریان مایلند به صورت آنلاین میز رزرو کنند – اجازه
                دهید آنها با تشکر از رزروهای رها شده را فراموش کنید گزینه
                پیش‌سفارش در برنامه آن را به صورت رایگان امتحان کنید.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowLeftIcon />}
                >
                  با رزرو میز آشنا شوید
                </MyButton>
              </Link>
            </Grid>
          </Grid>

          <Grid pt={5} pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h2">برنامه وفاداری و</Typography>
              <Typography variant="h2">سیستم پاداش</Typography>

              <p>
                مشتریان وفادار 67 درصد بیشتر هنگام سفارش آنلاین خرج می کنند غذا
                از حد متوسط به آنها پاداش دهید. کارت های کاغذی را با تمبرها
                دیجیتالی شوید، هم آنلاین با یک برنامه اختصاصی یا وب سایت، و در
                یک رستوران و فروش بیشتر سفارشات غذا برخط.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowLeftIcon />}
                >
                  با برنامه های وفاداری آشنا شوید
                </MyButton>
              </Link>
            </Grid>

            <Grid item xs={12} md={7}>
              <img src={images['new-home-5.png']} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 3, pb: 6 }}
      >
        <Divider />

        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default function Overview_main() {
  return <PricingContent />;
}
