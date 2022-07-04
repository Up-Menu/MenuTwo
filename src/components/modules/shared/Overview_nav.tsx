import React, { Fragment, useContext, useRef, useState } from 'react';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import HeaderMenu from 'src/layouts/SidebarLayout/Header/Menu';
import HeaderSearch from 'src/layouts/SidebarLayout/Header/Buttons/Search';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';
import { userLogout } from 'src/store/actions';
import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  Avatar,
  Button,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import { SidebarContext } from 'src/contexts/SidebarContext';
import { useTypedSelector, useTypedDispatch } from 'src/store';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import images from 'src/importer';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
          height: ${theme.header.height};
          color: ${theme.header.textColor};
          padding: ${theme.spacing(0, 2)};
          right: 0;
          z-index: 6;
          background-color: ${alpha(theme.header.background, 0.95)};
          backdrop-filter: blur(3px);
          position: fixed;
          justify-content: space-between;
          width: 100%;
  `
);
const UserBoxButton = styled(Button)(
  ({ theme }) => `
          padding-left: ${theme.spacing(1)};
          padding-right: ${theme.spacing(1)};
  `
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
          background: ${theme.colors.alpha.black[5]};
          padding: ${theme.spacing(2)};
  `
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
          text-align: left;
          padding-left: ${theme.spacing(1)};
  `
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
          font-weight: ${theme.typography.fontWeightBold};
          color: ${theme.palette.secondary.main};
          display: block;
  `
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
          color: ${lighten(theme.palette.secondary.main, 0.5)}
  `
);

const Overview_nav = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  const logData: any = useTypedSelector((state) => state);
  const dispatch = useTypedDispatch();
  const user = {
    name: logData.googleData.payload
      ? `${logData.googleData.payload.firstName} ${logData.googleData.payload.lastName}`
      : 'Not Registered',
    avatar: logData.googleData.payload
      ? logData.googleData.payload.profile
      : images['avatars/profile_default.png'],
    jobtitle: 'Sepand user'
  };

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const signOutHandler = (e: any): void => {
    e.preventDefault();
    dispatch(userLogout()).then(() => {
      window.location.reload();
    });
  };

  const colorMode = React.useContext(ColorModeContext);

  return (
    <Fragment>
      <HeaderWrapper
        display="flex"
        alignItems="center"
        sx={{
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 1px 0 ${alpha(
                  lighten(theme.colors.primary.main, 0.7),
                  0.15
                )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
              : `0px 2px 8px -3px ${alpha(
                  theme.colors.alpha.black[100],
                  0.2
                )}, 0px 5px 22px -4px ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}`
        }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          spacing={2}
        >
          <HeaderMenu />
        </Stack>
        <Box display="flex" alignItems="center">
          <Box sx={{ mr: 1 }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <Box sx={{ mr: 1 }}>
            <HeaderSearch />
          </Box>
          {/* <HeaderUserbox /> */}
          <>
            <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
              <Avatar variant="rounded" alt={user.name} src={user.avatar} />
              <Hidden mdDown>
                <UserBoxText>
                  <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                  {/* <UserBoxDescription variant="body2">
                    {user.jobtitle}
                  </UserBoxDescription> */}
                </UserBoxText>
              </Hidden>
              <Hidden smDown>
                <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
              </Hidden>
            </UserBoxButton>
            <Popover
              anchorEl={ref.current}
              onClose={handleClose}
              open={isOpen}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuUserBox sx={{ minWidth: 210 }} display="flex">
                <Avatar variant="rounded" alt={user.name} src={user.avatar} />
                <UserBoxText>
                  <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                  <UserBoxDescription variant="body2">
                    {user.jobtitle}
                  </UserBoxDescription>
                </UserBoxText>
              </MenuUserBox>
              <Divider sx={{ mb: 0 }} />

              <Divider />
              <Box sx={{ m: 1 }}>
                {logData.user || logData.googleData ? (
                  <>
                    <List sx={{ p: 1 }} component="nav">
                      <ListItem
                        button
                        to="/dashboards/tasks"
                        component={NavLink}
                      >
                        <AccountBoxTwoToneIcon fontSize="small" />
                        <ListItemText primary="Dashboard" />
                      </ListItem>

                      <ListItem
                        button
                        to="/dashboards/messenger"
                        component={NavLink}
                      >
                        <InboxTwoToneIcon fontSize="small" />
                        <ListItemText primary="Messenger" />
                      </ListItem>
                      <ListItem
                        button
                        to="/management/profile/settings"
                        component={NavLink}
                      >
                        <AccountTreeTwoToneIcon fontSize="small" />
                        <ListItemText primary="Account Settings" />
                      </ListItem>
                    </List>
                    <Button color="primary" fullWidth onClick={signOutHandler}>
                      <LockOpenTwoToneIcon sx={{ mr: 1 }} />
                      Sign out
                    </Button>
                  </>
                ) : (
                  <List sx={{ p: 1 }} component="nav">
                    <ListItem button to="/dashboards/tasks" component={NavLink}>
                      <AccountBoxTwoToneIcon fontSize="small" />
                      <ListItemText primary="SignIn" />
                    </ListItem>
                    <ListItem button to="/dashboards/tasks" component={NavLink}>
                      <LoginIcon fontSize="small" />
                      <ListItemText primary="LogIn" />
                    </ListItem>
                  </List>
                )}
              </Box>
            </Popover>
          </>
          <Box
            component="span"
            sx={{
              ml: 2,
              display: { lg: 'none', xs: 'inline-block' }
            }}
          >
            <Tooltip arrow title="Toggle Menu">
              <IconButton color="primary" onClick={toggleSidebar}>
                {!sidebarToggle ? (
                  <MenuTwoToneIcon fontSize="small" />
                ) : (
                  <CloseTwoToneIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </HeaderWrapper>
    </Fragment>
  );
};

export default Overview_nav;
