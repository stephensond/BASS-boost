import React, { useEffect, useState, useRef } from "react";
import styles from "./app.module.css";

function VideoComponent({ url, id }) {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    const video = document.getElementById(id);
    const audioContext = window.AudioContext;
    console.log(video);
    const source = audioContext.createMediaElementSource(video);
    const biquadFilter = audioContext.createBiquadFilter();

    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 1000;
    biquadFilter.gain.value = 40;

    source.connect(biquadFilter);
    biquadFilter.connect(audioContext.destination);
    setLoaded(true);
  }, [id, loaded]);

  const playVideo = () => {
    document.getElementById(id).play();
    setPlaying(true);
  };

  const stopVideo = () => {
    document.getElementById(id).pause();
    setPlaying(false);
  };

  const button = playing ? (
    <button onClick={stopVideo} className={styles.playPauseButton}>
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
    <button onClick={playVideo} className={styles.playPauseButton}>
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
      <video
        className={styles.video}
        src={url}
        id={id}
        controls
      />
      {button}
    </div>
  );
}

// BASS booster
function App() {
  const [videoURLs, setVideoURLs] = useState([]);

  const uploadRef = useRef(null);

  const addVideo = () => {
    const selectedFile = document.getElementById("uploader").files[0];
    const objectURL = URL.createObjectURL(selectedFile);
    setVideoURLs([objectURL]);
  };

  const fileUpload = () => uploadRef.current.click();

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
          <VideoComponent url={url} key={index} id={"video" + index} />
        ))}
      </div>
    </div>
  );
}

export default App;
