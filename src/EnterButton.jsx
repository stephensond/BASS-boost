import React, {Component} from 'react';
import GradientButton from 'react-linear-gradient-button';
import './App.jsx'


export class EnterButton extends React.Component {
    render() {
        return(<GradientButton 
            onclick = "./App.jsx" 
            theme="The Blue Lagoon"
            background = "linear-gradient(to right, #43c6ac, #191654)"
            color = "#fff">
                Give me the BASS
            </GradientButton>);
    }
}