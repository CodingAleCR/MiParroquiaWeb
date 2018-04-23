import React, { Component } from 'react';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navigation type='landing' />
                <h1>About</h1>
                <Footer />
            </div>
        )
    }
}