import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
// import { useTypedDispatch } from 'src/store';
// import { userGoogleLogIn } from 'src/store/actions';
// import { useNavigate } from 'react-router';

declare let google: any;

export const SSO = () => {
  // const dispatch = useTypedDispatch();
  // const nav = useNavigate();
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
    // dispatch(userGoogleLogIn(userData, (notification) => notification, nav));
    console.log(userData);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '901720212338-h3afddsalov3ujsieft24k7148jes3dd.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    createButton();
  }, []);

  return (
    <>
      <button id="singInDiv" />
    </>
  );
};
function createButton() {
  google.accounts.id.renderButton(document.getElementById('singInDiv'), {
    size: 'large',
    scope: 'https://www.googleapis.com/auth/plus.login',
    width: 200,
    height: 50,
    longtitle: false,
    theme: 'dark',
    shape: 'circle'
  });
}
