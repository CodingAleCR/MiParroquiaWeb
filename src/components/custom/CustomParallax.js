import React from 'react'
import { Parallax } from 'react-parallax'
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withTheme } from 'material-ui/styles';

const headlineStyle = {
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
}

const CustomParallax = (props) => {
    const styles = {
        parallax: {
            size: {
                height: 300
            },
            headline: {
                color: "#FFF",
            }
        },
    }

    return (
        <Parallax bgImage={props.image} strength={-100}>
            <div style={styles.parallax.size}>
                <div style={headlineStyle}>
                    <Grid container justify="center">
                        <Typography gutterBottom variant="display3" align="center" color="secondary">{props.header}</Typography>
                        <Typography gutterBottom variant="subheading" align="center" style={styles.parallax.headline}>{props.subheader}</Typography>
                        {props.button}
                    </Grid>
                </div>
            </div>
        </Parallax>
    )
}

CustomParallax.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string,
    subheader: PropTypes.string.isRequired,
    button: PropTypes.object
};

export default withTheme()(CustomParallax);