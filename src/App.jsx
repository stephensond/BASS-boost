import './App.css';
import React from 'react';

class VideoComponent extends React.Component {

  componentDidMount() {
    const video = document.getElementById(this.props.id);
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(video);
    const biquadFilter = audioContext.createBiquadFilter();

    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 1000;
    biquadFilter.gain.value = 40;

    source.connect(biquadFilter);
    biquadFilter.connect(audioContext.destination);
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
      videoUrls: []
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


export default App;
