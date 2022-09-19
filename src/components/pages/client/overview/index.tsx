import { Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Overview_main from 'src/components/pages/client/Overview_main';
import Overview_nav from 'src/shared/Overview_nav';

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
      <Overview_main />
    </OverviewWrapper>
  );
}

export default Overview;
