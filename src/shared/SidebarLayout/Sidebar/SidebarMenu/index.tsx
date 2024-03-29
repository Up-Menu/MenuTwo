import React, { useContext } from 'react';
import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/context/SidebarContext';

// import requirements icons
import RestaurantIcon from '@mui/icons-material/Restaurant';
// import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
// import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
// import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
// import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
// import BeenhereIcon from '@mui/icons-material/Beenhere';
// import MapIcon from '@mui/icons-material/Map';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
// import ContactlessIcon from '@mui/icons-material/Contactless';

// import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import CircularStatic from 'src/components/pages/admin/progress/PercentageCounter';
// import { Dropdown } from 'antd';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ColorLensIcon from '@mui/icons-material/ColorLens';
// import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import CelebrationIcon from '@mui/icons-material/Celebration';

// import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }}
    {...props}
  />
))(({ theme }) => ({
  textAlign: 'right',
  direction: 'rtl',
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));
const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
  
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          left: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          // color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          direction: rtl;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-endIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-endIcon {
            // color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-left: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            // color: ${theme.colors.alpha.trueWhite[50]};
            margin-right: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-endIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            left: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                left: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-left: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/overview"
                  endIcon={<LogoutIcon />}
                  color="error"
                >
                  خروج
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          sx={{ direction: 'rtl' }}
          subheader={
            <ListSubheader component="div" disableSticky>
              داشبورد
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/tasks"
                  endIcon={<CircularStatic />}
                >
                  نوار پیشرفت
                </Button>
              </ListItem>
              {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/messenger"
                  endIcon={<ContactlessIcon />}
                >
                  Contact Us
                </Button>
              </ListItem> */}
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          sx={{ direction: 'rtl' }}
          subheader={
            <ListSubheader component="div" disableSticky>
              منو
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/createRestaurant"
                  endIcon={<RestaurantIcon />}
                >
                  رستوران - کافی شاپ
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/themes"
                  endIcon={<ColorLensIcon />}
                >
                  انتخاب تم
                </Button>
              </ListItem>

              {/*<ListItem component="div">*/}
              {/*  <Button*/}
              {/*    disableRipple*/}
              {/*    onClick={closeSidebar}*/}
              {/*    component={RouterLink}*/}
              {/*    to="/dashboards/createMenu"*/}
              {/*    endIcon={<ArticleIcon />}*/}
              {/*  >*/}
              {/*    ساخت منو*/}
              {/*  </Button>*/}
              {/*</ListItem>*/}
              <ListItem component="div">
                {/*<Button*/}
                {/*  disableRipple*/}
                {/*  component={RouterLink}*/}
                {/*  onClick={closeSidebar}*/}
                {/*  to="/dashboards/orders"*/}
                {/*  endIcon={<BeenhereIcon />}*/}
                {/*>*/}
                {/*  نوع تحویل*/}
                {/*</Button>*/}
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<ArticleIcon />}
                >
                  منو
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button'
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem
                    component={RouterLink}
                    to="/dashboards/createCategory"
                    onClick={handleClose}
                    disableRipple
                  >
                    افزودن دسته بندی
                  </MenuItem>
                  <MenuItem
                    component={RouterLink}
                    to="/dashboards/createMenu"
                    onClick={handleClose}
                    disableRipple
                  >
                    ساخت منو
                  </MenuItem>
                </StyledMenu>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/tables"
                  endIcon={<TableRestaurantIcon />}
                >
                  ساخت میز
                </Button>
              </ListItem>
              {/*<ListItem component="div">*/}
              {/*  <Button*/}
              {/*    disableRipple*/}
              {/*    component={RouterLink}*/}
              {/*    onClick={closeSidebar}*/}
              {/*    to="/dashboards/delivery"*/}
              {/*    endIcon={<MapIcon />}*/}
              {/*  >*/}
              {/*    منطقه ارسال غذا*/}
              {/*  </Button>*/}
              {/*</ListItem>*/}

              {/*<ListItem component="div">*/}
              {/*  <Button*/}
              {/*    disableRipple*/}
              {/*    component={RouterLink}*/}
              {/*    onClick={closeSidebar}*/}
              {/*    to="/dashboards/testOrder"*/}
              {/*    endIcon={<MmsTwoToneIcon />}*/}
              {/*  >*/}
              {/*    تست سامانه*/}
              {/*  </Button>*/}
              {/*</ListItem>*/}
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/mobileApp"
                  endIcon={<PhoneIphoneIcon />}
                >
                  تنظیمات تلفن همراه
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/systemTest"
                  endIcon={<ConstructionIcon />}
                  color="warning"
                >
                  تست سامانه
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  color="success"
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/finish"
                  endIcon={<CelebrationIcon />}
                >
                  اتمام نصب
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        {/*<List*/}
        {/*  component="div"*/}
        {/*  subheader={*/}
        {/*    <ListSubheader component="div" disableSticky>*/}
        {/*      Management*/}
        {/*    </ListSubheader>*/}
        {/*  }*/}
        {/*>*/}
        {/*  <SubMenuWrapper>*/}
        {/*    <List component="div">*/}
        {/*      <ListItem component="div">*/}
        {/*        <Button*/}
        {/*          disableRipple*/}
        {/*          component={RouterLink}*/}
        {/*          onClick={closeSidebar}*/}
        {/*          to="/management/transactions"*/}
        {/*          endIcon={<TableChartTwoToneIcon />}*/}
        {/*        >*/}
        {/*          Transactions List*/}
        {/*        </Button>*/}
        {/*      </ListItem>*/}
        {/*    </List>*/}
        {/*  </SubMenuWrapper>*/}
        {/*</List>*/}
        {/*<List*/}
        {/*  component="div"*/}
        {/*  subheader={*/}
        {/*    <ListSubheader component="div" disableSticky>*/}
        {/*      Account Management*/}
        {/*    </ListSubheader>*/}
        {/*  }*/}
        {/*>*/}
        {/*  <SubMenuWrapper>*/}
        {/*    <List component="div">*/}
        {/*      <ListItem component="div">*/}
        {/*        <Button*/}
        {/*          disableRipple*/}
        {/*          component={RouterLink}*/}
        {/*          onClick={closeSidebar}*/}
        {/*          to="/management/profile/details"*/}
        {/*          endIcon={<AccountCircleTwoToneIcon />}*/}
        {/*        >*/}
        {/*          Profile*/}
        {/*        </Button>*/}
        {/*      </ListItem>*/}
        {/*      <ListItem component="div">*/}
        {/*        <Button*/}
        {/*          disableRipple*/}
        {/*          component={RouterLink}*/}
        {/*          onClick={closeSidebar}*/}
        {/*          to="/management/profile/settings"*/}
        {/*          endIcon={<DisplaySettingsTwoToneIcon />}*/}
        {/*        >*/}
        {/*          Setting*/}
        {/*        </Button>*/}
        {/*      </ListItem>*/}
        {/*    </List>*/}
        {/*  </SubMenuWrapper>*/}
        {/*</List>*/}
        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Components
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/buttons"
                  endIcon={<BallotTwoToneIcon />}
                >
                  Buttons
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/modals"
                  endIcon={<BeachAccessTwoToneIcon />}
                >
                  Modals
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/accordions"
                  endIcon={<EmojiEventsTwoToneIcon />}
                >
                  Accordions
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/tabs"
                  endIcon={<FilterVintageTwoToneIcon />}
                >
                  Tabs
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/badges"
                  endIcon={<HowToVoteTwoToneIcon />}
                >
                  Badges
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/tooltips"
                  endIcon={<LocalPharmacyTwoToneIcon />}
                >
                  Tooltips
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/avatars"
                  endIcon={<RedeemTwoToneIcon />}
                >
                  Avatars
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/cards"
                  endIcon={<SettingsTwoToneIcon />}
                >
                  Cards
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/forms"
                  endIcon={<TrafficTwoToneIcon />}
                >
                  Forms
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Extra Pages
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404"
                  endIcon={<CheckBoxTwoToneIcon />}
                >
                  Error 404
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/500"
                  endIcon={<CameraFrontTwoToneIcon />}
                >
                  Error 500
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/coming-soon"
                  endIcon={<ChromeReaderModeTwoToneIcon />}
                >
                  Coming Soon
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/maintenance"
                  endIcon={<WorkspacePremiumTwoToneIcon />}
                >
                  Maintenance
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
