import React from 'react'
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withTheme } from 'material-ui/styles';

function Features(props) {
    const { theme } = props

    const styles = {
        paper: {
            padding: theme.spacing.unit * 2,
            margin: `${theme.spacing.unit} 0 0 0`,
        },
    }
    return (
        <Grid container style={{ flexGrow: 1 }}>
            <Grid item xs={12}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="flex-start">
                    <Grid xs item style={styles.paper}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">Algo más que una aplicación...</Typography>
                                <Typography component="p">
                                    Con Mi Parroquia, no solamente las personas interesadas podrán ver toda la información parroquial 
                                    sino que también, la parroquia podrá mejorar la manera en que gestionan todo ese tipo de información,
                                    llegando hasta los rincones más alejados del casco central parroquial, todo gracias al sistema de administración
                                    que Mi Parroquia ofrece.
                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary">Quiero ver una demostración</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Features.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(Features)