import React, { useState } from 'react'
import styled from 'styled-components'
import BottomNav from './BottomNav'
import { Helmet } from 'react-helmet-async'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import {
  Container,
  Grid,
  Card,
  Divider,
  Typography,
  Checkbox,
  Box,
  Button as MaterialButton
} from '@mui/material'
import Footer from 'src/components/Footer'
import TextField from '@mui/material/TextField'
import { pink } from '@mui/material/colors'
import { Form } from 'antd'
import MenuItem from '@mui/material/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import { Toaster } from 'react-hot-toast'
import { userLogin } from 'src/store/actions'
import { useTypedDispatch } from 'src/store'
import { promiseNotify } from './Notification/Notification'
import MyButton from '../UI/Button/MyButton'
import { Link, NavLink as RouterLink } from 'react-router-dom'
import Switch from '@mui/material/Switch'

import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'


const { Dragger } = Upload













const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange ( info ) {
    const { status } = info.file
    if ( status !== 'uploading' ) {
      console.log( info.file, info.fileList )
    }
    if ( status === 'done' ) {
      message.success( `${ info.file.name } file uploaded successfully.` )
    } else if ( status === 'error' ) {
      message.error( `${ info.file.name } file upload failed.` )
    }
  },
  onDrop ( e ) {
    console.log( 'Dropped files', e.dataTransfer.files )
  },
}






const faPropIcon = faGoogle as IconProp
const label = { inputProps: { 'aria-label': 'Switch demo' } }



const currencies = [
  {
    value: 'IRR',
    label: 'IRR'
  }
]

const category = [
  {
    value: 'Salad',
    label: 'Salad'
  },
  {
    value: 'Main course',
    label: 'Main Course'
  },
  {
    value: 'Sandwich',
    label: 'Sandwich'
  },
  {
    value: 'Beverages',
    label: 'Beverages'
  }
]


const MyAlert = styled( Alert )`
border: 1px solid green;
color: rgb(187, 233, 166);
background-color: rgba(17, 57, 0, 0.3);
`

