import {
  Container,
  Grid,
  Card,
  Divider,
  Typography,
  Box,
  Button,
  styled,
  IconButton
} from '@mui/material';
import React from 'react';
import BottomNav from '../../shared/BottomNav';
import Footer from '../../shared/Footer';
import TextField from '@mui/material/TextField';
import { Form } from 'antd';
import MyButton from '../../interfaces/Button/MyButton';
import { DataGrid, GridApi, GridColDef } from '@mui/x-data-grid';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { QRCodeSVG } from 'qrcode.react';

const CreateTable = () => {
  const [tableList, setTableList] = React.useState([]);
  const [qrText, setQRText] = React.useState('');
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
    console.log(tableList);
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

          let newUserSet1 = [...tableList];
          const api: GridApi = params.api;

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(() => {
              newUserSet1 = newUserSet1.filter(
                (user) => user.id !== params.row.id
              );
            });

          setTableList(newUserSet1);
        };

        return (
          <Box display="flex" flexDirection="row">
            <IconButton onClick={deleteHandler} sx={{ ml: 1 }} color="inherit">
              <DeleteSweepIcon />
            </IconButton>
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

  const qrSend = (e) => {
    setQRText(e.target.value);
  };
  return (
    <div>
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
                            <MyButton
                              size="medium"
                              sx={{ margin: 1 }}
                              type="primary"
                              htmlType="submit"
                            >
                              Add new table
                            </MyButton>

                            <Button
                              sx={{ margin: 1 }}
                              size="medium"
                              color="primary"
                              onClick={sendTable}
                            >
                              Submit
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
    </div>
  );
};

export default CreateTable;
