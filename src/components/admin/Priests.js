import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import { app } from '../../firebase'
import { PRIESTS } from '../../constants/collections'

import withAuthorization from '../authentication/withAuthorization'
import AuthenticationContext from '../authentication/AuthenticationContext'
import CustomTable from '../custom/CustomTable'

class PriestsTable extends Component {
  state = {
    priests: [],
  }

  componentDidMount() {
    app
      .firestore()
      .collection(PRIESTS)
      .where('parish', '==', this.props.user.parish)
      .onSnapshot(
        snapshot => {
          this.parsePriests(snapshot.docs)
        },
        error => {
          console.log(error)
        }
      )
  }

  parsePriests(documents) {
    const priests = []
    documents.forEach(doc => {
      const priest = doc.data()
      priest.id = doc.id
      priests.push(priest)
    })

    this.setState({ priests })
  }

  renderRow = key => {
    const priest = this.state.priests[key]
    return <PriestRow key={key} priest={priest} />
  }

  render() {
    const columns = [
      {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre Completo',
      },
      {
        id: 'email',
        numeric: true,
        disablePadding: false,
        label: 'Email',
      },
      {
        id: 'phonenumber',
        numeric: true,
        disablePadding: false,
        label: '# Teléfono',
      },
      {
        id: 'birthday',
        numeric: true,
        disablePadding: false,
        label: 'Fecha de nacimiento',
      },
    ]

    return (
      <CustomTable name="Priests" columns={columns} data={this.state.priests} />
    )
  }
}

function PriestRow(props) {
  const { key, priest } = props
  return <li key={key}>{priest.name}</li>
}

const Priests = () => (
  <AuthenticationContext.Consumer>
    {user => (
      <div>
        <Grid container style={{ flexGrow: 1 }}>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid xs item>
                <PriestsTable user={user} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )}
  </AuthenticationContext.Consumer>
)

const authCondition = user => !!user

export default withAuthorization(authCondition)(Priests)
