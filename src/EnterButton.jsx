import React, {Component} from 'react';
import GradientButton from 'react-linear-gradient-button';
import {App} from './App.jsx'


export class EnterButton extends React.Component {
    render() {
        return(<GradientButton 
            onClick = {() => this.props.setLandingFalse(false)}
            theme ="The Blue Lagoon"
            background = "linear-gradient(to right, #43c6ac, #191654)"
            color = "#fff"
            className = {this.props.className}>
                Give me the BASS
            </GradientButton>);
    }
}

