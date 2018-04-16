import React from 'react';
import Navigation from './Navigation'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFF",
            contrastText: "#FFC107"
        }
    },
});

const LightAppBar = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Navigation />
        </MuiThemeProvider>
    )
}

export default LightAppBar