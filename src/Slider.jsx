import React, {Component} from 'react';
import './App.jsx'
import AwesomeSlider from 'react-awesome-slider';
import withCaption from 'react-awesome-slider/dist/captioned';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';

const CaptionedSlider = withCaption(AwesomeSlider);

const slider = (
<CaptionedSlider
    startupScreen={StartupScreen}
    cssModule={CaptionedStyles}
    screens={[
    {
        backgroundColor: '#3cd3ad',
        media: '/src/sad.png',
        caption: 'No Bass',
    },
    {
        backgroundColor: '#3cd3ad',
        media: '/src/sad.png',
        caption: "🐟",
    },
    ]}
/>
);