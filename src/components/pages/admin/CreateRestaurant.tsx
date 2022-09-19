import { useContext, useState, Fragment, useEffect } from 'react';
import {
  Container,
  Card,
  Box,
  Button,
  TextField,
  styled,
  Grid,
  InputLabel,
  MenuItem,
  FormControl
} from '@mui/material';

import BottomNav from '../../../shared/BottomNav';
import Footer from '../../../shared/Footer';
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
import images from 'src/widgets/importer';

// import costume components
import TitleText from '../../../UI/TitleText';
import ProgressContext from 'src/context/ProgressContext';
import RtlVersion from '../../../theme/RtlVersion';
import { GetUserRestaurant } from 'src/connections/Req';


interface existingUserType {
  address: string;
  cellPhone: string;
  email: string;
  profile: string;
  restaurantName: string;
  social: string;
  website: string;
}

const MyBox = styled(Box)`
  @media (min-width: 480px) {
    margin: 0 18px;
  }
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
  let globalUser: existingUserType = {
    address: null,
    cellPhone: null,
    email: null,
    profile: null,
    restaurantName: null,
    social: null,
    website: null
  };

  const userID: String = JSON.parse(localStorage.getItem('user_data')).payload
    .userId;
  const [globalUserState, setGlobalUserState] = useState(globalUser);
  const progressContext = useContext(ProgressContext);
  const dispatch = useTypedDispatch();

  // upload profile
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  useEffect(() => {
    GetUserRestaurant(userID, (restaurantData) => {
      if (restaurantData.data.data.restaurant.length == 0) {
        setGlobalUserState({
          address: 'string',
          cellPhone: 'string',
          email: 'string',
          profile: 'string',
          restaurantName: 'string',
          social: 'string',
          website: 'string'
        });
      } else {
        setGlobalUserState({
          address: restaurantData.data.data.restaurant[0].address,
          cellPhone: restaurantData.data.data.restaurant[0].cellPhone,
          email: restaurantData.data.data.restaurant[0].email,
          profile: restaurantData.data.data.restaurant[0].profile,
          restaurantName: restaurantData.data.data.restaurant[0].restaurantName,
          social: restaurantData.data.data.restaurant[0].social,
          website: restaurantData.data.data.restaurant[0].website
        });
      }
    });
  }, []);

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <img width={80} src={images['avatars/profile_default.png']} alt='' />
      )}
    </div>
  );

  const onFinish = (values: any) => {
    progressContext.onRestaurant(true);
    console.log({
      ...values,
      profile:`${values.profile.file.name}`,
      userId: userID
    });
    dispatch(
      userCreateRestaurant(
        {
          ...values,
          profile:`${values.profile.file.name}`,
          userId: userID
        },
        (notification) => notification
      )
    ).then(() => {
    });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  if (globalUserState.restaurantName === null) {
    return;
  } else if (globalUserState.restaurantName === 'string') {
    return (
      <Fragment>
        <Toaster />
        <TitleText header='ساخت اکانت رستوران' />
        <Container maxWidth='lg'>
          <Box p={1}>
            <Card>
              <MyBox sx={{ direction: 'rtl', p: 2 }}>
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
                      <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Form.Item name='profile'>
                          <Upload
                            name='avatar'
                            listType='picture-card'
                            className='avatar-uploader'
                            showUploadList={false}
                            action='https://upmenu.sepandpay.ir/swagger/index.html'
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                          >
                            {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
                          </Upload>
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Form.Item name='restaurantName'>
                          <TextField
                            label='نام رستوران'
                            type='text'
                            fullWidth
                            id='outlined-required'
                            defaultValue={''}
                            value={''}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item
                          hasFeedback
                          validateStatus='validating'
                          rules={[
                            {
                              required: true,
                              message: 'شماره مورد قبول نیست!',
                              pattern: /(^(\+98|0)?\d{10}$)/i
                            }
                          ]}
                          name='cellPhone'>
                          <TextField
                            label='شماره تلفن'
                            type='text'
                            fullWidth
                            defaultValue={''}
                            value={''}
                          />
                        </Form.Item>

                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item
                          hasFeedback
                          validateStatus='validating'
                          name='email'
                          rules={[
                            {
                              required: true,
                              message: 'ایمیل مورد قبول نیست!',
                              pattern: /(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i
                            }
                          ]}
                        >
                          <TextField
                            label='ایمیل'
                            type='text'
                            fullWidth
                            defaultValue={''}
                            value={''}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Form.Item
                          hasFeedback
                          validateStatus='validating'
                          rules={[
                            {
                              required: true,
                              message: 'لینک مورد قبول نیست!',
                              pattern: /([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/i
                            }
                          ]}
                          name='website'
                        >
                          <TextField
                            label='لینک سایت رستوران'
                            type='text'
                            fullWidth
                            defaultValue={''}
                            value={''}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Form.Item name='social'>
                          <TextField
                            label='آیدی اینستاگرام'
                            type='text'
                            fullWidth
                            defaultValue={''}
                            value={''}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12}>
                        <Form.Item name='address'>
                          <TextField
                            label='نشانی'
                            multiline
                            defaultValue={''}
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
                            endIcon={<DownloadDoneIcon />}
                            color='success'
                          >
                            ذخیره
                          </Button>
                        </Form.Item>
                      </Grid>
                    </Grid>
                  </Form>
                </RtlVersion>
              </MyBox>
            </Card>
          </Box>
          <BottomNav
            className='pt-5'
            nextStep={true}
            preStep={false}
            forLink='themes'
            backLink='finish'
            forText='انتخاب تم'
            backText='ورود به سامانه'
          />
        </Container>
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Toaster />
        <TitleText header='ساخت اکانت رستوران' />
        <Container maxWidth='lg'>
          <Box p={1}>
            <Card>
              <MyBox sx={{ direction: 'rtl', p: 2 }}>
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
                      <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Form.Item name='profile'>
                          <Upload
                            name='avatar'
                            listType='picture-card'
                            className='avatar-uploader'
                            showUploadList={false}
                            action='https://upmenu.sepandpay.ir/swagger/index.html'
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                          >
                            {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
                          </Upload>
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Form.Item name='restaurantName' initialValue={globalUserState.restaurantName}>
                          <TextField
                            label='نام رستوران'
                            type='text'
                            fullWidth
                            id='outlined-required'
                            defaultValue={globalUserState.restaurantName}
                            value={globalUserState.restaurantName}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item
                          hasFeedback
                          validateStatus='validating'
                          rules={[
                            {
                              required: true,
                              message: 'شماره مورد قبول نیست!',
                              pattern: /(^(\+98|0)?\d{10}$)/i
                            }
                          ]}
                          name='cellPhone'
                          initialValue={globalUserState.cellPhone}>
                          <TextField
                            label='شماره تلفن'
                            type='text'
                            fullWidth
                            defaultValue={globalUserState.cellPhone}
                            value={globalUserState.cellPhone}
                          />
                        </Form.Item>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Form.Item

                          hasFeedback
                          validateStatus='validating'
                          name='email'
                          rules={[
                            {
                              required: true,
                              message: 'ایمیل مورد قبول نیست!',
                              pattern: /(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i
                            }
                          ]}

                          initialValue={globalUserState.email}>
                          <TextField
                            label='ایمیل'
                            type='text'
                            fullWidth
                            defaultValue={globalUserState.email}
                            value={globalUserState.email}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Form.Item
                          hasFeedback
                          validateStatus='validating'
                          rules={[
                            {
                              required: true,
                              message: 'لینک مورد قبول نیست!',
                              pattern: /([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/i
                            }
                          ]}
                          name='website'
                          initialValue={globalUserState.website}>
                          <TextField
                            label='لینک سایت رستوران'
                            type='text'
                            fullWidth
                            defaultValue={globalUserState.website}
                            value={globalUserState.website}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Form.Item name='social' initialValue={globalUserState.social}>
                          <TextField
                            label='آیدی اینستاگرام'
                            type='text'
                            fullWidth
                            defaultValue={globalUserState.social}
                            value={globalUserState.social}
                          />
                        </Form.Item>
                      </Grid>

                      <Grid item xs={12}>
                        <Form.Item name='address' initialValue={globalUserState.address}>
                          <TextField
                            label='نشانی'
                            multiline
                            defaultValue={globalUserState.address}
                            value={globalUserState.address}
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
                            endIcon={<DownloadDoneIcon />}
                            color='success'
                          >
                            ذخیره
                          </Button>
                        </Form.Item>
                      </Grid>
                    </Grid>
                  </Form>
                </RtlVersion>
              </MyBox>
            </Card>
          </Box>
          <BottomNav
            className='pt-5'
            nextStep={true}
            preStep={false}
            forLink='themes'
            backLink='finish'
            forText='انتخاب تم'
            backText='ورود به سامانه'
          />
        </Container>
        <Footer />
      </Fragment>
    );
  }
};

export default CreateAccount;
