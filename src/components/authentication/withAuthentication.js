import React from 'react'
import { USERS } from '../../constants/collections'
import { auth, app } from '../../firebase'
import AuthenticationContext from './AuthenticationContext'

const withAuthentication = Component => {
  const INITIAL_STATE = {
    user: null,
  }

  class WithAuthentication extends React.Component {
    state = INITIAL_STATE

    setUser = userLogged => {
      let user = { ...this.state.user }

      user = userLogged

      this.setState({ user })
    }

    componentDidMount() {
      auth.onAuthStateChanged(user => {
        if (user) {
          // app
          //   .firestore()
          //   .collection(USERS)
          //   .doc(user.uid)
          //   .onSnapshot(
          //     snapshot => {
          //       const userLogged = snapshot.data()
          //       userLogged.uid = user.uid
          //       this.setUser(userLogged)
          //     },
          //     error => {
          //       console.log(error)
          //     }
          // )
          const userLogged = {
            uid: user.uid,
            email: 'alejandroulate@gmail.com',
            role: 'guest',
            parish: '1Qa2TnHj8zC3hmaImUGw',
          }
          this.setUser(userLogged)
        } else {
          this.setUser(null)
        }
      })
    }

    render() {
      const { user } = this.state

      return (
        <AuthenticationContext.Provider value={user}>
          <Component />
        </AuthenticationContext.Provider>
      )
    }
  }

  return WithAuthentication
}

export default withAuthentication
