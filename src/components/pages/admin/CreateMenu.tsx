import React, { useState, useCallback, useEffect } from 'react';

import {
  Alert,
  Stack,
  Container,
  Grid,
  Card,
  Divider,
  Typography,
  Box,
  Button,
  IconButton,
  Tooltip,
  TextField,
  styled
} from '@mui/material';
import Footer from 'src/shared/Footer';

import { Form } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';

// import Table components
import { GridApi, GridColDef } from '@mui/x-data-grid';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useContext } from 'react';
import ProgressContext from 'src/context/ProgressContext';
import images from 'src/widgets/importer';

// import notification components
import toast, { Toaster } from 'react-hot-toast';

// costume components
import Tables from '../../../UI/Table';
import DeleteRow from '../../../UI/DeleteRow';
import TitleText from '../../../UI/TitleText';
import RtlVersion from '../../../theme/RtlVersion';
import IosSwitch from '../../../UI/IosSwitch';
import BottomNav from '../../../shared/BottomNav';
import { useTypedDispatch } from 'src/store';

// import icons
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { userCreateMenu } from '../../../store/actions';
import MenuItem from '@mui/material/MenuItem';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { GetRestaurantCategories, GetRestaurantMenus } from '../../../connections/Req';


interface MenuType extends Array<any> {
  [index: number]: {
    foodName: string;
    category: {
      value: string;
      label: string;
    };
    description: string;
    price: string;
  };
}

