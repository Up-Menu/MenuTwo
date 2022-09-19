import { useContext } from 'react';

import { Box, Divider, Avatar, styled, Button } from '@mui/material';

import { CheckBox, CheckBoxOutlineBlankTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ProgressContext from 'src/context/ProgressContext';

// import requirement icons
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import ArticleIcon from '@mui/icons-material/Article';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
// import BeenhereIcon from '@mui/icons-material/Beenhere';
// import MapIcon from '@mui/icons-material/Map';
// import BuildIcon from '@mui/icons-material/Build';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ConstructionIcon from '@mui/icons-material/Construction';
import CelebrationIcon from '@mui/icons-material/Celebration';

// import rtl module
import RtlVersion from 'src/theme/RtlVersion';

const checkedPart = <CheckBox />;
const noneCheckPart = <CheckBoxOutlineBlankTwoTone />;
const ProgressBar = () => {
  const progressContext = useContext(ProgressContext);
  const AvatarPrimary = styled(Avatar)(
    ({ theme }) => `
          background: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(7)};
          height: ${theme.spacing(7)};
    `
  );
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
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<RestaurantIcon />}
                color="primary"
              >
                رستوران - کافی شاپ
              </Button>
            </RtlVersion>
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
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<ColorLensIcon />}
                color="primary"
              >
                انتخاب تم
              </Button>
            </RtlVersion>
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
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<ArticleIcon />}
                color="primary"
              >
                ساخت منو
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>
      <Divider />
      {/* <Link to="/dashboards/orders">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.selectOrder ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<BeenhereIcon />}
                color="primary"
              >
                نوع تحویل
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>
      <Divider /> */}
      <Link to="/dashboards/tables">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.tableManager ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<TableRestaurantIcon />}
                color="primary"
              >
                ساخت میز
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>
      <Divider />
      {/* <Link to="/dashboards/delivery">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.deliveryZone ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<MapIcon />}
                color="primary"
              >
                منطقه ارسال غذا
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>
      <Divider /> */}

      <Link to="/dashboards/mobileApp">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.mobileApp ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<PhoneIphoneIcon />}
                color="primary"
              >
                تنظیمات تلفن همراه
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>
      <Divider />
      <Link to="/dashboards/systemTest">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary>
            {progressContext.testOrders ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                size="large"
                sx={{ padding: 1 }}
                endIcon={<ConstructionIcon />}
                color="warning"
              >
                تست سامانه
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>

      <Divider />
      <Link to="/dashboards/finish">
        <Box px={2} py={4} display="flex" alignItems="flex-center">
          <AvatarPrimary color="success">
            {progressContext.finishInstallation ? checkedPart : noneCheckPart}
          </AvatarPrimary>
          <Box
            pr={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ direction: 'rtl' }}
          >
            <RtlVersion>
              <Button
                disableRipple
                type="submit"
                size="large"
                // variant="outlined"
                sx={{ padding: 1 }}
                endIcon={<CelebrationIcon />}
                color="success"
              >
                اتمام نصب
              </Button>
            </RtlVersion>
          </Box>
        </Box>
      </Link>
    </div>
  );
};

export default ProgressBar;
