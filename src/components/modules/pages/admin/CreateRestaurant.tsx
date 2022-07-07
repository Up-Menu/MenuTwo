import React, { useState } from 'react';
import { Container, Card, Box, Button } from '@mui/material';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import BottomNav from '../../shared/BottomNav';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import Footer from '../../shared/Footer';

import { LoadingOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import { OutlinedInput } from '@mui/material';

import TextField from '@mui/material/TextField';

import styled from 'styled-components';
import { Form } from 'antd';

import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import images from 'src/importer';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const MyOutlinedInput = styled(OutlinedInput)`
  width: 347px;
`;
const My_OutlinedInput = styled(OutlinedInput)`
  width: 310px;
`;
const MyBox = styled(Box)`
  border: 1px solid #fff;
  border-radius: 15px;
  width: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const MyResOutlinedInput = styled(OutlinedInput)`
  width: 669px;
`;
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <img width={80} src={images['avatars/profile_default.png']} />
      )}
      {/* <div style={{ marginTop: 8 }}>Upload</div> */}
    </div>
  );

  const onFinish = (values: any) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Create restaurant</title>
      </Helmet>

      <Container maxWidth="lg">
        <Card>
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
              flexDirection="column"
              alignContent="center"
              flexWrap="wrap"
              alignItems="stretch"
            >
              <Box pb={4} pt={3} display="flex" justifyContent="center">
                <Form.Item
                  name="profile"
                  rules={[
                    {
                      message: 'Please input your profile!'
                    }
                  ]}
                  style={{ paddingRight: '10px' }}
                >
                  <MyBox>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{ width: '100%' }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </MyBox>
                </Form.Item>
              </Box>

              <Box display="flex" flexDirection="row" pt={2}>
                <Form.Item
                  name="restaurantName"
                  rules={[
                    {
                      message: 'Please input your restaurant name!'
                    }
                  ]}
                >
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Restaurant name
                    </InputLabel>
                    <MyResOutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            <RestaurantIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Restaurant name"
                    />
                  </FormControl>
                </Form.Item>
              </Box>

              <Box display="flex" flexDirection="row" pt={2}>
                <Form.Item
                  name="cellPhone"
                  rules={[
                    {
                      message: 'Please input your phone number!'
                    }
                  ]}
                  style={{ paddingRight: '10px' }}
                >
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Phone
                    </InputLabel>
                    <MyOutlinedInput
                      id="outlined-adornment-password"
                      type="tel"
                      startAdornment={
                        <InputAdornment position="start">021</InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            <PhoneAndroidIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Phone"
                    />
                  </FormControl>
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ message: 'Please input your email!' }]}
                >
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Email
                    </InputLabel>
                    <My_OutlinedInput
                      id="outlined-adornment-password"
                      type="email"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            <EmailIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Email"
                    />
                  </FormControl>
                </Form.Item>
              </Box>

              <Box display="flex" flexDirection="row" pt={2}>
                <Form.Item
                  name="website"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your website!'
                    }
                  ]}
                  style={{ paddingRight: '10px' }}
                >
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Website
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      startAdornment={
                        <InputAdornment position="start">
                          https://
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            <LanguageIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Website"
                    />
                  </FormControl>
                </Form.Item>

                <Form.Item
                  name="social"
                  rules={[{ message: 'Please input your social!' }]}
                >
                  <FormControl variant="outlined">
                    <InputLabel>Instagram ID</InputLabel>
                    <OutlinedInput
                      type="text"
                      startAdornment={
                        <InputAdornment position="start">@</InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end">
                            <InstagramIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Instagram ID"
                    />
                  </FormControl>
                </Form.Item>
              </Box>

              <Box pt={2}>
                <Form.Item
                  name="address"
                  rules={[{ message: 'Please input your address!' }]}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    value={''}
                    fullWidth
                    rows={7}
                  />
                </Form.Item>
              </Box>

              <Box pt={2} pb={2} display="flex" justifyContent="center">
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="submit"
                    size="large"
                    variant="outlined"
                    sx={{ padding: 1 }}
                    startIcon={<DownloadDoneIcon />}
                  >
                    Submit data
                  </Button>
                </Form.Item>
              </Box>
            </Box>
          </Form>
        </Card>

        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="delivery"
          backLink="finish"
          forText="Add delivery zone"
          backText="Finish installation"
        />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default CreateAccount;
