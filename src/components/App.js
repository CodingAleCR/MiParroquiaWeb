import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from '../common/Routes'

import Home from './Home'
import About from './About'
import LightAppBar from './LightAppBar'
import Footer from './Footer'
import NotFound from './NotFound'

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
    return (
      <Router>
        <div>
          <LightAppBar />
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path={Routes.HOME_PAGE} component={Home} />
              <Route exact path={Routes.ABOUT_PAGE} component={About} />
              <Route exact component={NotFound} />
            </Switch>
          </MuiThemeProvider>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
