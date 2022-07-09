import {
  Container,
  Grid,
  Card,
  Divider,
  Typography,
  Box,
  Button,
  styled,
  IconButton,
  Modal,
  Fade,
  Stack,
  Alert,
  useTheme,
  Backdrop,
  Tooltip
} from '@mui/material';
import React, { useContext, useState } from 'react';
import BottomNav from '../../shared/BottomNav';
import Footer from '../../shared/Footer';
import TextField from '@mui/material/TextField';
import { Form } from 'antd';

import { DataGrid, GridApi, GridColDef } from '@mui/x-data-grid';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { QRCodeSVG } from 'qrcode.react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ProgressContext from 'src/contexts/ProgressContext';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const CreateTable = () => {
  const progressContext = useContext(ProgressContext);
  const [tableList, setTableList] = useState([]);
  const [qrText, setQRText] = useState('');
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState(0);
  const [form] = Form.useForm();
  const theme = useTheme();

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
      id: tableList.length,
      ...values
    };

    setTableList((tableList) => [...tableList, valuesWithIdGenerator]);
    form.resetFields();
  };

  const sendTable = () => {
    console.log(tableList);
    progressContext.onTable(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
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
  const columns: GridColDef[] = [
    {
      field: 'action',
      headerName: 'Action',
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
          <Box display="flex" flexDirection="row">
            <Tooltip title="Delete Order" arrow>
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
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'tableName',
      editable: true,
      headerName: 'Table Name',
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
  const removeConfirmation = () => {
    let newTableList = [...tableList];
    newTableList = newTableList.filter((table) => table.id !== ID);
    setTableList(newTableList);
    setOpen(false);
  };
  const qrSend = (e: { target: { value: React.SetStateAction<string> } }) => {
    setQRText(e.target.value);
  };
  return (
    <>
      <Toaster />
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

            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, textAlign: 'center' }}
            >
              Are you sure you want to delete this item?
            </Typography>

            <Stack direction="row" justifyContent="center" spacing={2} pt={4}>
              <Tooltip title="Confirm deletion" arrow>
                <IconButton
                  onClick={removeConfirmation}
                  sx={{ ml: 1 }}
                  color="success"
                >
                  <DoneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Deny removal" arrow>
                <IconButton
                  onClick={() => {
                    setOpen(false);
                  }}
                  sx={{ ml: 1 }}
                  color="error"
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Helmet>
        <title>مدیریت میز</title>
      </Helmet>
      <Container>
        <Card variant="outlined">
          <Box p={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Grid
                  container
                  direction="column"
                  justifyContent="left"
                  alignItems="stretch"
                  spacing={0}
                >
                  <Box pt={2} pb={2} pl={2}>
                    <Typography variant="h3">Add Table </Typography>
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
                          name="tableName"
                          rules={[{ message: 'Please input your table name!' }]}
                          style={{ paddingTop: '10px' }}
                        >
                          <TextField
                            onChange={qrSend}
                            value={''}
                            label="Table name"
                            type="text"
                            fullWidth
                          />
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
                            flexWrap="wrap"
                            justifyContent="space-between"
                          >
                            <Button
                              sx={{ margin: 1 }}
                              size="medium"
                              color="success"
                              variant="outlined"
                              startIcon={<DoneOutlineIcon />}
                              onClick={sendTable}
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
                              Add new table
                            </Button>
                          </Box>
                        </Form.Item>
                      </Box>

                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
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
              <Grid item xs={12} md={7}>
                <Box pt={3} pb={3}>
                  <Card>
                    <div style={{ height: 400, width: '100%' }}>
                      <MyDataGrid
                        rows={tableList}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        onCellEditCommit={handleCellEditCommit}
                      />
                    </div>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <BottomNav
          className="pt-5"
          nextStep={true}
          preStep={true}
          forLink="orders"
          backLink="delivery"
          forText="Chose orders"
          backText="Delivery zone"
        />
      </Container>
      <Footer />
    </>
  );
};

export default CreateTable;
