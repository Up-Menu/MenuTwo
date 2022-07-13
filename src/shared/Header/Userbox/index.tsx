import { useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import { useTypedDispatch } from 'src/store';
import { userLogout } from 'src/store/actions';
import { useTypedSelector } from 'src/store';
import images from 'src/widgets/importer';

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

function HeaderUserbox() {
  const logData: any = useTypedSelector((state) => state);
  const user = {
    name: logData.googleData.payload
      ? `${logData.googleData.payload.firstName} ${logData.googleData.payload.lastName}`
      : 'کاربر سپند',
    avatar: logData.googleData.payload
      ? logData.googleData.payload.profile
      : images['avatars/profile_default.png'],
    jobtitle: 'سطح نقره ای'
  };
  const dispatch = useTypedDispatch();

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

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ mr: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
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
          <Box pl={3}>
            <UserBoxText>
              <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
              <UserBoxDescription variant="body2">
                {user.jobtitle}
              </UserBoxDescription>
            </UserBoxText>
          </Box>
        </MenuUserBox>
        {/*<Divider sx={{ mb: 0 }} />*/}
        {/*<List sx={{ p: 1 }} component="nav">*/}
        {/*  <ListItem button to="/management/profile/details" component={NavLink}>*/}
        {/*    <AccountBoxTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="My Profile" />*/}
        {/*  </ListItem>*/}
        {/*  <ListItem button to="/dashboards/messenger" component={NavLink}>*/}
        {/*    <InboxTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="Messenger" />*/}
        {/*  </ListItem>*/}
        {/*  <ListItem*/}
        {/*    button*/}
        {/*    to="/management/profile/settings"*/}
        {/*    component={NavLink}*/}
        {/*  >*/}
        {/*    <AccountTreeTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="Account Settings" />*/}
        {/*  </ListItem>*/}
        {/*</List>*/}
        {/*<Divider />*/}
        <Box sx={{ m: 1 }}>
          <Button color="error" fullWidth onClick={signOutHandler}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
              خروج از حساب کاربری
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;