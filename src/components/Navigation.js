import React from 'react';
import { Link } from 'react-router-dom'
import * as Routes from '../common/Routes'
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

function Navigation(props) {
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
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
