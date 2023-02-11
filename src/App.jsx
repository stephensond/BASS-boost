import './App.css';
import './VideoModule.jsx';
import {UploadInterface} from './UploadInterface.jsx';

var moduleList = [];

// function addVideo() {
    
//     console.log(selectedFile);
//     const objectURL = URL.createObjectURL(selectedFile);
//     const videoElement = document.createElement('video');
//     videoElement.src = objectURL;
//     videoElement.width="750";
//     videoElement.height="500";
//     videoElement.controls = true;
//     document.getElementById('head').appendChild(videoElement);

//  }
  // const selectedFile = document.getElementById('uploader').files[0];



function App() {


  return (
    <div className="App">
      <UploadInterface />
    </div>
  );
}

export default App;
