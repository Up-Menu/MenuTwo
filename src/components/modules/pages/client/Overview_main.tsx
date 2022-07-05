import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ReactTypingEffect from 'react-typing-effect';
import Alert from '@mui/material/Alert';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../../shared/Footer';
import images from 'src/importer';
import { ColorModeContext } from 'src/theme/DarkLight';
import { useTheme } from '@mui/material';

const MyButton = styled(Button)`
  &:hover svg {
    margin-left: 5px;
  }
`;

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];
const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained'
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  }
];

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
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      <Box sx={{ pt: 15, pb: 6 }}>
        <Container maxWidth="lg" component="main">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h2">
                Online food ordering system on your own
              </Typography>

              <>
                <ReactTypingEffect
                  text={[
                    'mobile application.',
                    'Facebook page',
                    'restaurant website'
                  ]}
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
                  ) => <h1>{cursor}</h1>}
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
                No commission costs. Start in 5 minutes.
              </Typography>

              <Stack direction="row" spacing={2} pt={4}>
                <Button
                  variant="outlined"
                  sx={{ padding: 1 }}
                  size="large"
                  color="primary"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="large"
                  sx={{ padding: 1 }}
                  startIcon={<SlowMotionVideoIcon />}
                >
                  Watch Video
                </Button>
              </Stack>

              <Typography variant="h6" fontSize={10} pt={1}>
                No credit card required・Free for 7 days・No commitment
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
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
                  How UpMenu help selling online during COVID-19
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
              Used by 7600+ restaurant owners around the world
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
              Take advantage of the restaurant ordering system and earn more
              just like our customers
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

          <Grid pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h2">
                Food online ordering for restaurants
              </Typography>
              <p>
                Launch a commission-free restaurant ordering system and reduce
                delivery portal costs up to 70%. Decide on fixed costs per month
                for your restaurant business
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn about online ordering system
                </MyButton>
              </Link>
            </Grid>

            <Grid item xs={12} md={8}>
              <img src={images['burger.png']} alt="" />
            </Grid>
          </Grid>

          <Grid pt={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 1, md: -1 }}>
              <img src={images['new-home-2.png']} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">Branded mobile app</Typography>
              <p>
                Increase sales and get up to 20% more online orders
                <br />
                thanks to the branded mobile app for restaurants. Make
                <br />
                your business available on every device.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn about mobile app for online ordering systems
                </MyButton>
              </Link>
            </Grid>
          </Grid>

          <Grid pt={5} pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h2">Free restaurant</Typography>

              <Typography variant="h2" color="#8C7CF0">
                website builder
              </Typography>
              <p>
                Build a website for a restaurant ordering using free
                <br />
                UpMenu templates in 5 minutes and watch conversions
                <br />
                increase up to 40%. No coding skills required. Gather
                <br />
                more traffic to your restaurant business webpage.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn about restaurant websites with ordering system
                </MyButton>
              </Link>
            </Grid>

            <Grid item xs={12} md={7}>
              <img src={images['new-home-3.png']} alt="" />
            </Grid>
          </Grid>

          <Grid pt={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: -1 }}>
              <img src={images['new-home-4.png']} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">Table booking system</Typography>
              <p>
                60% of customers would like to book a table online – let
                <br />
                them. Forget about abandoned reservations thanks to the
                <br />
                pre-ordering option in app. Try it for free.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn about table booking
                </MyButton>
              </Link>
            </Grid>
          </Grid>

          <Grid pt={5} pb={5} container spacing={7} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h2">Loyalty program &</Typography>
              <Typography variant="h2">reward system</Typography>

              <p>
                Loyal customers spend 67% more when online ordering
                <br />
                food than average. Reward them. Forget paper cards with
                <br />
                stamps. Go digital, both online with a dedicated app or
                <br />
                website, and at a restaurant and sell more food orders
                <br />
                online.
              </p>

              <Link to="/someLink">
                <MyButton
                  size="large"
                  sx={{ padding: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn about loyalty programs
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
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center'
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6]
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <MyLink to="/someLink" color="text.secondary">
                        {item}
                      </MyLink>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End footer */}
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default function Overview_main() {
  return <PricingContent />;
}
