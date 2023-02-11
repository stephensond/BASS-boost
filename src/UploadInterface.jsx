import React, {Component} from 'react';
import {UploadButton} from './UploadButton.jsx';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export class UploadInterface extends React.Component {
    constructor(props){
        super()
    }

    static propTypes = {
        videos: PropTypes.array
    };

    static defaultProps = {
        videos: []
    };

    render() {
        return(
            <header id="head" className="App-header">
                Bass Boosting
                <img alt="bass" src={"../bass.png"} />
                <h1>React File Upload</h1>
                {/* <input type="file" id="uploader" accept="video/*" />
                <button onClick={addVideo}>Upload</button> */}
                <UploadButton />

                <button onClick={BASSBoost}>BASS BOOST</button>
            </header>
        );
    }
 }

 export function addVideo() {
    this.setState({
        videos: []
    })
    for(var selectedFile in document.getElementById('uploader'.file)) {
        UploadInterface.videos.push(selectedFile);
        console.log(selectedFile);
    }
    renderVideos();
 }

 export function renderVideos() {
    for(var file in this.videos) {
        const objectURL = URL.createObjectURL(file);
        const videoElement = document.createElement('video');
        videoElement.src = objectURL;
        videoElement.width="750";
        videoElement.height="500";
        videoElement.controls = true;
        render(document.getElementById('head').appendChild(videoElement))
    }
 }

 export function BASSBoost() {
    const video = document.querySelector('video');
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(video);
    const biquadFilter = audioContext.createBiquadFilter();
  
    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 10000;
    biquadFilter.gain.value = 10;
  
    source.connect(biquadFilter);
    biquadFilter.connect(audioContext.destination);
  }



