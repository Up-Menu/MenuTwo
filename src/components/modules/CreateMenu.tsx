import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Container, IconButton, TextField, Typography } from '@mui/material'
import { Button, Form, Space, message, Upload } from 'antd'
import React from 'react'
import type { UploadProps } from 'antd'
import styled from 'styled-components'
import BottomNav from './BottomNav'
import Footer from '../Footer'
import DeleteIcon from '@mui/icons-material/Delete'


const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange ( info ) {
    if ( info.file.status !== 'uploading' ) {
      console.log( info.file, info.fileList )
    }
    if ( info.file.status === 'done' ) {
      message.success( `${ info.file.name } file uploaded successfully` )
    } else if ( info.file.status === 'error' ) {
      message.error( `${ info.file.name } file upload failed.` )
    }
  },
}

const MyButton = styled( Button )`
display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    border-radius: 6px;
    font-weight: 600;
    font-family: iransans, sans-serif;
    font-size: 0.8125rem;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    padding: 4px 5px;
    border-radius: 10px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #8C7CF0;
    font-weight: bold;
    text-transform: none;
    padding-left: 16px;
    padding-right: 16px;
    padding: 6px 16px;
    line-height: 1.5;
    padding: 7px 12px;
&:hover{
  background-color:rgba(140, 124, 240, 0.1);
}
`

const CreateMenu: React.FC = () => {
  const onFinish = ( values: any ) => {
    console.log( 'Received values of form:', values )
  }

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" pt={ 2 } pb={ 2 } display="flex" flexDirection="column" textAlign="center">
          Create Your Own:
        </Typography>
        <Form name="dynamic_form_nest_item" onFinish={ onFinish } autoComplete="off">
          <Form.List name="menu">
            { ( fields, { add, remove } ) => (
              <>
                { fields.map( ( { key, name, ...restField } ) => (
                  <Space key={ key } style={ { display: 'flex', marginBottom: 8 } } align="baseline">
                    <Form.Item
                      { ...restField }
                      name={ [ name, 'foodName' ] }
                      rules={ [ { required: true, message: 'Missing food name' } ] }
                    >
                      {/* <Input placeholder="Food Name" /> */ }
                      <TextField
                        required
                        id="outlined-required"
                        label="Food Name"
                      />
                    </Form.Item>
                    <Form.Item
                      { ...restField }
                      name={ [ name, 'price' ] }
                      rules={ [ { required: true, message: 'Missing Price' } ] }
                    >
                      {/* <Input placeholder="Price" /> */ }
                      <TextField
                        required
                        id="outlined-required"
                        label="Price"
                      />
                    </Form.Item>
                    <Form.Item
                      { ...restField }
                      name={ [ name, 'image' ] }
                      rules={ [ { required: true, message: 'Missing image' } ] }
                    >
                      <Upload { ...props }>
                        <MyButton icon={ <UploadOutlined /> }>Click to Upload</MyButton>
                      </Upload>
                    </Form.Item>
                    <IconButton
                      onClick={ () => remove( name ) }
                      aria-label="delete"
                      sx={ { margin: 1 } }>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Space>
                ) ) }
                <Form.Item>
                  <MyButton type="dashed" onClick={ () => add() } block icon={ <PlusOutlined /> }>
                    Add field
                  </MyButton>
                </Form.Item>
              </>
            ) }
          </Form.List>
          <Form.Item>
            <MyButton type="primary" htmlType="submit">
              Submit
            </MyButton>
          </Form.Item>
        </Form>
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
