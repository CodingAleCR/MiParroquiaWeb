import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { ADMIN_PAGE } from '../../constants/routes';
import Navigation from '../../common/Navigation';
import { auth } from '../../firebase';

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
        error: null
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
        auth.doSignInWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    this.props.history.push(ADMIN_PAGE);
                } else {
                    this.resetLoginForm()
                }
            }).catch(error => {
                this.setState({
                    'error': error,
                });
            });;
    }

    resetLoginForm() {
        this.setState({
            password: null
        });
    }

    renderLoginForm = () => {
        const { classes } = this.props

        const isInvalid = this.password === ''
            || this.username === '';

        return (
            <Grid xs={4} item style={styles.paper}>
                <Card>
                    <form onSubmit={this.loginToApp}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">Ingresar a MiParroquia</Typography>
                            <TextField
                                id="username"
                                label="Username"
                                value={this.username}
                                onChange={this.handleChange('username')}
                                className={classes.textField}
                                margin="normal"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                label="Password"
                                value={this.password}
                                onChange={this.handleChange('password')}
                                className={classes.textField}
                                margin="normal"
                                type="password"
                                fullWidth
                            />
                            {this.error && <p>{this.error.message}</p>}
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="secondary" type='submit' disabled={isInvalid}>Ingresar</Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        )
    }

    render() {
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

export default withRouter(withStyles(styles)(Login));