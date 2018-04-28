import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from '../../common/Navigation'
import AdminDrawer from '../../common/AdminDrawer'
import * as Routes from '../../constants/routes'
import NotFound from '../../common/NotFound'

import Dashboard from './Dashboard'
import Events from './Events'
import Parishes from './Parishes'
import Priests from './Priests'
import Eucharists from './Eucharists'
import Churches from './Churches'
import Settings from './Settings'
import Profile from './Profile'

import { auth } from '../../firebase'
import AuthenticationContext from '../authentication/AuthenticationContext'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100vh',
    boxSizing: 'border-box',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

class Admin extends Component {
  state = {}

  signOut = () => {
    auth.doSignOut().then(() => {
      this.props.history.push(Routes.HOME_PAGE)
    })
  }

  render() {
    const { classes } = this.props

    return (
      <AuthenticationContext.Consumer>
        {user => {
          if (!user) {
            this.props.history.push(Routes.SIGN_IN_PAGE)
          }
          return (
            <Router>
              <div className={classes.root}>
                <Navigation type="admin" />
                <AdminDrawer signOut={this.signOut} />
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Switch>
                    <Route
                      exact
                      path={Routes.ADMIN_PAGE}
                      component={() => <Dashboard />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_EVENTS_PAGE}
                      component={() => <Events />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_EUCHARISTS_PAGE}
                      component={() => <Eucharists />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_PARISHES_PAGE}
                      component={() => <Parishes />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_PRIESTS_PAGE}
                      component={() => <Priests />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_CHURCHES_PAGE}
                      component={() => <Churches />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_SETTINGS_PAGE}
                      component={() => <Settings />}
                    />
                    <Route
                      exact
                      path={Routes.ADMIN_PROFILE_PAGE}
                      component={() => <Profile />}
                    />
                    <Route exact component={NotFound} />
                  </Switch>
                </main>
              </div>
            </Router>
          )
        }}
      </AuthenticationContext.Consumer>
    )
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
}

export default withRouter(withStyles(styles)(Admin))
