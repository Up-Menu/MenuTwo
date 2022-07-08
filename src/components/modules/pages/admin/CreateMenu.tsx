import React, { useState } from 'react';
import styled from 'styled-components';
import BottomNav from '../../shared/BottomNav';
import { Helmet } from 'react-helmet-async';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {
  Container,
  Grid,
  Card,
  Divider,
  Typography,
  Box,
  Button,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  useTheme,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
  MenuItem
} from '@mui/material';
import Footer from 'src/components/modules/shared/Footer';
import TextField from '@mui/material/TextField';
import { Form } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';
// import { IOSwitch } from '../../interfaces/CustomizedSwitches';
// import MyButton from '../../interfaces/Button/MyButton';

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import RecentOrdersTable from 'src/content/applications/Transactions/RecentOrdersTable';
import { CryptoOrder } from 'src/models/crypto_order';

const CreateMenu: React.FunctionComponent = () => {
  const initialState: CryptoOrder[] = [];
  const [foodList, setFoodList] = useState(initialState);

  const [form] = Form.useForm();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const ErrAlert = styled(Alert)`
    border: 1px solid red;
    color: ${theme.palette.mode === 'dark' ? '#FF1943' : 'red'};
    background-color: ${theme.palette.mode === 'dark'
      ? 'rgba(122, 2, 2, 0.3)'
      : '#fbaaaa'};
    justify-content: center;

    svg {
      color: ${theme.palette.mode === 'dark' ? '#FF1943' : 'red'};
      padding-top: 1px;
    }
  `;
  const MyAlert = styled(Alert)`
    border: 1px solid green;
    color: rgb(187, 233, 166);
    background-color: rgba(17, 57, 0, 0.3);
  `;

  const statuses = [
    {
      value: 'failed',
      label: 'Failed'
    },
    {
      value: 'completed',
      label: 'Completed'
    },
    {
      value: 'pending',
      label: 'Pending'
    }
  ];

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  //! call on form submit
  const onFinish = (values: any) => {
    let valuesWithIdGenerator = {
      id: foodList.length,
      orderDate: new Date().getTime(),
      ...values
    };

    setFoodList((foodList) => [...foodList, valuesWithIdGenerator]);
    form.resetFields();
  };

  const sendMenu = () => {
    console.log(foodList);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Helmet>
        <title>صفحه ساخت منو</title>
      </Helmet>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack>
              <ErrAlert severity="error">Pay attention</ErrAlert>
            </Stack>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this item?
            </Typography>

            <Stack direction="row" spacing={2} pt={4}>
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
                sx={{ ml: 1 }}
                color="inherit"
              >
                <DoneIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
                sx={{ ml: 1 }}
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Container maxWidth="lg">
        <Box pt={3} pb={5}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <MyAlert severity="success">
              Well done! You successfully read this important alert message.
            </MyAlert>
          </Stack>
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <Grid
                container
                direction="column"
                justifyContent="left"
                alignItems="stretch"
                spacing={0}
              >
                <Box pt={2} pb={2} pl={2}>
                  <Typography variant="h3">Add Product Form</Typography>
                </Box>
                <Divider />
                <Box pt={3} pb={2} pl={2} pr={2}>
                  <Form
                    form={form}
                    name="control-hooks"
                    wrapperCol={{ span: 12 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      textAlign="justify"
                      pb={1}
                    >
                      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8}>
                          <Form.Item
                            name="productName"
                            rules={[
                              { message: 'Please input your food name!' }
                            ]}
                          >
                            <TextField
                              label="Product"
                              type="text"
                              fullWidth
                              value={''}
                            />
                          </Form.Item>
                        </Grid>
                        <Grid item xs={4}>
                          <Form.Item
                            name="status"
                            rules={[
                              {
                                required: true,
                                message: 'Please input status!'
                              }
                            ]}
                          >
                            <TextField
                              id="outlined-select-currency"
                              select
                              label="Status"
                              fullWidth
                              required
                            >
                              {statuses.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Form.Item>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="row"
                      textAlign="justify"
                      pb={1}
                    >
                      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                          <Form.Item
                            name="category"
                            rules={[{ message: 'Please input your Category!' }]}
                            style={{ paddingTop: '10px' }}
                          >
                            <TextField
                              label="Category"
                              type="text"
                              fullWidth
                              value={''}
                            />
                          </Form.Item>
                        </Grid>
                        <Grid item xs={6}>
                          <Form.Item
                            name="price"
                            rules={[{ message: 'Please input your Price!' }]}
                            style={{ paddingTop: '10px' }}
                          >
                            <FormControl variant="outlined">
                              <InputLabel>Price</InputLabel>
                              <OutlinedInput
                                type="text"
                                endAdornment={
                                  <InputAdornment position="end">
                                    تومان
                                  </InputAdornment>
                                }
                                label="Price"
                              />
                            </FormControl>
                          </Form.Item>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="column"
                      textAlign="justify"
                      pb={1}
                    >
                      <Form.Item
                        name="description"
                        rules={[{ message: 'Please input your product name!' }]}
                        style={{ paddingTop: '10px' }}
                      >
                        <TextField
                          id="outlined-multiline-static"
                          label="Food Description"
                          multiline
                          fullWidth
                          value={''}
                          rows={5}
                        />
                      </Form.Item>
                    </Box>

                    <Box>
                      <Form.Item
                        name="foodImage"
                        rules={[{ message: 'Please input your food image!' }]}
                        style={{ paddingTop: '10px' }}
                      >
                        <TextField value={''} type="file" fullWidth />
                      </Form.Item>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      textAlign="center"
                    >
                      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Box
                          pt={2}
                          pb={2}
                          pl={2}
                          pr={2}
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-between"
                        >
                          <Button
                            sx={{ margin: 1 }}
                            size="medium"
                            color="success"
                            variant="outlined"
                            startIcon={<DoneOutlineIcon />}
                            onClick={sendMenu}
                          >
                            Submit
                          </Button>
                          <Button
                            size="medium"
                            sx={{ margin: 1 }}
                            type="submit"
                            color="warning"
                            startIcon={<AddTaskIcon />}
                          >
                            Save & Add
                          </Button>
                        </Box>
                      </Form.Item>
                    </Box>
                  </Form>
                </Box>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <Grid
                container
                direction="column"
                justifyContent="left"
                alignItems="stretch"
                spacing={0}
              >
                <Box pt={2} pb={2} pl={2}>
                  <Typography variant="h3">Products</Typography>
                </Box>
                <Divider />
              </Grid>
              <Box>
                <Swiper
                  pagination={{
                    dynamicBullets: true
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {foodList.map((foodItems) => {
                    return (
                      <SwiperSlide key={foodItems.id}>
                        <img src={foodItems.foodImage} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <Grid
                  container
                  direction="column"
                  justifyContent="left"
                  alignItems="stretch"
                  spacing={0}
                >
                  <Box
                    pt={2}
                    pb={2}
                    pl={2}
                    pr={2}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6">Status Available</Typography>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            sx={{ m: 1 }}
                            defaultChecked
                            color="success"
                          />
                        }
                        label=""
                      />
                    </FormGroup>
                  </Box>
                  <Divider />
                  <Box
                    pt={2}
                    pb={2}
                    pl={2}
                    pr={2}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6">Discount Active</Typography>

                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            sx={{ m: 1 }}
                            defaultChecked
                            color="success"
                          />
                        }
                        label=""
                      />
                    </FormGroup>
                  </Box>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Box pt={3} pb={3}>
          <Card>
            <RecentOrdersTable cryptoOrders={foodList} />
          </Card>
        </Box>

        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          backLink="orders"
          forLink="themes"
          forText="Select theme"
          backText="Select order"
        />
      </Container>
      <Footer />
    </>
  );
};

export default CreateMenu;
