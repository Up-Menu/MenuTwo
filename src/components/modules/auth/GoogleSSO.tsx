import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useTypedDispatch } from 'src/store';
import { userGoogleLogIn } from 'src/store/actions';
import { Button, IconButton, styled } from '@mui/material';
import { useNavigate } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

declare let google: any;

export const SSO = () => {
  const dispatch = useTypedDispatch();
  const nav = useNavigate();
  function handleCallbackResponse(response: any) {
    let userObj: any = jwt_decode(response.credential);
    const userData: object = {
      email: userObj.email,
      password: '000000',
      confirmPassword: '000000',
      firstName: userObj.given_name,
      lastName: userObj.family_name,
      address: 'googleSSO',
      cellPhone: 'googleSSO',
      profile: userObj.picture
    };
    dispatch(userGoogleLogIn(userData, (notification) => notification, nav));
    // console.log( userData )
  }

  const googleSSO = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(google);
    return;
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '901720212338-h3afddsalov3ujsieft24k7148jes3dd.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(document.getElementById('singInDiv'), {
      theme: 'outline',
      size: 'large',
      type: 'icon',
      shape: 'circle'
    });
  }, []);

  return (
    <>
      {/* <IconButton id="singInDiv" /> */}
      <IconButton sx={{ ml: 1, mb: 0.5 }} onClick={googleSSO} color="primary">
        <GoogleIcon />
      </IconButton>

      {/* <IconButton sx={{ ml: 1, mb: 0.5 }} onClick={googleSSO} color="primary">
        <GitHubIcon />
      </IconButton>
      <IconButton sx={{ ml: 1, mb: 0.5 }} onClick={googleSSO} color="primary">
        <FacebookIcon />
      </IconButton> */}
    </>
  );
};
