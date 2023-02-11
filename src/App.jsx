import './App.css';
import './VideoModule.jsx'

var moduleList = [];

function addVideo() {
  for(selectedFile in files) {
    moduleList.push(selectedFile)
    console.log(selectedFile);
    const objectURL = URL.createObjectURL(selectedFile);
    const videoElement = document.createElement('video');
    videoElement.src = objectURL;
    videoElement.width="750";
    videoElement.height="500";
    videoElement.controls = true;
    document.getElementById('head').appendChild(videoElement);
  }
  // const selectedFile = document.getElementById('uploader').files[0];

}

function BASSBoost() {
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

function App() {


  return (
    <div className="App">
      <header id="head" className="App-header">
        Bass Boosting
        <img alt="bass" src={"../bass.png"} />
        <h1>React File Upload</h1>
        {/* <input type="file" id="uploader" accept="video/*" />
        <button onClick={addVideo}>Upload</button>
        <button onClick={BASSBoost}>BASS BOOST</button> */}
      </header>
    </div>
  );
}

export default App;
