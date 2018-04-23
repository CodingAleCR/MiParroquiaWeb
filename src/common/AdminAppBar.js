import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
});

function AdminAppBar(props) {
    const { classes } = props;

    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit">
                    MiParroquia
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

AdminAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminAppBar);