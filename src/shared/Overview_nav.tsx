import React, { Fragment, useEffect, useRef, useState } from 'react';
import HeaderSearch from 'src/shared/Header/Buttons/Search';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogout } from 'src/store/actions';
import {
  Box,
  alpha,
  lighten,
  Divider,
  IconButton,
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

import { useTypedSelector, useTypedDispatch } from 'src/store';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import images from 'src/widgets/importer';
import { ColorModeContext } from 'src/theme/DarkLight';
import RtlVersion from '../theme/RtlVersion';

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
          direction:rtl;
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
          padding-left:${theme.spacing(2)};
          justify-content: space-between
  `
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
          text-align: right;
          padding-right: ${theme.spacing(1)};
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
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const logData: any = useTypedSelector((state) => state);
  const dispatch = useTypedDispatch();
  const nav = useNavigate();
  const [user, setUser] = useState({
    name: 'کاربر سپند',
    avatar: images['avatars/profile_default.png'],
    jobtitle: 'سطح نقره ای'
  });

  useEffect(() => {
    if (logData.googleData.user) {
      setUser({
        name: `${logData.googleData.user.firstName} ${logData.googleData.user.lastName}`,
        avatar: logData.googleData.user.profile,
        jobtitle: 'سطح نقره ای'
      });
    } else if (logData.googleData.payload) {
      setUser({
        name: `${logData.googleData.payload.firstName} ${logData.googleData.payload.lastName}`,
        avatar: logData.googleData.payload.profile,
        jobtitle: 'سطح نقره ای'
      });
    } else if (logData.user.user) {
      setUser({
        name: `${logData.user.user.email}`,
        avatar: 'from reg',
        jobtitle: 'سطح نقره ای'
      });
    } else if (logData.user.payload) {
      setUser({
        name: `${logData.user.payload.email}`,
        avatar: 'from reg',
        jobtitle: 'سطح نقره ای'
      });
    } else {
      setUser({
        name: 'کاربر سپند',
        avatar: images['avatars/profile_default.png'],
        jobtitle: 'سطح نقره ای'
      });
    }
  }, []);

  const signOutHandler = (e: any): void => {
    e.preventDefault();
    setUser({
      name: 'کاربر سپند',
      avatar: images['avatars/profile_default.png'],
      jobtitle: 'سطح نقره ای'
    });
    dispatch(userLogout(nav));
    setOpen(false);
  };

  return (
    <Fragment>
      <HeaderWrapper
        display="flex"
        alignItems="center"
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary'
        }}
      >
        <Box display="flex" alignItems="center">
          <Box sx={{ ml: 1 }}>{/* dark mode button */}</Box>
          <Box sx={{ ml: 1 }}>
            <HeaderSearch />
          </Box>

          <IconButton
            sx={{ mr: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <Box sx={{ float: 'right' }}>
            <UserBoxButton
              color="secondary"
              ref={ref}
              onClick={() => setOpen(true)}
            >
              <Avatar variant="rounded" alt={user.name} src={user.avatar} />
              <Hidden mdDown>
                <UserBoxText>
                  <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                </UserBoxText>
              </Hidden>
              <Hidden smDown>
                <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
              </Hidden>
            </UserBoxButton>
          </Box>
          <Popover
            anchorEl={ref.current}
            onClose={() => setOpen(false)}
            open={isOpen}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            <MenuUserBox sx={{ minWidth: 210 }} display="flex">
              <Avatar variant="rounded" alt={user.name} src={user.avatar} />
              <UserBoxText sx={{ ml: 1 }}>
                <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                <UserBoxDescription variant="body2">
                  {user.jobtitle}
                </UserBoxDescription>
              </UserBoxText>
            </MenuUserBox>
            <Divider sx={{ mb: 0 }} />

            <Divider />
            <Box sx={{ m: 1, direction: 'rtl' }}>
              <RtlVersion>
                {logData.user || logData.googleData ? (
                  <>
                    <List
                      sx={{ p: 1, direction: 'rtl', textAlign: 'right' }}
                      component="nav"
                    >
                      <ListItem
                        button
                        to="/dashboards/tasks"
                        component={NavLink}
                      >
                        <AccountBoxTwoToneIcon fontSize="small" />
                        <ListItemText primary="داشبورد" />
                      </ListItem>
                    </List>
                    <Button color="error" fullWidth onClick={signOutHandler}>
                      <LockOpenTwoToneIcon sx={{ mr: 1 }} />
                      خروج از حساب کابری
                    </Button>
                  </>
                ) : (
                  <List sx={{ p: 1 }} component="nav">
                    <ListItem
                      button
                      to="/dashboards/tasks"
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                      component={NavLink}
                    >
                      <ListItemText primary="ورود" />
                      <LoginIcon fontSize="small" />
                    </ListItem>
                    <ListItem
                      button
                      to="/signin"
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                      component={NavLink}
                    >
                      <ListItemText primary="ساخت حساب" />
                      <AccountBoxTwoToneIcon fontSize="small" />
                    </ListItem>
                  </List>
                )}
              </RtlVersion>
            </Box>
          </Popover>
        </Box>
      </HeaderWrapper>
    </Fragment>
  );
};

export default Overview_nav;
