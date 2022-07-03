import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'src/router/router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import './assets/styles/css/costume.css';
import { useTypedSelector } from './store';
import NetworkChecker from './components/modules/NetworkChecker';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import AutoLogout from './components/modules/auth/AutoLogout';
import CookieConsent from 'react-cookie-consent';

function getFaviconEl() {
  return document.getElementById('favicon')! as HTMLLinkElement;
}

function App() {
  const logData: any = useTypedSelector((state) => state);
  const router: any = routes(logData.user);
  const content = useRoutes(router);
  const isOnline = NetworkChecker();
  console.log(logData.googleData);

  useEffect(() => {
    if (isOnline) {
      const favicon = getFaviconEl(); // Accessing favicon element
      favicon.href = './favicon.ico';
    } else {
      const favicon = getFaviconEl(); // Accessing favicon element
      favicon.href = 'Error.svg';
      toast.error('!دسترسی اینترنت شما قطع شده است');
    }
  }, [isOnline]);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Toaster />
        <CssBaseline />
        <AutoLogout>{content}</AutoLogout>
      </LocalizationProvider>

      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies!"
        cookieName="myAwesomeCookieName2"
        style={{
          background: 'rgba(17, 22, 51, 0.95)',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          borderTop: '1px solid #9ea4c178',
          borderRight: '1px solid #9ea4c178',
          borderLeft: '1px solid #9ea4c178'
        }}
        buttonStyle={{
          backgroundColor: 'rgba(140, 124, 240, 0.1)',
          color: '#9EA4C1',
          fontSize: '13px',
          minWidth: '64px',
          padding: '9px 20px',
          borderRadius: '10px'
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{' '}
      </CookieConsent>
    </ThemeProvider>
  );
}
export default App;
