import { Helmet } from 'react-helmet-async'

import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider
} from '@mui/material'
import Footer from 'src/components/Footer'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
const Login = () => {
    return (
        <>
            <Helmet>
                <title>Forms - Components</title>
            </Helmet>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={ 3 }
                >
                    <Grid item xs={ 12 }>
                        <Card>
                            <CardHeader title="Log-In Page" />
                            <Divider />
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={ {
                                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                                    } }
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Username"
                                    />
                                    <TextField
                                        required
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default Login