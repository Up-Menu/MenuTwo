import { Helmet } from 'react-helmet-async';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  Typography,
  Checkbox,
  Box
} from '@mui/material';
import Footer from 'src/components/Footer';
import TextField from '@mui/material/TextField';
import { pink } from '@mui/material/colors';
import styled from 'styled-components';
import { Button, Form } from 'antd';
import { userSignIn } from 'src/store/actions';
import { useTypedDispatch } from 'src/store';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const MyButton = styled(Button)`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 10px;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(140, 124, 240, 0.5);
  color: #8c7cf0;
  font-weight: bold;
  text-transform: none;
  padding-left: 16px;
  padding-right: 16px;
  padding: 8px 20px;
  margin: 9px;
  &:hover {
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: rgba(140, 124, 240, 0.1);
    border: 1px solid #8c7cf0;
  }
`;

/**
 * * if user sign up with out google sso, please put this image to verify profile photo
 * ? <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
 */

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SignIn = () => {
  const dispatch = useTypedDispatch();
  const nav = useNavigate();

  const onFinish = (values: any) => {
    dispatch(userSignIn({ ...values }, (notification) => notification, nav));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Toaster />
      <Helmet>
        <title>SignIn page</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          pt={5}
        >
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <Card>
              <Box
                justifyContent="space-between"
                flexDirection="row"
                display="flex"
                textAlign="center"
              >
                <Link to="/login">
                  <CardHeader title="Are you ready have account?" />
                </Link>
                <CardHeader title="Log-In Page" />
              </Box>
              <Divider />
              <Typography variant="h3" pt={2} pb={2} />

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
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your firstname!'
                      }
                    ]}
                    style={{ paddingRight: '10px' }}
                  >
                    <TextField required label="Firstname" />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    rules={[
                      { required: true, message: 'Please input your Lastname!' }
                    ]}
                  >
                    <TextField required label="Lastname" />
                  </Form.Item>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  textAlign="center"
                  justifyContent="center"
                  pt={1}
                  pb={1}
                >
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone password!'
                      }
                    ]}
                    style={{ paddingRight: '10px' }}
                  >
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your confirm password!'
                      }
                    ]}
                  >
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Confirm Password"
                      type="password"
                    />
                  </Form.Item>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  textAlign="center"
                  justifyContent="center"
                  pt={1}
                  pb={1}
                >
                  <Form.Item
                    name="cellPhone"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!'
                      }
                    ]}
                    style={{ paddingRight: '10px' }}
                  >
                    <TextField required label="Phone Number" type="tel" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Please input your email!' }
                    ]}
                    style={{ paddingRight: '10px' }}
                  >
                    <TextField required label="Email" type="email" />
                  </Form.Item>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  textAlign="center"
                  justifyContent="center"
                  pt={1}
                  pb={1}
                >
                  <Form.Item
                    name="address"
                    rules={[
                      { required: true, message: 'Please input your address!' }
                    ]}
                  >
                    <TextField required label="Address" />
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
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <MyButton type="primary" htmlType="submit">
                    Submit
                  </MyButton>
                </Form.Item>
              </Form>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
