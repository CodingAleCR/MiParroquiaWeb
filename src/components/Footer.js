import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withTheme } from 'material-ui/styles';

function Footer(props) {
    const { theme } = props;

    const styles = {
        footer: {
            container: {
                backgroundColor: '#FFC107',
            },
            text: {
                color: theme.palette.common.white,
            },
            paragraph: {
                color: theme.palette.common.white,
                lineHeight: '2rem',
            }
        },
        contactInfo: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            color: theme.palette.common.white,

        },
        social: {
            'listStyleType': 'none',
            padding: '0',
        },
        copyright: {
            backgroundColor: 'rgba(51,51,51,0.08)',
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            color: theme.palette.common.white,
        },
    };

    return (
        <Grid container style={styles.footer.container} justify="center">
            <Grid container justify="center">
                <Grid item xs={6} style={styles.contactInfo} >
                    <Typography style={styles.footer.text} variant="headline" component="h5">
                        ¿Te interesa que aparezca tu parroquia aquí?
                </Typography>
                    <Typography style={styles.footer.paragraph} component="p">
                        Si conoces quieres que la información de tu parroquia aparezca aquí
                        escríbenos al correo info@miparroquia.cr o llámanos al número +506 2345-4321.
                </Typography>
                </Grid>
                <Grid item xs={4} style={styles.contactInfo}>
                    <Typography style={styles.footer.text} variant="headline" component="h5">
                        Búscanos
                </Typography>
                    <ul style={styles.social}>
                        <li><Button style={styles.footer.text}>Facebook</Button></li>
                        <li><Button style={styles.footer.text}>Instagram</Button></li>
                        <li><Button style={styles.footer.text}>GooglePlay</Button></li>
                        <li><Button style={styles.footer.text}>AppStore</Button></li>
                    </ul>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={12} style={styles.copyright}>
                    <Typography style={styles.footer.text} component="p">
                        Made by <a style={{ color: '#CCC' }} href="http://www.google.com">Effeta Costa Rica</a>.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

Footer.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(Footer);