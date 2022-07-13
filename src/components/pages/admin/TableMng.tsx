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
import ProgressContext from 'src/contexts/ProgressContext';
import { Toaster } from 'react-hot-toast';

// import icons
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';

// costume components
import Tables from '../../../UI/Table';
import PopUp from '../../../UI/PopUp';
import TitleText from '../../../UI/TitleText';
import RtlVersion from '../../../UI/RtlVersion';
import { userCreateTable } from '../../../store/actions';
import { useTypedDispatch } from 'src/store';
import { log } from 'util';


const CreateTable = () => {
  const progressContext = useContext(ProgressContext);
  const [tableList, setTableList] = useState([]);
  const [qrText, setQRText] = useState('');
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState(0);
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm();

  //! call on form submit
  const onFinish = (values: any) => {
    let valuesWithIdGenerator = {
      id: tableList.length,
      ...values
    };

    setTableList((tableList) => [...tableList, valuesWithIdGenerator]);
    form.resetFields();
  };

  const sendTable = () => {
    progressContext.onTable(true);
    dispatch(userCreateTable(tableList, (notification) => notification))
    // console.log(tableList);
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
            <Tooltip title='Delete Order' arrow>
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
  return (
    <>
      <TitleText header='مدیریت میز' />
      <Toaster />
      <PopUp
        setOpen={setOpen}
        setID={setID}
        setList={setTableList}
        open={open}
        ID={ID}
        List={tableList}
      />

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
                                onClick={sendTable}
                              >
                                ثبت
                              </Button>
                              <Button
                                size='medium'
                                sx={{ margin: 1 }}
                                type='submit'
                                color='warning'
                                endIcon={<AddTaskIcon />}
                              >
                                اضافه کردن مجدد
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
                  <Card>
                    <RtlVersion>
                      <Tables
                        Rows={tableList}
                        Columns={columns}
                        onCellEditCommitFn={handleCellEditCommit}
                      />
                    </RtlVersion>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <BottomNav
          className='pt-5'
          nextStep={true}
          preStep={true}
          forLink='orders'
          backLink='delivery'
          forText='Chose orders'
          backText='Delivery zone'
        />
      </Container>
      <Footer />
    </>
  );
};

export default CreateTable;
