import { useContext, useState, Fragment } from 'react';
import {
  Container,
  Card,
  Box,
  Button,
  TextField,
  styled,
  Grid
} from '@mui/material';

import BottomNav from '../../shared/BottomNav';
import Footer from '../../shared/Footer';
import { Form } from 'antd';

// import Redux requirements
import { userCreateRestaurant } from 'src/store/actions';
import { useTypedDispatch } from 'src/store';

// import notification requirements
import { Toaster } from 'react-hot-toast';

// import icons
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import { LoadingOutlined } from '@ant-design/icons';

// upload requirements
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

// auto image importer
import images from 'src/importer';

// import costume components
import TitleText from '../../UI/TitleText';
import ProgressContext from 'src/contexts/ProgressContext';
import RtlVersion from '../../UI/RtlVersion';

const MyBox = styled(Box)`
  border: 1px solid #cbccd247;
  border-radius: 15px;
  width: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
  const progressContext = useContext(ProgressContext);
  const dispatch = useTypedDispatch();

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
    </div>
  );

  const onFinish = (values: any) => {
    progressContext.onRestaurant(true);
    dispatch(userCreateRestaurant(values, (notification) => notification));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Fragment>
      <TitleText header="ساخت اکانت رستوران" />
      <Toaster />

      <Container maxWidth="lg">
        <Card>
          <Box sx={{ direction: 'rtl', p: 5, m: 2 }}>
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
                  <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Form.Item name="profile">
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
                  </Grid>
                  <Grid item xs={12}>
                    <Form.Item name="restaurantName">
                      <TextField
                        label="نام رستوران"
                        type="text"
                        fullWidth
                        value={''}
                      />
                    </Form.Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Form.Item name="cellPhone">
                      <TextField
                        label="شماره تلفن"
                        type="text"
                        fullWidth
                        value={''}
                      />
                    </Form.Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Form.Item name="email">
                      <TextField
                        label="ایمیل"
                        type="text"
                        fullWidth
                        value={''}
                      />
                    </Form.Item>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Form.Item name="website">
                      <TextField
                        label="لینک سایت رستوران"
                        type="text"
                        fullWidth
                        value={''}
                      />
                    </Form.Item>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Form.Item name="social">
                      <TextField
                        label="آیدی اینستاگرام"
                        type="text"
                        fullWidth
                        value={''}
                      />
                    </Form.Item>
                  </Grid>

                  <Grid item xs={12}>
                    <Form.Item name="address">
                      <TextField
                        label="نشانی"
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
                        type="submit"
                        size="large"
                        variant="outlined"
                        sx={{ padding: 1 }}
                        endIcon={<DownloadDoneIcon />}
                        color="success"
                      >
                        ذخیره
                      </Button>
                    </Form.Item>
                  </Grid>
                </Grid>
              </Form>
            </RtlVersion>
          </Box>
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
