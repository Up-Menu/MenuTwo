import React, { Fragment, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  OutlinedInput,
  Typography
} from '@mui/material';

import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Form } from 'antd';


// import requirement icons
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


import { useNavigate } from 'react-router';
import Footer from '../../../shared/Footer';
import { useTypedDispatch } from '../../../store';
import TitleText from '../../../UI/TitleText';


// import counter down requirements
import { Statistic } from 'antd';
import { userSmsVerification } from '../../../store/actions';


const { Countdown } = Statistic;


interface State {

  showSmsVerification: boolean;
  showSmsPanel: boolean;
}

interface FormTypes {
  cellPhone: string;
  smsVerificationCode: string;
}

const SmsPanel = () => {
  const dispatch = useTypedDispatch();
  const nav = useNavigate();
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 10);

  const [values, setValues] = useState<State>({

    showSmsVerification: false,
    showSmsPanel: false
  });

  const handleSmsVerification = () => {
    setValues({
      ...values,
      showSmsVerification: !values.showSmsVerification
    });
  };

  const handleShowSmsPanel = () => {
    setDeadline(Date.now() + 1000 * 10); // Moment is also OK
    setValues({
      ...values,
      showSmsPanel: !values.showSmsPanel
    });
  };


  const onFinish = (values: FormTypes) => {
    dispatch(userSmsVerification({ ...values }, (notification) => notification, nav));
    console.log(values.smsVerificationCode);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Fragment>
      <TitleText header='پنل ارسال پیامک' />
      <Toaster />
      <Container maxWidth='lg'>
        <Box pt={5} pb={5}>

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
                      <Form.Item
                        name='cellPhone'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your confirm password!'
                          }
                        ]}
                      >
                        <FormControl fullWidth required variant='outlined'>
                          <InputLabel htmlFor='outlined-adornment-password'>
                            تلفن همراه
                          </InputLabel>
                          <OutlinedInput
                            onChange={() => setValues({
                              ...values,
                              showSmsPanel: false
                            })}
                            type='tel'
                            endAdornment={
                              <InputAdornment position='end'>

                                {values.showSmsPanel ? (
                                  <IconButton
                                    disabled={true}
                                    onClick={handleShowSmsPanel}
                                    color='success'
                                    edge='end'
                                    size='small'
                                  >
                                    <Countdown format='mm:ss' value={deadline} onFinish={handleShowSmsPanel} />
                                  </IconButton>

                                ) : (
                                  <IconButton
                                    onClick={handleShowSmsPanel}
                                    color='success'
                                    edge='end'
                                    size='small'
                                  >
                                    <Typography variant='h6'
                                    >
                                      ارسال کد
                                    </Typography>
                                  </IconButton>

                                )}
                              </InputAdornment>
                            }
                            label='تلفن همراه'
                          />
                        </FormControl>
                      </Form.Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Form.Item
                        name='smsVerificationCode'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!'
                          }
                        ]}
                      >
                        <FormControl fullWidth required variant='outlined'>
                          <InputLabel htmlFor='outlined-adornment-password'>
                            کد پیامک شده
                          </InputLabel>
                          <OutlinedInput
                            type='number'
                            endAdornment={
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleSmsVerification}
                                  edge='end'
                                  type='submit'
                                  color='success'
                                  disabled={!values.showSmsPanel}

                                >
                                  <Typography color='success' variant='h6'
                                  >
                                    تایید کد
                                  </Typography>
                                </IconButton>
                              </InputAdornment>
                            }
                            label='
                                کد پیامک شده
                              '
                          />
                        </FormControl>
                      </Form.Item>
                    </Grid>
                  </Grid>
                </Form>

              </Box>
            </CardContent>
          </Card>

        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default SmsPanel;