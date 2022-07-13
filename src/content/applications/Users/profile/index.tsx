import { Helmet } from 'react-helmet-async';
import Footer from 'src/shared/Footer';

import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';
import { useTypedSelector } from 'src/store';
import images from 'src/widgets/importer';

function ManagementUserProfile() {
  const logData: any = useTypedSelector((state) => state);
  const user = {
    savedCards: 7,
    coverImg: '/static/images/placeholders/covers/5.jpg',
    name: logData.googleData.payload
      ? `${logData.googleData.payload.firstName} ${logData.googleData.payload.lastName}`
      : 'Sepand User',
    avatar: logData.googleData.payload
      ? logData.googleData.payload.profile
      : images['avatars/profile_default.png'],
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Sepand user',
    location: 'Barcelona, Spain',
    followers: '465'
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
