import './App.css';

function addVideo() {
  const selectedFile = document.getElementById('uploader').files[0];
  console.log(selectedFile);
  const objectURL = URL.createObjectURL(selectedFile);
  const videoElement = document.createElement('video');
  videoElement.src = objectURL;
  videoElement.width="750";
  videoElement.height="500";
  videoElement.controls = true;
  document.getElementById('head').appendChild(videoElement);
}

function BASSBoost() {
  const video = document.querySelector('video');
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(video);
  const biquadFilter = audioContext.createBiquadFilter();

  biquadFilter.type = "lowshelf";
  biquadFilter.frequency.value = 1000;
  biquadFilter.gain.value = 40;

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
        <input type="file" id="uploader" accept="video/*" />
        <button onClick={addVideo}>Upload</button>
        <button onClick={BASSBoost}>BASS BOOST</button>
      </header>
    </div>
  );
}

export default App;
