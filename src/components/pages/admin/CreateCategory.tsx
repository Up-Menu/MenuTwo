import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import RtlVersion from '../../../theme/RtlVersion';
import Tables from '../../../UI/Table';
import { GridApi, GridColDef } from '@mui/x-data-grid';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Form } from 'antd';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { userCreateCategory } from '../../../store/actions';
import toast, { Toaster } from 'react-hot-toast';
import ProgressContext from '../../../context/ProgressContext';
import { useTypedDispatch } from '../../../store';
import PopUp from '../../../UI/PopUp';
import TitleText from '../../../UI/TitleText';
import Footer from 'src/shared/Footer';
import BottomNav from 'src/shared/BottomNav';
import { GetRestaurantCategories } from 'src/connections/Req';

const CreateCategory = () => {
  const [foodList, setFoodList] = useState([]);
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState(0);
  const progressContext = useContext(ProgressContext);
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm();

  const restaurantID: String = JSON.parse(
    localStorage.getItem('userRestaurantCategory')
  ).payload.restaurantId;
  const categoryID: String = JSON.parse(
    localStorage.getItem('userRestaurantCategory')
  ).payload.categoryId;

  //* call on form submit
  const onFinish = (values: any) => {
    progressContext.onMenu(true);
    dispatch(
      userCreateCategory(
        {
          restaurantId: restaurantID,
          categoryName: values.categoryName
        },
        (notification) => notification
      )
    );
    setFoodList((foodList) => [
      ...foodList,
      {
        id: categoryID,
        categoryName: values.categoryName
      }
    ]);
    form.resetFields();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      GetRestaurantCategories(restaurantID, (restaurantCategories) =>
        restaurantCategories.map((category) => {
          console.log(category.categoryId);
          setFoodList((foodList) => [
            ...foodList,
            {
              id: category.categoryId,
              categoryName: category.categoryName
            }
          ]);
        })
      );
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [foodList]);

  console.log(foodList);

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
              setID(params.row.categoryId);
            });
        };

        return (
          <Box display="flex" flexDirection="row">
            <Tooltip title="حذف ردیف" arrow>
              <IconButton
                sx={{
                  '&:hover': {
                    background: 'rgba(255, 25, 67, 0.25)'
                  },
                  color: '#FF1943'
                }}
                onClick={deleteHandler}
                color="error"
                size="small"
              >
                <DeleteSweepIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        );
      }
    },

    {
      field: 'categoryName',
      editable: true,
      headerName: 'نام دسته بندی',
      width: 180
    }
  ];
  const handleCellEditCommit = useCallback(
    ({ id, field, value }) => {
      if (field === 'categoryName') {
        const categoryName = value.toString();
        const updatedRows = foodList.map((row) => {
          if (row.id === id) {
            return { ...row, categoryName };
          }
          return row;
        });
        setFoodList(updatedRows);
      }
    },
    [foodList]
  );
  return (
    <>
      <Toaster />
      <TitleText header="ایجاد دسته بندی" />
      <PopUp
        setOpen={setOpen}
        setID={setID}
        setList={setFoodList}
        open={open}
        ID={ID}
        List={foodList}
      />
      <Box sx={{ direction: 'rtl' }}>
        <Container maxWidth="lg">
          <RtlVersion>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box pb={4}>
                  <Card variant="outlined">
                    <Grid
                      container
                      direction="column"
                      justifyContent="left"
                      alignItems="stretch"
                      spacing={0}
                    >
                      <Box pt={2} pb={2} pl={2}>
                        <Typography variant="h4">
                          فرم افزودن دسته بندی
                        </Typography>
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
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <Form.Item name="categoryName">
                                <TextField
                                  value={''}
                                  label="نام دسته بندی"
                                  type="text"
                                  fullWidth
                                />
                              </Form.Item>
                            </Grid>

                            <Grid item xs={12}>
                              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button
                                  sx={{ margin: 1 }}
                                  size="medium"
                                  color="success"
                                  variant="outlined"
                                  endIcon={<DoneOutlineIcon />}
                                  type="submit"
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
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <Tables
                    Rows={foodList}
                    Columns={columns}
                    onCellEditCommitFn={handleCellEditCommit}
                  />
                </Card>
              </Grid>
            </Grid>
          </RtlVersion>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="createMenu"
          backLink="themes"
          forText="منو / ساخت منو"
          backText="انتخاب تم"
        />
      </Container>
      <Footer />
    </>
  );
};

export default CreateCategory;
