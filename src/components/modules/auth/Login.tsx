import { Helmet } from 'react-helmet-async'

import {
    Container,
    Grid,
    Card,
    CardHeader,
    Divider,
    Typography,
    Checkbox,
    Box,
    Button as MaterialButton
} from '@mui/material'
import { Link, NavLink as RouterLink } from 'react-router-dom'
import Footer from 'src/components/Footer'
import TextField from '@mui/material/TextField'
import { pink } from '@mui/material/colors'
import styled from 'styled-components'
import { Button, Form } from 'antd'
import { userLogin } from 'src/store/actions'
import { useTypedDispatch } from 'src/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { promiseNotify } from '../Notification/Notification'
import { Toaster } from 'react-hot-toast'


const faPropIcon = faGoogle as IconProp

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
    font-size: 0.875rem;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    padding: 5px 15px;
    border-radius: 10px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(140, 124, 240, 0.5);
    color: #8C7CF0;
    font-weight: bold;
    text-transform: none;
    padding-left: 16px;
    padding-right: 16px;
    padding: 8px 20px;
    margin: 9px;
&:hover{
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: rgba(140, 124, 240, 0.1);
    border: 1px solid #8C7CF0
}

`

const label = { inputProps: { 'aria-label': 'Switch demo' } }
const Login = () => {
    const dispatch = useTypedDispatch()

    const onFinish = ( values: any ) => {
        const myPromise = dispatch( userLogin( { ...values } ) )
        promiseNotify( myPromise, {
            loading: 'در حال دریافت اطلاعات',
            success: '!خوش آمدید',
            error: 'خطا در دریافت اطلاعات',
        } )
        myPromise.then( () => {
            const timer = setTimeout( () => window.location.replace( '/dashboards' )
                , 2000 )
            return () => clearTimeout( timer )
        } )
        myPromise.catch(
            ( err ) => {
                console.log( err )
            }
        )
    }

    const onFinishFailed = ( errorInfo: any ) => {
        console.log( 'Failed:', errorInfo )
    }
    return (
        <>
            <Toaster />
            <Helmet>
                <title>LogIn page</title>
            </Helmet>
            <Container maxWidth="lg">
                <Box pt={ 17 }>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={ 3 }
                    >
                        <Grid item xs={ 12 } >
                            <Card>
                                <Box justifyContent="space-between" flexDirection="row" display="flex" textAlign="center">
                                    <Link to="/">
                                        <CardHeader title="Go home!" />
                                    </Link>
                                    <CardHeader title="Log-In Page" />
                                </Box>
                                <Divider />
                                <Typography variant="h3" pt={ 2 } pb={ 2 } />

                                <Box flexDirection="column" display="flex" textAlign="center">
                                    <Form
                                        name="basic"
                                        wrapperCol={ { span: 6 } }
                                        initialValues={ { remember: true } }
                                        onFinish={ onFinish }
                                        onFinishFailed={ onFinishFailed }
                                        autoComplete="on"
                                    >




                                        <Box display="flex" flexDirection="row" textAlign="center" justifyContent="center" pt={ 1 } pb={ 1 }>
                                            <Form.Item
                                                name="email"
                                                rules={ [ { required: true, message: 'Please input your username!' } ] }
                                                style={ { paddingRight: "10px" } }
                                            >
                                                <TextField
                                                    required
                                                    label="Username"
                                                    type="text"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                rules={ [ { required: true, message: 'Please input your phone password!' } ] }
                                                style={ { paddingRight: "10px" } }
                                            >
                                                <TextField
                                                    required
                                                    id="outlined-password-input"
                                                    label="Password"
                                                    type="password"
                                                />
                                            </Form.Item>

                                        </Box>





                                        <Box display="flex" flexDirection="row-reverse" justifyContent="center" alignItems="baseline" textAlign="center">
                                            <Form.Item name="remember" valuePropName="checked" wrapperCol={ { offset: 8, span: 16 } }>
                                                <Checkbox
                                                    { ...label }
                                                    defaultChecked
                                                    sx={ {
                                                        color: pink[ 800 ],
                                                        '&.Mui-checked': {
                                                            color: pink[ 600 ]
                                                        }
                                                    } }
                                                />
                                            </Form.Item>
                                            <span>Remember me:</span>
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            component={ RouterLink }
                                            to="/signup">
                                            Oops I do not have an account!
                                        </Typography>
                                        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" textAlign="center">
                                            <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
                                                <MyButton type="primary" htmlType="submit">
                                                    LogIn
                                                </MyButton>
                                            </Form.Item>
                                            <Divider orientation="vertical" flexItem>

                                            </Divider>
                                            <Box pl={ 1 }>
                                                <MaterialButton

                                                    component={ RouterLink }
                                                    to="/signup"
                                                    startIcon={ <FontAwesomeIcon icon={ faPropIcon } /> }
                                                />
                                            </Box>
                                        </Box>
                                    </Form>

                                </Box>

                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default Login