const CreateMenu: React.FunctionComponent = () => {
  const [foodList, setFoodList] = useState<MenuType>([]);
  const [flag, setFlag] = useState(true);
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState('');
  const progressContext = useContext(ProgressContext);
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);

  const restaurantID: String = JSON.parse(
    localStorage.getItem('userRestaurantCategory')
  ).payload.restaurantId;

  const MyAlert = styled(Alert)`
    border: 1px solid green;
    color: rgb(187, 233, 166);
    background-color: rgba(17, 57, 0, 0.3);
    flex-direction: row-reverse;
    direction: rtl;
    text-align: right;
    justify-content: flex-end;
  `;

  //* call on form submit
  const onFinish = (values: any) => {
    progressContext.onMenu(true);
    console.log({
      categoryId: values.category.value,
      description: values.description,
      foodImage: values.foodImage,
      foodName: values.foodName,
      price: values.price
    });
    dispatch(
      userCreateMenu(
        {
          categoryId: values.category.value,
          description: values.description,
          foodImage: values.foodImage,
          foodName: values.foodName,
          price: values.price
        },
        (notification) => notification
      )
    );

    let valuesWithIdGenerator = {
      id: foodList.length,
      category: values.category.label,
      description: values.description,
      foodImage: values.foodImage,
      foodName: values.foodName,
      price: values.price
    };

    setFoodList((foodList) => [...foodList, valuesWithIdGenerator]);
    form.resetFields();
  };


  const onFinishFailed = (errorInfo: any) => {
    toast.error('Failed:', errorInfo);
  };

  const columns: GridColDef[] = [
    {
      field: 'action',
      headerName: 'اقدام',
      sortable: false,
      width: 100,
      renderCell: (params) => {
        const deleteHandler = (e: { stopPropagation: () => void }) => {
          e.stopPropagation(); // don't select this row after clicking
          setOpen(true);
          const api: GridApi = params.api;
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(() => {
              setID(params.row.id);
            });
        };

        return (
          <Box display='flex' flexDirection='row'>
            <Tooltip title='حذف ردیف' arrow>
              <IconButton
                sx={{
                  '&:hover': {
                    background: 'rgba(255, 25, 67, 0.25)'
                  },
                  color: '#FF1943'
                }}
                onClick={deleteHandler}
                color='error'
                size='small'
              >
                <DeleteSweepIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </Box>
        );
      }
    },

    {
      field: 'foodName',
      editable: true,
      headerName: 'نام غذا',
      width: 180
    },
    { field: 'category', editable: true, headerName: 'دسته بندی', width: 130 },
    { field: 'price', editable: true, headerName: 'قیمت', width: 100 },
    {
      field: 'description',
      editable: true,
      headerName: 'توضیحات',
      width: 330
    }
  ];
  const handleCellEditCommit = useCallback(
    ({ id, field, value }) => {
      if (field === 'foodName') {
        const productName = value.toString();
        const updatedRows = foodList.map((row) => {
          if (row.id === id) {
            return { ...row, productName };
          }
          return row;
        });
        setFoodList(updatedRows);
      } else if (field === 'category') {
        const category = value.toString();
        const updatedRows = foodList.map((row) => {
          if (row.id === id) {
            return { ...row, category };
          }
          return row;
        });
        setFoodList(updatedRows);
      } else if (field === 'price') {
        const price = value.toString();
        const updatedRows = foodList.map((row) => {
          if (row.id === id) {
            return { ...row, price };
          }
          return row;
        });
        setFoodList(updatedRows);
      } else if (field === 'description') {
        const description = value.toString();
        const updatedRows = foodList.map((row) => {
          if (row.id === id) {
            return { ...row, description };
          }
          return row;
        });
        setFoodList(updatedRows);
      }
    },
    [foodList]
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setFlag(() => false);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [flag]);


  useEffect(() => {
    GetRestaurantCategories(restaurantID, (restaurantCategories) => {
      setCategories(
        restaurantCategories.map(
          (category: {
            categoryId: string;
            restaurantId: string;
            categoryName: string;
          }) => {
            return {
              value: category.categoryId,
              label: category.categoryName
            };
          }
        )
      );
    });
  }, []);



  const reload = () => {
    GetRestaurantMenus(restaurantID, (restaurantMenus) => {
      console.log(restaurantMenus);
      setFoodList(
        restaurantMenus.map(
          (menu: {
            categoryId: string;
            description: string;
            foodImage: string;
            foodName: string
            menuId: string;
            price: number;
          }) => {
            return {
              id: menu.menuId, // replace with foodId
              category: menu.categoryId,
              description: menu.description,
              foodImage: menu.foodImage,
              foodName: menu.foodName,
              menuId: menu.menuId,
              price: menu.price
            };
          }
        )
      );
    });
  };

  return (
    <>
      <TitleText header='صفحه ساخت منو' />
      <Toaster />
      <DeleteRow
        setOpen={setOpen}
        setID={setID}
        setList={setFoodList}
        open={open}
        ID={ID}
        List={foodList}
        method='menu'
      />

      <Container maxWidth='lg'>
        <Box sx={{ direction: 'rtl' }}>
          {flag && (
            <Box pt={3} pb={5}>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <MyAlert severity='success'>
                  ایجاد دسته بندی با موفقیت انجام شد، اکنون منو غذا را بسازید!
                </MyAlert>
              </Stack>
            </Box>
          )}

          <Grid container spacing={5}>
            <RtlVersion>
              <Grid item xs={12} md={6}>
                <Card variant='outlined'>
                  <Grid
                    container
                    direction='column'
                    justifyContent='left'
                    alignItems='stretch'
                    spacing={0}
                  >
                    <Box pt={2} pb={2} pl={2}>
                      <Typography variant='h4'>فرم افزودن محصول</Typography>
                    </Box>
                    <Divider />
                    <Box pt={3} pb={2} pl={2} pr={2}>
                      <Form
                        form={form}
                        name='control-hooks'
                        wrapperCol={{ span: 12 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='on'
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Form.Item name='foodName'>
                              <TextField
                                value={''}
                                label='نام غذا'
                                type='text'
                                fullWidth
                              />
                            </Form.Item>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Form.Item name='category'>
                              <TextField
                                id='outlined-select-category'
                                select
                                label='دسته بندی'
                                fullWidth
                              >
                                {categories.map((option) => (
                                  <MenuItem
                                    sx={{
                                      direction: 'rtl',
                                      textAlign: 'right',
                                      justifyContent: 'end'
                                    }}
                                    key={option.value}
                                    value={option}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Form.Item>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Form.Item name='price'>
                              <TextField
                                label='قیمت'
                                type='text'
                                fullWidth
                                value={''}
                              />
                            </Form.Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Form.Item name='description'>
                              <TextField
                                label='توضیحات غذا'
                                multiline
                                fullWidth
                                value={''}
                                rows={5}
                              />
                            </Form.Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Form.Item name='foodImage'>
                              <TextField value={''} type='file' fullWidth />
                            </Form.Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                              <Button
                                sx={{ margin: 1 }}
                                size='medium'
                                color='success'
                                variant='outlined'
                                endIcon={<DoneOutlineIcon />}
                                type='submit'
                              >
                                ثبت
                              </Button>

                            </Form.Item>
                          </Grid>
                        </Grid>
                      </Form>
                    </Box>
                  </Grid>
                </Card>
              </Grid>
            </RtlVersion>
            <Grid item xs={12} md={6}>
              <Card variant='outlined'>
                <Grid
                  container
                  direction='column'
                  justifyContent='left'
                  alignItems='stretch'
                  spacing={0}
                >
                  <Box pt={2} pb={2} pr={2}>
                    <Typography variant='h4'>محصولات</Typography>
                  </Box>
                  <Divider />
                </Grid>
                <Box>
                  <Swiper
                    pagination={{
                      dynamicBullets: true
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                  >
                    <SwiperSlide>
                      <img src={images['new-home-1.png']} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={images['new-home-2.png']} alt='' />
                    </SwiperSlide>{' '}
                    <SwiperSlide>
                      <img src={images['new-home-3.png']} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={images['new-home-4.png']} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={images['new-home-5.png']} alt='' />
                    </SwiperSlide>
                  </Swiper>

                  {/*<Grid*/}
                  {/*  container*/}
                  {/*  direction="column"*/}
                  {/*  justifyContent="left"*/}
                  {/*  alignItems="stretch"*/}
                  {/*  spacing={0}*/}
                  {/*>*/}
                  {/*  <Box*/}
                  {/*    pt={2}*/}
                  {/*    pb={2}*/}
                  {/*    pl={2}*/}
                  {/*    pr={2}*/}
                  {/*    display="flex"*/}
                  {/*    flexDirection="row"*/}
                  {/*    justifyContent="space-between"*/}
                  {/*    alignItems="center"*/}
                  {/*  >*/}
                  {/*    <Typography variant="h6">وضعیت موجود</Typography>*/}

                  {/*    <IosSwitch />*/}
                  {/*  </Box>*/}
                  {/*  <Divider />*/}
                  {/*  <Box*/}
                  {/*    pt={2}*/}
                  {/*    pb={2}*/}
                  {/*    pl={2}*/}
                  {/*    pr={2}*/}
                  {/*    display="flex"*/}
                  {/*    flexDirection="row"*/}
                  {/*    justifyContent="space-between"*/}
                  {/*    alignItems="center"*/}
                  {/*  >*/}
                  {/*    <Typography variant="h6">تخفیف</Typography>*/}

                  {/*    <IosSwitch />*/}
                  {/*  </Box>*/}
                  {/*</Grid>*/}
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Box pt={3} pb={3}>
            <RtlVersion>

              <Card>
                <Tables
                  Rows={foodList}
                  Columns={columns}
                  onCellEditCommitFn={handleCellEditCommit}
                />

              </Card>
              <Box>
                <Button
                  sx={{ margin: 1 }}
                  size='medium'
                  color='info'
                  variant='outlined'
                  endIcon={<AutorenewIcon />}
                  onClick={reload}
                >
                  بازیابی لیست
                </Button>
              </Box>
            </RtlVersion>
          </Box>
        </Box>

        <BottomNav
          className='pt-5'
          nextStep={true}
          preStep={true}
          forLink='tables'
          backLink='createCategory'
          forText='ساخت میز'
          backText='منو / افزودن دسته بندی'
        />
      </Container>
      <Footer />
    </>
  );
};

export default CreateMenu;
