import './App.css';
import React from 'react';
import {Landing} from './Landing';

class VideoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.hasBoosted = false;
  }

  componentDidMount() {
    if (!this.hasBoosted) {
      const video = document.getElementById(this.props.id);
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaElementSource(video);
      const biquadFilter1 = audioContext.createBiquadFilter();
      const biquadFilter2 = audioContext.createBiquadFilter();
      const biquadFilter3 = audioContext.createBiquadFilter();

      biquadFilter1.type = "peaking";
      biquadFilter1.frequency.value = Math.random()*1150+100;
      biquadFilter1.Q.value = Math.random();
      biquadFilter1.gain.value = 40;

      biquadFilter2.type = "lowshelf";
      biquadFilter2.frequency.value = Math.random()*1150+100;
      biquadFilter2.gain.value = Math.random()*20+20;

      biquadFilter3.type = "highshelf";
      biquadFilter3.frequency.value = Math.random()*500+800;
      biquadFilter3.gain.value = Math.random()*40-20;

      source.connect(biquadFilter1);
      biquadFilter1.connect(biquadFilter2);
      biquadFilter2.connect(biquadFilter3);
      biquadFilter3.connect(audioContext.destination);
      this.hasBoosted = true;
    }
  }

  playVideo = () => {
    document.getElementById(this.props.id).play();
  }

  stopVideo = () => {
    document.getElementById(this.props.id).pause();
  }

  render() {
    return (
      <div>
        <video src={this.props.url} id={this.props.id} controls/>
        <button onClick={this.playVideo}>PLAY</button>
        <button onClick={this.stopVideo}>STOP</button>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoUrls: [],
      isLandingComponent: true
    };
  }

  addVideo = () => {
    const selectedFile = document.getElementById('uploader').files[0];
    const objectURL = URL.createObjectURL(selectedFile);
    this.setState((state, props) => ({
      videoUrls: [...state.videoUrls, objectURL]
    }));
  }

  render() {
    if(this.state.isLandingComponent) {
      return (
        <Landing setLandingFalse={this.setLandingFalse} />
      )
    } else {
      return (
        <div className="App">
        <header id="head" className="App-header">
          <div>
            <h1> BASS BOOST </h1>
            <img src="../bassboost.gif"/>
          </div>
          <input type="file" id="uploader" accept="video/*" />
          <button onClick={this.addVideo}>BOOST</button>
          {this.state.videoUrls.map((url, index) => (
            <VideoComponent url={url} key={index} id={'video' + index}/>
          ))}
        </header>
      </div>
      );
    }
  }

  setLandingFalse = () => {
    console.log('iudbiud');
    this.setState(() => ({
      isLandingComponent: false
    }))
  }
}


export default App;
