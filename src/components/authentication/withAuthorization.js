import React from 'react'
import { withRouter } from 'react-router-dom'

import { auth } from '../../firebase'
import * as Routes from '../../constants/routes'
import AuthenticationContext from './AuthenticationContext'

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(user => {
        if (!authCondition(user)) {
          this.props.history.push(Routes.SIGN_IN_PAGE)
        }
      })
    }

    render() {
      return (
        <AuthenticationContext.Consumer>
          {user => (user ? <Component /> : null)}
        </AuthenticationContext.Consumer>
      )
    }
  }

  return withRouter(WithAuthorization)
}

export default withAuthorization
