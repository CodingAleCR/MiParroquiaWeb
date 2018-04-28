import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
import * as Routes from '../constants/routes'
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DashboardIcon from '@material-ui/icons/ViewQuilt';
import EventsIcon from '@material-ui/icons/InsertInvitation';
import PriestsIcon from '@material-ui/icons/People';
import ChurchesIcon from '@material-ui/icons/Map';
import EucharistsIcon from '@material-ui/icons/Schedule';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountIcon from '@material-ui/icons/AccountCircle';
import SignOutIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

function AdminDrawer(props) {
    const { classes } = props;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }} >
            <div className={classes.toolbar} />
            <List><div>
                <ListItem button component={Link} to={Routes.ADMIN_PAGE}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to={Routes.ADMIN_EVENTS_PAGE}>
                    <ListItemIcon>
                        <EventsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Eventos" />
                </ListItem>
                <ListItem button component={Link} to={Routes.ADMIN_EUCHARISTS_PAGE}>
                    <ListItemIcon>
                        <EucharistsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Misas" />
                </ListItem>
                <ListItem button component={Link} to={Routes.ADMIN_CHURCHES_PAGE}>
                    <ListItemIcon>
                        <ChurchesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mapa Parroquial" />
                </ListItem>
                <ListItem button component={Link} to={Routes.ADMIN_PRIESTS_PAGE}>
                    <ListItemIcon>
                        <PriestsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sacerdotes" />
                </ListItem>
            </div></List>
            <Divider />
            <List>
                <div>
                    <ListItem button component={Link} to={Routes.ADMIN_SETTINGS_PAGE}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configuración" />
                    </ListItem>
                    <ListItem button component={Link} to={Routes.ADMIN_PROFILE_PAGE}>
                        <ListItemIcon>
                            <AccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mi cuenta" />
                    </ListItem>
                    <ListItem button onClick={props.signOut}>
                        <ListItemIcon>
                            <SignOutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Salir" />
                    </ListItem>
                </div>
            </List>
        </Drawer>
    );
}

AdminDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDrawer);