// import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'src/router/router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import './assets/styles/css/costume.css';
import { useTypedSelector } from './store';
// import NetworkChecker from './widgets/NetworkChecker';
// import toast from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';
import AutoLogout from './widgets/AutoLogout';

// function getFaviconEl() {
//   return document.getElementById('favicon')! as HTMLLinkElement;
// }

function App() {
  const logData: any = useTypedSelector((state) => state);
  const router: any = routes([logData.user, logData.googleData]);
  const content = useRoutes(router);
  // const isOnline = NetworkChecker();

  // useEffect(() => {
  //   if (isOnline) {
  //     const favicon = getFaviconEl(); // Accessing favicon element
  //     favicon.href = './favicon.ico';
  //   } else {
  //     const favicon = getFaviconEl(); // Accessing favicon element
  //     favicon.href = 'Error.svg';
  //     toast.error('!دسترسی اینترنت شما قطع شده است');
  //   }
  // }, [isOnline]);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <Toaster /> */}
        <CssBaseline />
        <AutoLogout>{content}</AutoLogout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
