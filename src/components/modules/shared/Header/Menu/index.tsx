import { Alert, Box, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';
// import { useTypedSelector } from 'src/store';

function HeaderMenu() {
  const [flag, setFlag] = useState(true);

  // const logData: any = useTypedSelector((state) => state);
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
            <Typography color="rgb(187,233,166)"> خوش آمدید!</Typography>
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
    </>
  );
}

export default HeaderMenu;
