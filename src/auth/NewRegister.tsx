import {
  Container,
  Grid,
  Box,
  Link as MuiLink,
  CardHeader,
  Divider,
  CardContent,
  Card
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from '@emotion/styled';
import TitleText from 'src/UI/TitleText';
import RtlVersion from 'src/theme/RtlVersion';
import InputComponent from 'src/components/InputComponent';
import { IRegisterForm } from './Auth';

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

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

const loginSchema = object({
  email: string().min(1, 'فیلد ایمیل ضروریست!').email('ایمیل مورد تایید نیست!'),
  password: string()
    .min(1, 'فیلد پسورد نمیتواند خالی باشد!')
    .min(8, 'پسورد باید بیشتر از ۸ حرف باشد!')
    .max(32, 'پسورد باید کمتر از ۳۲ کاراکتر باشد!'),
  confirmPassword: string().min(1, 'پر کردن فیلد تایید پسورد الزامیست!'),
  firstname: string().min(1, 'پر کردن فیلد نام الزامیست!'),
  lastname: string().min(1, 'پر کردن فیلد نام خانوادگی الزامیست!'),
  address: string().min(1, 'پر کردن فیلد نشانی ضروریست!')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'کلمه عبور مغایرت دارد!',
  path: ['confirmPassword']
});

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const NewLogin: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const defaultValues: ILogin = {
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    confirmPassword: '',
    address: ''
  };

  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    setLoading(true);
    const sendFields: IRegisterForm = {
      address: values.address,
      email: values.email,
      firstname: values.firstname,
      lastname: values.lastname,
      password: values.password
    };

    setTimeout(() => {
      console.log(sendFields);
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      <TitleText header="صفحه افتتاح حساب" />
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
                            autoComplete="on"
                            sx={{ mr: 2 }}
                            onSubmit={methods.handleSubmit(onSubmitHandler)}
                          >
                            <InputComponent
                              type="text"
                              label="نام"
                              name="firstname"
                              required
                            />

                            <InputComponent
                              type="password"
                              label="کلمه عبور"
                              name="password"
                              required
                            />
                            <InputComponent
                              type="text"
                              label="نشانی"
                              name="address"
                              required
                            />

                            <LoadingButton
                              loading={loading}
                              type="submit"
                              variant="contained"
                              sx={{
                                py: '0.8rem',
                                mt: 2,
                                width: '100%',
                                marginInline: 'auto'
                              }}
                            >
                              ورود
                            </LoadingButton>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputComponent
                            type="text"
                            label="نام خانوادگی"
                            name="lastname"
                            required
                          />
                          <InputComponent
                            label="تایید کلمه عبور"
                            type="password"
                            name="confirmPassword"
                            required
                          />
                          <InputComponent
                            label="ایمیل"
                            type="email"
                            name="email"
                            required
                          />
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
