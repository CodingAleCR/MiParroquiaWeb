import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from '../constants/routes'
import withAuthentication from './authentication/withAuthentication'

import Home from './landing/index'
import Admin from './admin/index'
import About from './about/About'
import Login from "./authentication/Login";
import NotFound from '../common/NotFound'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4CAF50",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#FFC107",
      contrastText: "#FFF"
    },
    // secondary: {
    //   main: "#2364aa",
    //   contrastText: "#FFF"
    // },
    // accent: {
    //   main: "#FFC107",
    //   contrastText: "#FFF"
    // },
  },
});



class App extends Component {
  render() {
    const landing = (
      <div>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path={Routes.HOME_PAGE} component={() => <Home />} />
            <Route exact path={Routes.SIGN_IN_PAGE} component={() => <Login />} />
            <Route exact path={Routes.ABOUT_PAGE} component={() => <About />} />
            <Route exact path={Routes.ADMIN_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_EVENTS_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_EUCHARISTS_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_PARISHES_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_PRIESTS_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_CHURCHES_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_SETTINGS_PAGE} component={() => <Admin />} />
            <Route exact path={Routes.ADMIN_PROFILE_PAGE} component={() => <Admin />} />
            <Route exact component={NotFound} />
          </Switch>
        </MuiThemeProvider>
      </div>)

    return (
      <Router>
        {landing}
      </Router>
    );
  }
}

export default withAuthentication(App);
