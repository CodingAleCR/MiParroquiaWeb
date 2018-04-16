import React from 'react'
import { Parallax } from 'react-parallax'
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import MapIcon from '@material-ui/icons/Map';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';
import bgChurch from '../images/bgChurch.jpg'
import bgCandles from '../images/bgCandles.jpg'
import bgToledoTown from '../images/bgToledoTown.jpg'

const insideStyles = {
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
}

function Home(props) {
    const { theme } = props

    const styles = {
        parallax: {
            size: {
                height: 300
            },
            headline: {
                color: theme.palette.common.white,
            }
        },
        icon: {
            fontSize: 80,
            textAlign: 'center',
            margin: theme.spacing.unit * 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%'
        },
        paper: {
            padding: theme.spacing.unit * 2,
            margin: `${theme.spacing.unit} 0 0 0`,
        },
    }

    return (
        <div>
            <Parallax bgImage={bgChurch} strength={-100}>
                <div style={styles.parallax.size}>
                    <div style={insideStyles}>
                        <Grid container justify="center">
                            <Typography gutterBottom variant="display3" align="center" color="secondary">Conociendo mi parroquia...</Typography>
                            <Typography gutterBottom variant="subheading" align="center" style={styles.parallax.headline}>Puedes revisar los acontecimientos de la parroquia, conocer sus templos e incluso revisar los horarios de Eucaristías en ellos.</Typography>
                            <Button variant="raised" color="secondary">Empezar Ya</Button>
                        </Grid>
                    </div>
                </div>
            </Parallax>
            <Grid container style={{ flexGrow: 1 }}>
                <Grid item xs={12}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="flex-start">
                        <Grid xs item style={styles.paper}>
                            <Card>
                                <NotificationsIcon color="secondary" style={styles.icon} />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">Eventos y Anuncios</Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary">Aprender más</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs item style={styles.paper}>
                            <Card>
                                <AccessTimeIcon color="secondary" style={styles.icon} />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">Horarios de Eucaristía</Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary">Aprender más</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid xs item style={styles.paper}>
                            <Card>
                                <MapIcon color="secondary" style={styles.icon} />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">Mapa Parroquial</Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary">Aprender más</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Parallax bgImage={bgToledoTown} strength={-100}>
                <div style={styles.parallax.size}>
                    <div style={insideStyles}>
                        <Grid container justify="center">
                            <Typography gutterBottom variant="subheading" align="center" style={styles.parallax.headline}>Puedes revisar los acontecimientos de la parroquia, conocer sus templos e incluso revisar los horarios de Eucaristías en ellos.</Typography>
                        </Grid>
                    </div>
                </div>
            </Parallax>
            <h1>Hey</h1>
            <Parallax bgImage={bgCandles} strength={-100}>
                <div style={styles.parallax.size}>
                    <div style={insideStyles}>
                        <Grid container justify="center">
                            <Typography gutterBottom variant="subheading" align="center" style={styles.parallax.headline}>Puedes revisar los acontecimientos de la parroquia, conocer sus templos e incluso revisar los horarios de Eucaristías en ellos.</Typography>
                        </Grid>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

Home.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(Home);