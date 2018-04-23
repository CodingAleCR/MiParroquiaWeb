import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card';
// import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

class Priests extends Component {
    state = {}
    render() {
        return (
            <div>
                <Typography variant="headline" gutterBottom>Priests</Typography>
                <Grid container style={{ flexGrow: 1 }}>
                    <Grid item xs={12}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="flex-start">
                            <Grid xs item >
                                <Card>
                                    <CardContent>
                                        
                                    </CardContent>
                                    <CardActions>

                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
    }
}

export default Priests;