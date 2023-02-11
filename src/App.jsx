import './App.css';
import video from './video.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Bass Boosting
        <img alt="bass" src={"../bass.png"} />
        <form>
          <h1>React File Upload</h1>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
        <video src={video} width="750" height="500" controls>
        </video>
      </header>
    </div>
  );
}

export default App;
