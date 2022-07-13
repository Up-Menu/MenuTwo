import { Helmet } from 'react-helmet-async';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  Typography,
  Checkbox,
  Box,
  Button,
  OutlinedInput,
  CardContent
} from '@mui/material';
import { Link, NavLink as RouterLink } from 'react-router-dom';
import Footer from 'src/shared/Footer';
import TextField from '@mui/material/TextField';
import { pink } from '@mui/material/colors';
import { Form } from 'antd';
import { userLogin } from 'src/store/actions';
import { useTypedDispatch } from 'src/store';
import { Toaster } from 'react-hot-toast';
import { SSO } from './GoogleSSO';
import LoginIcon from '@mui/icons-material/Login';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TitleText from '../UI/TitleText';
import RtlVersion from '../theme/RtlVersion';
// import ReCAPTCHA from 'react-google-recaptcha';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// const faPropIcon = faGoogle as IconProp
interface State {
  password: string;
  showPassword: boolean;
}

const recaptchaRef: any = React.createRef();

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Login = () => {
  const dispatch = useTypedDispatch();

  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onFinish = (values: any) => {
    // const captcha = recaptchaRef.current.execute();
    dispatch(userLogin({ ...values }, (notification) => notification));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <TitleText header="صفحه ورود" />
      <Toaster />
      <Container maxWidth="lg">
        <Box pt={5} sx={{ direction: 'rtl' }}>
          <Card>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <CardHeader title="فرم لاگین" />
              <Link to="/">
                <CardHeader title="برو به خانه" />
              </Link>
            </Box>
            <Divider />
            <CardContent>
              <Box sx={{ p: 5, m: 2 }}>
                <RtlVersion>
                  <Form
                    name="basic"
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Form.Item name="email">
                          <TextField
                            label="نام کاربری"
                            type="text"
                            fullWidth
                            value={''}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your password!'
                            }
                          ]}
                        >
                          <FormControl fullWidth required variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                              کلمه عبور
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={values.showPassword ? 'text' : 'password'}
                              value={values.password}
                              onChange={handleChange('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {values.showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="کلمه عبور"
                            />
                          </FormControl>
                        </Form.Item>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: 'flex',
                          flexDirection: 'row-reverse',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          wrapperCol={{ offset: 8, span: 16 }}
                        >
                          <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                              color: pink[800],
                              '&.Mui-checked': {
                                color: pink[600]
                              }
                            }}
                          />
                        </Form.Item>
                        <span>مرا به خاطر بسپار</span>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Typography
                          variant="h6"
                          component={RouterLink}
                          to="/signin"
                        >
                          چرا همین الآن ثبت نام نمیکنی؟
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          alignItems: 'center'
                        }}
                      >
                        <Box pr={2}>
                          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button
                              type="submit"
                              size="large"
                              variant="outlined"
                              sx={{ padding: 1 }}
                              endIcon={<LockOpenIcon />}
                              color="success"
                            >
                              ورود به سامانه
                            </Button>
                          </Form.Item>
                        </Box>
                        <Divider orientation="vertical" flexItem></Divider>

                        <Box pt={0.5} pl={2}>
                          <SSO />
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                </RtlVersion>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Footer />
      {/* <Toaster />
      <Helmet>
        <title>LogIn page</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box pt={17}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <Box
                  justifyContent="space-between"
                  flexDirection="row"
                  display="flex"
                  textAlign="center"
                >
                  <Link to="/">
                    <CardHeader title="Go home!" />
                  </Link>
                  <CardHeader title="Log-In Page" />
                </Box>
                <Divider />
                <Typography variant="h3" pt={2} pb={2} />

                <Box flexDirection="column" display="flex" textAlign="center">
                  <Form
                    name="basic"
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      textAlign="center"
                      justifyContent="center"
                      pt={1}
                      pb={1}
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!'
                          }
                        ]}
                        style={{ paddingRight: '10px' }}
                      >
                        <TextField required label="Username" type="text" />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!'
                          }
                        ]}
                        style={{ paddingRight: '10px' }}
                      >
                        <FormControl required variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                        </FormControl>
                      </Form.Item>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      justifyContent="center"
                      alignItems="baseline"
                      textAlign="center"
                    >
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                      >
                        <Checkbox
                          {...label}
                          defaultChecked
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600]
                            }
                          }}
                        />
                      </Form.Item>
                      <span>Remember me:</span>
                    </Box>
                    <Typography
                      variant="h6"
                      component={RouterLink}
                      to="/signin"
                    >
                      Oops I do not have an account!
                    </Typography>

                    {/* <Box
                      pb={2}
                      pt={1}
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                    >
                      <ReCAPTCHA
                        // size="invisible"
                        ref={recaptchaRef}
                        sitekey="6Leh7NMgAAAAAPZfD_ISYsYYTgyrXLEbOVMCjz8S"
                        // onChange={onChange}
                      />
                    </Box> */}
      {/* <Box
                      pb={2}
                      pt={1}
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                    >
                      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Box pr={2}>
                          <Button
                            size="medium"
                            endIcon={<LoginIcon />}
                            variant="outlined"
                            type="submit"
                          >
                            Login
                          </Button>
                        </Box>
                      </Form.Item>

                      <Divider orientation="vertical" flexItem></Divider>

                      <Box pt={0.5} pl={1}>
                        <SSO />
                      </Box>
                    </Box>
                  </Form>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer /> */}
    </>
  );
};

export default Login;
