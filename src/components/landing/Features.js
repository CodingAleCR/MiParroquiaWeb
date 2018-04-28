import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import MapIcon from '@material-ui/icons/Map'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import { withTheme } from 'material-ui/styles'

function Features(props) {
  const { theme } = props

  const styles = {
    icon: {
      fontSize: 80,
      textAlign: 'center',
      margin: theme.spacing.unit * 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: `${theme.spacing.unit} 0 0 0`,
    },
  }
  return (
    <Grid container style={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid xs={12} sm={12} md={4} lg={4} item style={styles.paper}>
            <Card>
              <NotificationsIcon color="secondary" style={styles.icon} />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Eventos y Anuncios
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Aprender más
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} item style={styles.paper}>
            <Card>
              <AccessTimeIcon color="secondary" style={styles.icon} />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Horarios de Eucaristía
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Aprender más
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} item style={styles.paper}>
            <Card>
              <MapIcon color="secondary" style={styles.icon} />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Mapa Parroquial
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Aprender más
                </Button>
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
}

export default withTheme()(Features)
