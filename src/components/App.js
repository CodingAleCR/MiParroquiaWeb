import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from '../routes/Routes'
import base from '../base'
import fireapp from '../fireapp'

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
  state = {
    user: null
  }

  componentDidMount() {
    fireapp.auth().onAuthStateChanged(user => {
      if (user) {
        base.listenToDoc(`users/${user.uid}`, {
          context: this,
          then(data) {
            const userLogged = {
              uid: user.uid,
              email: data.email,
              role: data.role,
              parish: data.parish,
            }
            this.setUser(userLogged)
          },
          onFailure(err) {
            this.setUser(null)
          }
        })
      }
    })
  }

  setUser = (userLogged) => {
    var user = { ...this.state.user }

    user = userLogged

    this.setState({ user })
  }

  render() {
    const landing = (
      <div>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path={Routes.HOME_PAGE} component={() => <Home user={this.state.user} />} />
            <Route exact path={Routes.SIGN_IN_PAGE} component={() => <Login setUser={this.setUser} user={this.state.user} />} />
            <Route exact path={Routes.ABOUT_PAGE} component={() => <About user={this.state.user} />} />
            <Route exact path={Routes.ADMIN_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_EVENTS_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_EUCHARISTS_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_PARISHES_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_PRIESTS_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_CHURCHES_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_SETTINGS_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
            <Route exact path={Routes.ADMIN_PROFILE_PAGE} component={() => <Admin user={this.state.user} setUser={this.setUser} />} />
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

export default App;
