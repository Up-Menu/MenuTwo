import { useContext } from 'react';

import { Box, Typography, Divider, Avatar, styled } from '@mui/material';

import { CheckBox, CheckBoxOutlineBlankTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ProgressContext from 'src/contexts/ProgressContext';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.primary.lighter};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
);

const checkedPart = <CheckBox />;
const noneCheckPart = <CheckBoxOutlineBlankTwoTone />;
const ProgressBar = () => {
  const progressContext = useContext(ProgressContext);

  return (
    <div>
      <Link to="/dashboards/createRestaurant">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          {
            <AvatarPrimary>
              {progressContext.createRestaurant ? checkedPart : noneCheckPart}
            </AvatarPrimary>
          }
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Restaurant Create</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />

      <Link to="/dashboards/themes">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.themeSelection ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Theme Selection</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />

      <Link to="/dashboards/createMenu">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.addMenu ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Add Your First Menu Items</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />
      <Link to="/dashboards/orders">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.selectOrder ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Select Order Types</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />
      <Link to="/dashboards/delivery">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.deliveryZone ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Add Your First Delivery Zone</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />
      <Link to="/dashboards/testOrder">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.testOrders ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Test Your Orders</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />
      <Link to="/dashboards/mobileApp">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.mobileApp ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Configuration Your Mobile App</Typography>
          </Box>
        </Box>
      </Link>
      <Divider />
      <Link to="/dashboards/finish">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.finishInstallation ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pl={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
          >
            <Typography variant="h4">Finish UpMenu Installation</Typography>
          </Box>
        </Box>
      </Link>
    </div>
  );
};

export default ProgressBar;
