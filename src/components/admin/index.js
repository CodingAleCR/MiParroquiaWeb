import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../../common/Navigation';
import AdminDrawer from '../../common/AdminDrawer';
import * as Routes from '../../routes/Routes'
import NotFound from '../../common/NotFound'

import Dashboard from './Dashboard';
import Events from './Events';
import Parishes from './Parishes';
import Priests from './Priests';
import Eucharists from './Eucharists';
import Churches from './Churches';
import Settings from './Settings';
import Profile from './Profile';

import fireapp from '../../fireapp'

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        height: '100vh',
        boxSizing: 'border-box'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class Admin extends Component {
    state = {}

    signOut = () => {
        fireapp.auth().signOut().then(() => {
            console.log("Logged out!")
            this.props.setUser(null)
        });
    }

    render() {
        const { classes } = this.props;

        if (!this.props.user) {
            return (
                <Redirect to={Routes.HOME_PAGE} />
            )
        }

        return (
            <Router>
                <div className={classes.root} >
                    <Navigation type='admin' user={this.props.user} />
                    <AdminDrawer signOut={this.signOut} />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Switch>
                            <Route exact path={Routes.ADMIN_PAGE} component={() => <Dashboard user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_EVENTS_PAGE} component={() => <Events user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_EUCHARISTS_PAGE} component={() => <Eucharists user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_PARISHES_PAGE} component={() => <Parishes user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_PRIESTS_PAGE} component={() => <Priests user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_CHURCHES_PAGE} component={() => <Churches user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_SETTINGS_PAGE} component={() => <Settings user={this.props.user} />} />
                            <Route exact path={Routes.ADMIN_PROFILE_PAGE} component={() => <Profile user={this.props.user} />} />
                            <Route exact component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
}

export default withStyles(styles)(Admin);