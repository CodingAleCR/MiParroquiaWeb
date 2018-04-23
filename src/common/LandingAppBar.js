import React from 'react';
import { Link } from 'react-router-dom'
import * as Routes from '../routes/Routes'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    }
};

const LandingAppBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Mi Parroquia
                    </Typography>
                    <Button component={Link} to={Routes.HOME_PAGE} color="inherit">Inicio</Button>
                    <Button component={Link} to={Routes.ABOUT_PAGE} color="inherit">Conócenos</Button>
                    <Button component={Link} to={Routes.SIGN_IN_PAGE} color="inherit">Ingresa</Button>
                    <Button component={Link} to={Routes.ADMIN_PAGE} color="inherit">Admin</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

LandingAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingAppBar);
