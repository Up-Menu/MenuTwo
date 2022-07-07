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
  useTheme
} from '@mui/material';
import Footer from 'src/components/modules/shared/Footer';
import TextField from '@mui/material/TextField';
import { Form } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';
import { IOSwitch } from '../../../UI/CustomizedSwitches';
import MyButton from '../../../UI/Button/MyButton';

import { DataGrid, GridApi, GridCellValue, GridColDef } from '@mui/x-data-grid';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const MyAlert = styled(Alert)`
  border: 1px solid green;
  color: rgb(187, 233, 166);
  background-color: rgba(17, 57, 0, 0.3);
`;

const MyDataGrid = styled(DataGrid)`
  .MuiDataGrid-row:hover {
    background-color: rgb(140 124 240 / 8%);
  }
  .MuiDataGrid-columnHeader:focus,
  .MuiDataGrid-cell:focus,
  .MuiDataGrid-columnHeader:focus-within,
  .MuiDataGrid-cell:focus-within {
    outline: solid transparent 1px !important;
  }
`;

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

const CreateMenu: React.FC = () => {
  const [foodList, setFoodList] = useState([]);
  const [form] = Form.useForm();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  //! call on form submit
  const onFinish = (values: any) => {
    let valuesWithIdGenerator = {
      id: foodList.length,
      ...values
    };

    setFoodList((foodList) => [...foodList, valuesWithIdGenerator]);
    form.resetFields();
  };

  const sendMenu = () => {
    console.log(foodList);
  };

  const removeHandler = () => {
    console.log(foodList);
    setOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const columns: GridColDef[] = [
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 150,
      renderCell: (params) => {
        const deleteHandler = (e: { stopPropagation: () => void }) => {
          e.stopPropagation(); // don't select this row after clicking
          setOpen(true); // open modal immediately
        };

        const editHandler = (e: { stopPropagation: () => void }) => {
          e.stopPropagation(); // don't select this row after clicking
        };

        return (
          <Box display="flex" flexDirection="row">
            <IconButton onClick={editHandler} sx={{ ml: 1 }} color="inherit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={deleteHandler} sx={{ ml: 1 }} color="inherit">
              <DeleteSweepIcon />
            </IconButton>
          </Box>
        );
      }
    },
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'productName', headerName: 'Product Name', width: 180 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'price', headerName: 'Price', width: 100 },
    { field: 'description', headerName: 'Description', width: 330 }
  ];

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
                onClick={removeHandler}
                sx={{ ml: 1 }}
                color="inherit"
              >
                <DoneIcon />
              </IconButton>
              <IconButton onClick={handleClose} sx={{ ml: 1 }} color="inherit">
                <CloseIcon />
              </IconButton>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Container maxWidth="lg">
        <Helmet>
          <title>صفحه ساخت منو</title>
        </Helmet>
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
                      flexDirection="column"
                      textAlign="justify"
                      pt={1}
                      pb={1}
                    >
                      <Form.Item
                        name="productName"
                        rules={[{ message: 'Please input your product name!' }]}
                        style={{ paddingTop: '10px' }}
                      >
                        <TextField
                          value={''}
                          label="Product name"
                          type="text"
                          fullWidth
                        />
                      </Form.Item>
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
                            <TextField
                              value={''}
                              label="Price"
                              type="number"
                              fullWidth
                            />
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
                          <MyButton
                            size="medium"
                            sx={{ margin: 1 }}
                            type="primary"
                            htmlType="submit"
                          >
                            Save & Add
                          </MyButton>

                          <Button
                            sx={{ margin: 1 }}
                            size="medium"
                            color="primary"
                            onClick={sendMenu}
                          >
                            Submit
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
                    <IOSwitch />
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
                    <IOSwitch />
                  </Box>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Box pt={3} pb={3}>
          <Card>
            <div style={{ height: 400, width: '100%' }}>
              <MyDataGrid
                rows={foodList}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
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
