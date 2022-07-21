import { ChangeEvent, MouseEvent, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  Box,
  OutlinedInput,
  Button,
  CardContent
} from '@mui/material';
import Footer from 'src/shared/Footer';
import TextField from '@mui/material/TextField';

import { Form } from 'antd';
import { userRegister } from 'src/store/actions';
import { useTypedDispatch } from 'src/store';

import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TitleText from '../UI/TitleText';
// import icons
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import RtlVersion from '../theme/RtlVersion';

import { Link } from 'react-router-dom';

interface State {
  password: string;
  confPassword: string;
  showPassword: boolean;
  showConfPassword: boolean;
}

const Register = () => {
  const dispatch = useTypedDispatch();
  const nav = useNavigate();

  const [values, setValues] = useState<State>({
    password: '',
    confPassword: '',
    showPassword: false,
    showConfPassword: false
  });
  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleConfChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleClickShowConfPassword = () => {
    setValues({
      ...values,
      showConfPassword: !values.showConfPassword
    });
  };

  const handleMouseDownPassword = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfPassword = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onFinish = (values: any) => {
    dispatch(userRegister({ ...values }, (notification) => notification, nav));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <TitleText header='صفحه ثبت نام' />
      <Toaster />
      <Container maxWidth='lg'>
        <Box pt={5} sx={{ direction: 'rtl' }}>
          <Card>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
            >
              <CardHeader title='فرم ثبت نام' />
              <Link to='/dashboards/tasks'>
                <CardHeader title='قبلا ثبت نام کردم' />
              </Link>
            </Box>
            <Divider />
            <CardContent>
              <Box sx={{ p: 5, m: 2 }}>
                <RtlVersion>
                  <Form
                    name='basic'
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='on'
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Form.Item name='firstName'>
                          <TextField
                            label='نام'
                            type='text'
                            fullWidth
                            value={''}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item name='lastName'>
                          <TextField
                            label='نام خانوادگی'
                            type='text'
                            fullWidth
                            value={''}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Form.Item name='email'>
                          <TextField
                            label='ایمیل'
                            type='text'
                            fullWidth
                            value={''}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item
                          name='password'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your password!'
                            }
                          ]}
                        >
                          <FormControl fullWidth required variant='outlined'>
                            <InputLabel htmlFor='outlined-adornment-password'>
                              کلمه عبور
                            </InputLabel>
                            <OutlinedInput
                              id='outlined-adornment-password'
                              type={values.showPassword ? 'text' : 'password'}
                              value={values.password}
                              onChange={handleChange('password')}
                              endAdornment={
                                <InputAdornment position='end'>
                                  <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                  >
                                    {values.showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label='کلمه عبور'
                            />
                          </FormControl>
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Form.Item
                          name='confirmPassword'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your confirm password!'
                            }
                          ]}
                        >
                          <FormControl fullWidth required variant='outlined'>
                            <InputLabel htmlFor='outlined-adornment-password'>
                              تایید کلمه عبور
                            </InputLabel>
                            <OutlinedInput
                              id='outlined-adornment-password'
                              type={
                                values.showConfPassword ? 'text' : 'password'
                              }
                              value={values.confPassword}
                              onChange={handleConfChange('confPassword')}
                              endAdornment={
                                <InputAdornment position='end'>
                                  <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowConfPassword}
                                    onMouseDown={handleMouseDownConfPassword}
                                    edge='end'
                                  >
                                    {values.showConfPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label='تایید کلمه عبور'
                            />
                          </FormControl>
                        </Form.Item>
                      </Grid>


                      <Grid item xs={12}>
                        <Form.Item name='address'>
                          <TextField
                            label='نشانی'
                            multiline
                            value={''}
                            fullWidth
                            rows={7}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button
                            type='submit'
                            size='large'
                            variant='outlined'
                            sx={{ padding: 1 }}
                            endIcon={<VerifiedUserIcon />}
                            color='success'
                          >
                            ثبت نام
                          </Button>
                        </Form.Item>
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
    </>
  );
};

export default Register;
