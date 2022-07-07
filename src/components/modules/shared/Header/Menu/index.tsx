// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem
// } from '@mui/material';
// import { useRef, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

import { Alert, Box, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useTypedSelector } from 'src/store';

// const ListWrapper = styled(Box)(
//   ({ theme }) => `
//         .MuiTouchRipple-root {
//             display: none;
//         }

//         .MuiListItem-root {
//             transition: ${theme.transitions.create(['color', 'fill'])};

//             &.MuiListItem-indicators {
//                 padding: ${theme.spacing(1, 2)};

//                 .MuiListItemText-root {
//                     .MuiTypography-root {
//                         &:before {
//                             height: 4px;
//                             width: 22px;
//                             opacity: 0;
//                             visibility: hidden;
//                             display: block;
//                             position: absolute;
//                             bottom: -10px;
//                             transition: all .2s;
//                             border-radius: ${theme.general.borderRadiusLg};
//                             content: "";
//                             background: ${theme.colors.primary.main};
//                         }
//                     }
//                 }

//                 &.active,
//                 &:active,
//                 &:hover {

//                     background: transparent;

//                     .MuiListItemText-root {
//                         .MuiTypography-root {
//                             &:before {
//                                 opacity: 1;
//                                 visibility: visible;
//                                 bottom: 0px;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
// `
// );

function HeaderMenu() {
  const [flag, setFlag] = useState(true);
  // const ref = useRef<any>(null);
  // const [isOpen, setOpen] = useState<boolean>(false);

  // const handleOpen = (): void => {
  //   setOpen(true);
  // };

  // const handleClose = (): void => {
  //   setOpen(false);
  // };
  const logData: any = useTypedSelector((state) => state);
  setTimeout(() => {
    setFlag(false);
  }, 604800000);

  const MyAlert = styled(Alert)`
    border: ${flag ? '1px solid green' : '1px solid #ff00009d'};
  `;
  return (
    <>
      {flag ? (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <MyAlert severity="success">
            <Typography color="rgb(187,233,166)">
              {' '}
              Free trial, enjoy it!
            </Typography>
          </MyAlert>
        </Stack>
      ) : (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <MyAlert severity="error">
            <Typography color="red">
              {' '}
              Your 7 days free package has ended, please update your account!
            </Typography>
          </MyAlert>
        </Stack>
      )}

      {/* <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Buttons"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/components/forms"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Forms"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Others
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/overview">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
          Modals
        </MenuItem>
      </Menu> */}
    </>
  );
}

export default HeaderMenu;
