import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Redirect } from 'react-router-dom';
import { ADMIN_PAGE } from '../../routes/Routes';
import Navigation from '../../common/Navigation';
import base from '../../base'
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
    paper: {
        padding: theme.spacing.unit * 2,
        margin: `${theme.spacing.unit} 0 0 0`,
        backgroundColor: 'white'
    },
});

class Login extends Component {
    state = {
        username: null,
        password: null,
        logged: false,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    loginToApp = (event) => {
        event.preventDefault();
        const email = this.state.username
        const password = this.state.password
        fireapp.auth().signInWithEmailAndPassword(email, password).then(user => {
            if (user) {
                this.props.setUser(user)
            } else {
                this.resetLoginForm()
            }
        });
    }

    resetLoginForm() {
        this.setState({
            password: null
        });
    }

    renderLoginForm = () => {
        return (
            <Grid xs={4} item style={styles.paper}>
                <Card>
                    <form onSubmit={(e) => this.loginToApp(e)}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">Ingresar a MiParroquia</Typography>

                            <TextField
                                id="username"
                                label="Username"
                                value={this.username}
                                onChange={this.handleChange('username')}
                                className={this.props.classes.textField}
                                margin="normal"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                label="Password"
                                onChange={this.handleChange('password')}
                                className={this.props.classes.textField}
                                margin="normal"
                                type="password"
                                fullWidth
                            />
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="secondary" type='submit'>Ingresar</Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        )
    }

    render() {
        if (this.props.user) {
            return <Redirect to={ADMIN_PAGE} />
        }

        return (
            <div className={this.props.classes.root} >
                <Navigation type='admin' />
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar} />
                    <Grid container style={{ flexGrow: 1 }}>
                        <Grid item xs={12}>
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="flex-start">
                                {this.renderLoginForm()}
                            </Grid>
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };
}

export default withStyles(styles)(Login);