const CreateMenu: React.FC = () => {
  const [ currency, setCurrency ] = useState( 'EUR' )
  const dispatch = useTypedDispatch()

  // const handleChange = ( event: { target: { value: React.SetStateAction<string> } } ) => {
  //   setCurrency( event.target.value )
  // }

  const onFinish = ( values: any ) => {
    // const myPromise = dispatch( userLogin( { ...values } ) )
    // promiseNotify( myPromise, {
    //   loading: 'در حال دریافت اطلاعات',
    //   success: '!خوش آمدید',
    //   error: 'خطا در دریافت اطلاعات',
    // } )
    // myPromise.then( () => {
    //   const timer = setTimeout( () => window.location.replace( '/dashboards' )
    //     , 2000 )
    //   return () => clearTimeout( timer )
    // } )
    // myPromise.catch(
    //   ( err: any ) => {
    //     console.log( err )
    //   }
    // )
  }

  const onFinishFailed = ( errorInfo: any ) => {
    console.log( 'Failed:', errorInfo )
  }



  const [ value, setValue ] = React.useState( 'Controlled' )

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setValue( event.target.value )
  }
  return (
    <>
      <Container maxWidth="lg">
        <Helmet>
          <title>
            صفحه ساخت منو
          </title>
        </Helmet>
        <Box pt={ 3 } pb={ 5 }>
          <Stack sx={ { width: '100%' } } spacing={ 2 }>
            <MyAlert severity="success">
              Well done! You successfully read this important alert message.
            </MyAlert>
          </Stack>
        </Box>

        <Grid container spacing={ 5 }>
          <Grid item xs={ 12 } md={ 6 }>
            <Card variant="outlined">
              <Grid
                container
                direction="column"
                justifyContent="left"
                alignItems="stretch"
                spacing={ 0 }
              >
                <Box pt={ 2 } pb={ 2 } pl={ 2 }>
                  Add Product Form
                </Box>
                <Divider />
                <Box pt={ 3 } pb={ 2 } pl={ 2 } pr={ 2 }>
                  <Form
                    name="basic"
                    wrapperCol={ { span: 12 } }
                    initialValues={ { remember: true } }
                    onFinish={ onFinish }
                    onFinishFailed={ onFinishFailed }
                    autoComplete="on"
                  >

                    <Box display="flex" flexDirection="column" textAlign="justify" pt={ 1 } pb={ 1 }>
                      <Form.Item
                        name="productName"
                        rules={ [ { message: 'Please input your product name!' } ] }
                        style={ { paddingTop: "10px" } }
                      >
                        <TextField
                          label="Product name"
                          type="text"
                          fullWidth
                        />
                      </Form.Item>
                    </Box>


                    <Box display="flex" flexDirection="row" textAlign="center" justifyContent="space-between" pt={ 1 } pb={ 1 }>

                      <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                          <Form.Item
                            name="text"
                            rules={ [ { message: 'Please input your category!' } ] }
                            style={ {} }
                          >
                            <TextField
                              id="outlined-select-currency"
                              select
                              label="Select Category"
                              value={ currency }
                              onChange={ handleChange }
                              fullWidth

                            >
                              { category.map( ( option ) => (
                                <MenuItem key={ option.value } value={ option.value }>
                                  { option.label }
                                </MenuItem>
                              ) ) }
                            </TextField>
                          </Form.Item>
                        </Grid>
                        <Grid item xs={ 6 }>
                          <Form.Item
                            name="text_2"
                            rules={ [ { message: 'Please input your phone currency!' } ] }
                            style={ {} }
                          >
                            <TextField
                              id="outlined-select-currency"
                              select
                              label="Currency"
                              value={ currency }
                              onChange={ handleChange }
                              fullWidth
                            >
                              { currencies.map( ( option ) => (
                                <MenuItem key={ option.value } value={ option.value }>
                                  { option.label }
                                </MenuItem>
                              ) ) }
                            </TextField>
                          </Form.Item>
                        </Grid>

                      </Grid>

                    </Box>

                    <Box display="flex" flexDirection="row" textAlign="justify" pb={ 1 }>
                      <Grid container columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        <Grid item xs={ 6 }>
                          <Form.Item
                            name="Quantity"
                            rules={ [ { message: 'Please input your Quantity!' } ] }
                            style={ { paddingTop: "10px" } }
                          >
                            <TextField
                              label="Quantity"
                              type="number"
                              fullWidth
                            />
                          </Form.Item>
                        </Grid>
                        <Grid item xs={ 6 }>
                          <Form.Item
                            name="Price"
                            rules={ [ { message: 'Please input your Price!' } ] }
                            style={ { paddingTop: "10px" } }
                          >
                            <TextField
                              label="Price"
                              type="number"
                              fullWidth
                            />
                          </Form.Item>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box display="flex" flexDirection="column" textAlign="justify" pb={ 1 }>
                      <Form.Item
                        name="description"
                        rules={ [ { message: 'Please input your product name!' } ] }
                        style={ { paddingTop: "10px" } }
                      >
                        <TextField
                          id="outlined-multiline-static"
                          label="Food Description"
                          multiline
                          fullWidth
                          rows={ 5 }
                        />
                      </Form.Item>
                    </Box>





                    <Box sx={ { border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: "10px" } } textAlign="center" mt={ 1 } pt={ 1 } pb={ 1 }>
                      <Dragger { ...props }>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                          band files
                        </p>
                      </Dragger>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" textAlign="center">
                      <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
                        <MyButton type="primary" htmlType="submit">
                          Submit
                        </MyButton>
                      </Form.Item>
                    </Box>

                  </Form>
                </Box>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <Card variant="outlined">
              <Grid
                container
                direction="column"
                justifyContent="left"
                alignItems="stretch"
                spacing={ 0 }
              >
                <Box pt={ 2 } pb={ 2 } pl={ 2 }>
                  Product
                </Box>
                <Divider />
                <Box pt={ 3 } pb={ 2 } pl={ 2 }>
                  slider
                </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>


        <BottomNav
          className="pt-5"
          nextStep={ true }
          preStep={ true }
          forLink="/order-type"
          backLink="/theme-select"
          forText="انتخاب نوع سفارش"
          backText="انتخاب تم"
        />
      </Container>
      <Footer />
    </>
  )
}

export default CreateMenu
