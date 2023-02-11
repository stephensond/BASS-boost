import './App.css';
import video from './movie.mp4';

function BASSBoost() {
  const video = document.querySelector('video');
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(video);
  const biquadFilter = audioContext.createBiquadFilter();

  biquadFilter.type = "lowshelf";
  biquadFilter.frequency.value = 100;
  biquadFilter.gain.value = 10;

  source.connect(biquadFilter);
  biquadFilter.connect(audioContext.destination);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Bass Boosting
        <img alt="bass" src={"../bass.png"} />
        <video className="video" src={video} width="750" height="500" controls></video>
        <form>
          <h1>React File Upload</h1>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
        <button onClick={BASSBoost}/>
      </header>
    </div>
  );
}

export default App;
