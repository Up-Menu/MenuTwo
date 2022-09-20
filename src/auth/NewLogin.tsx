import {
  Container,
  Grid,
  Box,
  Typography,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Button
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './FormInput';
import styled from '@emotion/styled';
import TitleText from 'src/UI/TitleText';
import RtlVersion from 'src/theme/RtlVersion';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InputComponent from 'src/components/InputComponent';
// 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

// 👇 Styled Material UI Link Component
export const OauthMuiLink = styled(MuiLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
  border-radius: 1;
  padding: 0.6rem 0;
  column-gap: 1rem;
  text-decoration: none;
  color: #393e45;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
  }
`;

// 👇 Login Schema with Zod
const loginSchema = object({
  email: string().min(1, 'فیلد ایمیل ضروریست!').email('فیلد ایمیل ضروریست!'),
  password: string()
    .min(1, 'فیلد پسورد نمیتواند خالی باشد!')
    .min(8, 'پسورد باید بیشتر از ۸ حرف باشد!')
    .max(32, 'پسورد باید کمتر از ۳۲ کاراکتر باشد!'),
  persistUser: literal(true).optional()
});

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const NewLogin: FC = () => {
  // 👇 Default Values
  const defaultValues: ILogin = {
    email: '',
    password: ''
  };

  // 👇 The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues
  });

  // 👇 Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values);
  };

  // 👇 JSX to be rendered
  return (
    <>
      <TitleText header="صفحه ورود" />
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

            {/* blur back */}
            <CardContent>
              <Box sx={{ p: 5, m: 2 }}>
                <RtlVersion>
                  <FormProvider {...methods}>
                    <Grid container sx={{}}>
                      <Grid
                        item
                        container
                        justifyContent="space-between"
                        rowSpacing={5}
                        sx={{
                          maxWidth: { sm: '45rem' },
                          marginInline: 'auto'
                        }}
                      >
                        <Grid item xs={12} sm={6} sx={{}}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{}}
                            onSubmit={methods.handleSubmit(onSubmitHandler)}
                          >
                            <Typography
                              variant="h6"
                              component="h1"
                              sx={{ textAlign: 'center', mb: '1.5rem' }}
                            >
                              ورود به حساب کاربری
                            </Typography>

                            <InputComponent
                              label="نام کاربری"
                              type="email"
                              name="email"
                              required
                            />

                            <InputComponent
                              type="password"
                              label="کلمه عبور"
                              name="password"
                              required
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="small"
                                  aria-label="trust this device checkbox"
                                  required
                                  {...methods.register('persistUser')}
                                />
                              }
                              label={
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontSize: '0.8rem',
                                    fontWeight: 400,
                                    color: '#8C7CF0'
                                  }}
                                >
                                  مرا به خاطر بسپار
                                </Typography>
                              }
                            />

                            <LoadingButton
                              loading={false}
                              type="submit"
                              variant="contained"
                              sx={{
                                py: '0.8rem',
                                mt: 2,
                                width: '80%',
                                marginInline: 'auto'
                              }}
                            >
                              ورود
                            </LoadingButton>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant="h6"
                            component="p"
                            sx={{
                              paddingLeft: { sm: '3rem' },
                              mb: '1.5rem',
                              textAlign: ''
                            }}
                          ></Typography>
                          <Box
                            display="flex"
                            flexDirection="column"
                            sx={{ paddingLeft: { sm: '3rem' }, rowGap: '1rem' }}
                          >
                            <Box display="flex" flexDirection="row">
                              <Button sx={{ margin: 1 }} color="primary">
                                <GoogleIcon />
                              </Button>

                              <Button sx={{ margin: 1 }} color="primary">
                                <GitHubIcon />
                              </Button>
                              <Button sx={{ margin: 1 }} color="primary">
                                <FacebookIcon />
                              </Button>
                            </Box>

                            <Link to="/register">
                              <LoadingButton
                                loading={false}
                                type="submit"
                                variant="contained"
                                sx={{
                                  py: '0.8rem',
                                  mt: 2,
                                  width: '80%',
                                  marginInline: 'auto'
                                }}
                              >
                                افتتاح حساب
                              </LoadingButton>
                            </Link>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container justifyContent="center"></Grid>
                    </Grid>
                  </FormProvider>
                </RtlVersion>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default NewLogin;
