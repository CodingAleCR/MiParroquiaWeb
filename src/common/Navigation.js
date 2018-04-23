import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import LandingAppBar from './LandingAppBar'
import AdminAppBar from './AdminAppBar';

const landingTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFF",
            contrastText: "#FFC107"
        }
    },
});

const adminTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#263238",
            contrastText: "#FFF"
        }
    },
});

class Navigation extends Component {
    state = {

    }

    render() {
        var appbar
        var theme

        if (this.props.type === 'admin') {
            appbar = <AdminAppBar user={this.props.user} />
            theme = adminTheme
        }
        if (this.props.type === 'landing') {
            appbar = <LandingAppBar user={this.props.user} />
            theme = landingTheme
        }
        return (
            <MuiThemeProvider theme={theme}>
                {appbar}
            </MuiThemeProvider>
        )
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
    }
}

export default Navigation