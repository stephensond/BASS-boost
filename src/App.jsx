import React, { useState, useRef } from "react";
import Landing from "./Landing";
import styles from "./app.module.css";

class VideoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.hasBoosted = false;
    this.state = {
      playing: false
    };
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
      biquadFilter1.frequency.value = Math.random()*1100+100;
      biquadFilter1.Q.value = Math.random();
      biquadFilter1.gain.value = -10;

      biquadFilter2.type = "lowshelf";
      biquadFilter2.frequency.value = Math.random()*400+800;
      biquadFilter2.gain.value = Math.random()*20+20;

      biquadFilter3.type = "highshelf";
      biquadFilter3.frequency.value = biquadFilter2.frequency.value;
      biquadFilter3.gain.value = Math.random()*20-10;

      source.connect(biquadFilter1);
      biquadFilter1.connect(biquadFilter2);
      biquadFilter2.connect(biquadFilter3);
      biquadFilter3.connect(audioContext.destination);
      this.hasBoosted = true;
    }
  }

  playVideo = () => {
    document.getElementById(this.props.id).play();
    this.setState((state) => ({
      playing: !state.playing
    }))
  }

  stopVideo = () => {
    document.getElementById(this.props.id).pause();
    this.setState((state) => ({
      playing: !state.playing
    }))
  }

  render() {
    const button = this.state.playing ? (
      <button onClick={this.stopVideo} className={styles.playPauseButton}>
        <div className={styles.playPauseButtonInside}>
          <img
            className={styles.fishImage}
            src="../dead-fish.jpg"
            width="150"
            height="75"
            alt="bass boost"
          />
          <div className={styles.playPauseText}>PAUSE</div>
        </div>
      </button>
    ) : (
      <button onClick={this.playVideo} className={styles.playPauseButton}>
        <div className={styles.playPauseButtonInside}>
          <img
            className={styles.fishImage}
            src="../live-fish.jpg"
            width="150"
            height="75"
            alt="bass boost"
          />
          <div className={styles.playPauseText}>PLAY</div>
        </div>
      </button>
    );

    return (
      <div className={styles.videoPlayer}>
        <video className={styles.video} src={this.props.url} id={this.props.id} controls />
        {button}
      </div>
    )
  }
}

// function VideoComponent({ url, id }) {
//   const [loaded, setLoaded] = useState(false);
//   const [playing, setPlaying] = useState(false);
//   console.log(`fourth ${loaded}`);

//   useEffect(() => {
//     console.log(`first ${loaded}`);
//     if (loaded) {
//       return;
//     }
//     console.log(`second ${loaded}`);
//     const video = document.getElementById(id);
//     const audioContext = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     const source = audioContext.createMediaElementSource(video);
//     const biquadFilter1 = audioContext.createBiquadFilter();
//     const biquadFilter2 = audioContext.createBiquadFilter();
//     const biquadFilter3 = audioContext.createBiquadFilter();

//     biquadFilter1.type = "peaking";
//     biquadFilter1.frequency.value = Math.random() * 1150 + 100;
//     biquadFilter1.Q.value = Math.random();
//     biquadFilter1.gain.value = 40;

//     biquadFilter2.type = "lowshelf";
//     biquadFilter2.frequency.value = Math.random() * 1150 + 100;
//     biquadFilter2.gain.value = Math.random() * 20 + 20;

//     biquadFilter3.type = "highshelf";
//     biquadFilter3.frequency.value = Math.random() * 500 + 800;
//     biquadFilter3.gain.value = Math.random() * 40 - 20;

//     source.connect(biquadFilter1);
//     biquadFilter1.connect(biquadFilter2);
//     biquadFilter2.connect(biquadFilter3);
//     biquadFilter3.connect(audioContext.destination);
//     console.log(`third ${loaded}`);
//     setLoaded(true);
//   }, [loaded, id]);

//   const playVideo = () => {
//     document.getElementById(id).play();
//     setPlaying(true);
//   };

//   const stopVideo = () => {
//     document.getElementById(id).pause();
//     setPlaying(false);
//   };

//   const button = playing ? (
//     <button onClick={stopVideo} className={styles.playPauseButton}>
//       <div className={styles.playPauseButtonInside}>
//         <img
//           className={styles.fishImage}
//           src="../dead-fish.jpg"
//           width="150"
//           height="75"
//           alt="bass boost"
//         />
//         <div className={styles.playPauseText}>PAUSE</div>
//       </div>
//     </button>
//   ) : (
//     <button onClick={playVideo} className={styles.playPauseButton}>
//       <div className={styles.playPauseButtonInside}>
//         <img
//           className={styles.fishImage}
//           src="../live-fish.jpg"
//           width="150"
//           height="75"
//           alt="bass boost"
//         />
//         <div className={styles.playPauseText}>PLAY</div>
//       </div>
//     </button>
//   );

//   return (
//     <div className={styles.videoPlayer}>
//       <video className={styles.video} src={url} id={id} controls />
//       {button}
//     </div>
//   );
// }

// BASS booster
function App() {
  const [videoURLs, setVideoURLs] = useState([]);
  const [landingPage, setLandingPage] = useState(true);

  const uploadRef = useRef(null);

  const addVideo = () => {
    const selectedFile = document.getElementById("uploader").files[0];
    const objectURL = URL.createObjectURL(selectedFile);
    setVideoURLs([objectURL]);
  };

  const fileUpload = () => uploadRef.current.click();

  if (landingPage) {
    return <Landing setLandingFalse={setLandingPage} />;
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>BASS BOOST </div>
          <img
            className={styles.image}
            src="../bassboost.gif"
            alt="bass boost"
            width="100"
            height="100"
          />
        </div>
        <input
          hidden
          ref={uploadRef}
          type="file"
          id="uploader"
          accept="video/*"
          onChange={addVideo}
        />
        <div className={styles.buttons}>
          <button onClick={fileUpload} className={styles.chooseFish}>
            Choose Your Fish
          </button>
        </div>
        {videoURLs.map((url, index) => (
          <VideoComponent
            url={url}
            key={index}
            id={"video" + index}
            loaded={false}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
