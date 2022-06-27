import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import Footer from '../Footer'
import BottomNav from './BottomNav'
import { ThemesList } from './Themes'

const ThemeSelection = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Helmet>
                    <title>Tasks Dashboard</title>
                </Helmet>
                <main>
                    <Typography variant="h3" pt={ 2 } pb={ 2 } display="flex" flexDirection="column" textAlign="center">
                        Chose your theme from store:
                    </Typography>
                    <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                        {
                            ThemesList.map( ( data: any ) => (
                                <Grid item xs={ 12 } md={ 6 } key={ data.id }>
                                    <Card sx={ {} }>
                                        <CardMedia
                                            sx={ { height: 140 } }
                                            image={ data.image }
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { data.name }
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                { data.desc }
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">
                                                Active
                                            </Button>
                                            <Button size="small">
                                                Preview
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ) )
                        }
                    </Grid>
                </main>
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

export default ThemeSelection