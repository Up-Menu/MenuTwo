import { Container, Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Overview_main from 'src/components/modules/Overview_main';
import Overview_slider from 'src/components/modules/Overview_slider';
import Overview_blog from 'src/components/modules/blog/Overview_blog';
import Overview_nav from 'src/components/modules/shared/Overview_nav';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>منو رستوران سپند</title>
      </Helmet>
      <Overview_nav />
      <Overview_slider />
      <Overview_main />
      <Overview_blog />
      <Container maxWidth="lg"></Container>
    </OverviewWrapper>
  );
}

export default Overview;
