import { Helmet } from 'react-helmet-async'
import {
    Container,
    Grid,
    Card,
    CardHeader,
    Divider,
    Typography,
    Checkbox,
    Box
} from '@mui/material'
import { Link, NavLink as RouterLink } from 'react-router-dom'
import Footer from 'src/components/Footer'
import TextField from '@mui/material/TextField'
import { pink } from '@mui/material/colors'
import { Form } from 'antd'
import { userLogin } from 'src/store/actions'
import { useTypedDispatch } from 'src/store'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Toaster } from 'react-hot-toast'
import MyButton from 'src/components/UI/Button/MyButton'
import { Google } from './GoogleSSO'


// const faPropIcon = faGoogle as IconProp



const label = { inputProps: { 'aria-label': 'Switch demo' } }
const Login = () => {
    const dispatch = useTypedDispatch()
    const onFinish = ( values: any ) => {
        dispatch( userLogin( { ...values }, notification => notification ) )
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
                                            to="/signin">
                                            Oops I do not have an account!
                                        </Typography>
                                        <Box pb={ 2 } pt={ 1 } display="flex" flexDirection="row" justifyContent="center" alignItems="center" textAlign="center">
                                            <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
                                                <MyButton type="primary" htmlType="submit">
                                                    LogIn
                                                </MyButton>
                                            </Form.Item>
                                            <Divider orientation="vertical" flexItem>
                                            </Divider>
                                            <Box pt={ 0.5 } pl={ 1 }>
                                                <Google />
                                            </Box>
                                        </Box>
                                    </Form>
                                    {/* <Box pl={ 1 }>
                                        <MaterialButton
                                            component={ RouterLink }
                                            to="/signin"
                                            startIcon={ <FontAwesomeIcon icon={ faPropIcon } /> }
                                        />
                                    </Box> */}
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

