import {
  Container,
  Grid,
  Card,
  Divider,
  Typography,
  Box,
  Button,
  IconButton,
  Tooltip
} from '@mui/material';
import React, { useContext, useState } from 'react';
import BottomNav from '../../../shared/BottomNav';
import Footer from '../../../shared/Footer';
import TextField from '@mui/material/TextField';
import { Form } from 'antd';

import { GridApi, GridColDef } from '@mui/x-data-grid';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { QRCodeSVG } from 'qrcode.react';
import ProgressContext from 'src/context/ProgressContext';
import { Toaster } from 'react-hot-toast';

// import icons
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// costume components
import Tables from '../../../UI/Table';
import DeleteRow from '../../../UI/DeleteRow';
import TitleText from '../../../UI/TitleText';
import RtlVersion from '../../../theme/RtlVersion';
import { userCreateTable } from '../../../store/actions';
import { useTypedDispatch } from 'src/store';
import PopUpView from 'src/UI/PopUpView';
import { GetRestaurantCategories, GetRestaurantTables } from '../../../connections/Req';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const CreateTable = () => {
  const progressContext = useContext(ProgressContext);
  const [tableList, setTableList] = useState([]);
  const [qrText, setQRText] = useState('');
  const [openDelete, setOpenDelete] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [ID, setID] = useState('');
  const [QR, setQR] = useState('');
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm();
  const restaurantID: String = JSON.parse(
    localStorage.getItem('restaurant_data')
  ).payload.restaurantId;

  //! call on form submit
  const onFinish = (values: any) => {
    progressContext.onTable(true);
    dispatch(userCreateTable(
        {
          restaurantId: restaurantID,
          tableName: values.tableName
        }, (notification) => notification
      )
    );
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const columns: GridColDef[] = [
    {
      field: 'action',
      headerName: 'اقدام',
      sortable: false,
      width: 70,
      renderCell: (params) => {
        const deleteHandler = (e: { stopPropagation: () => void }) => {
          e.stopPropagation(); // don't select this row after clicking
          setOpenDelete(true);
          const api: GridApi = params.api;
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(() => {
              setID(params.row.id);
            });
        };

        const viewHandler = (e: { stopPropagation: () => void }) => {
          e.stopPropagation(); // don't select this row after clicking
          setOpenView(true);
          const api: GridApi = params.api;
          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(() => {
              setQR(params.row.tableName);
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

            <Tooltip title='مشاهده QR Code' arrow>
              <IconButton
                sx={{
                  '&:hover': {
                    background: 'rgba(25, 255, 94, 0.25)'
                  },
                  color: '#57CA22'
                }}
                onClick={viewHandler}
                color='success'
                size='small'
              >
                <RemoveRedEyeIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </Box>
        );
      }
    },
    { field: 'id', headerName: 'ردیف', width: 50 },
    {
      field: 'tableName',
      editable: true,
      headerName: 'نام میز',
      width: 250
    }
  ];

  const handleCellEditCommit = React.useCallback(
    ({ id, field, value }) => {
      if (field === 'tableName') {
        const tableName = value.toString();
        const updatedRows = tableList.map((row) => {
          if (row.id === id) return { ...row, tableName };
          return row;
        });
        setTableList(updatedRows);
      }
    },
    [tableList]
  );

  const qrSend = (e: { target: { value: React.SetStateAction<string> } }) => {
    setQRText(e.target.value);
  };
  const reload = () => {
    GetRestaurantTables(restaurantID, (restaurantCategories) => {
      setTableList(
        restaurantCategories.map(
          (table: {
            tableId: string;
            restaurantId: string;
            tableName: string;
          }) => {
            return {
              id: table.tableId,
              tableName: table.tableName
            };
          }
        )
      );
    });
  };
  return (
    <>
      <TitleText header='مدیریت میز' />
      <Toaster />
      <DeleteRow
        setOpen={setOpenDelete}
        setID={setID}
        setList={setTableList}
        open={openDelete}
        ID={ID}
        List={tableList}
        method='table'
      />

      <PopUpView setOpen={setOpenView} open={openView} QR={QR} />

      <Container>
        <Card variant='outlined'>
          <Box p={2} sx={{ direction: 'rtl' }}>
            <Grid container spacing={2}>
              <RtlVersion>
                <Grid item xs={12} md={5}>
                  <Grid
                    container
                    direction='column'
                    justifyContent='left'
                    alignItems='stretch'
                    spacing={0}
                  >
                    <Box pt={2} pb={2} pl={2}>
                      <Typography variant='h4'>ساخت میز</Typography>
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
                        <Box
                          display='flex'
                          flexDirection='column'
                          textAlign='justify'
                          pt={1}
                          pb={1}
                        >
                          <Form.Item
                            name='tableName'
                            rules={[
                              { message: 'Please input your table name!' }
                            ]}
                            style={{ paddingTop: '10px' }}
                          >
                            <TextField
                              onChange={qrSend}
                              value={''}
                              label='نام میز'
                              type='text'
                              fullWidth
                            />
                          </Form.Item>
                        </Box>

                        <Box
                          display='flex'
                          flexDirection='row'
                          justifyContent='center'
                          alignItems='center'
                          textAlign='center'
                        >
                          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Box
                              pt={2}
                              pb={2}
                              pl={2}
                              pr={2}
                              display='flex'
                              flexDirection='row'
                              flexWrap='wrap'
                              justifyContent='space-between'
                            >
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
                            </Box>
                          </Form.Item>
                        </Box>

                        <Box
                          display='flex'
                          flexDirection='row'
                          justifyContent='center'
                        >
                          <Card>
                            <Box p={1}>
                              <QRCodeSVG value={`${qrText}`} />
                            </Box>
                          </Card>
                        </Box>
                      </Form>
                    </Box>
                  </Grid>
                </Grid>
              </RtlVersion>
              <Grid item xs={12} md={7}>

                <Box pt={3} pb={3}>
                  <RtlVersion>

                    <Card>
                      <Tables
                        Rows={tableList}
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
              </Grid>
            </Grid>
          </Box>
        </Card>
        <BottomNav
          className='pt-5'
          nextStep={true}
          preStep={true}
          forLink='mobileApp'
          backLink='createMenu'
          forText='تنظیمات تلفن همراه'
          backText='ساخت منو'
        />;
      </Container>
      <Footer />;
    </>
  )
    ;
};

export default CreateTable;
