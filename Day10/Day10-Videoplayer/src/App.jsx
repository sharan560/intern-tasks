import React, { useState } from "react";

function App() {
  const [videoSource, setVideoSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoSource(URL.createObjectURL(file));
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef) {
      if (videoRef.requestFullscreen) {
        videoRef.requestFullscreen();
      } else if (videoRef.webkitRequestFullscreen) {
        videoRef.webkitRequestFullscreen();
      } else if (videoRef.msRequestFullscreen) {
        videoRef.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container">
      <h1>Video Player</h1>
      <h2>Upload and Play your Video</h2>

      <div className="video-container">
        {videoSource ? (
          <video
            ref={(ref) => setVideoRef(ref)}
            src={videoSource}
            controls={false}
            className="w-full h-auto"
          />
        ) : (
          <p className="text-white">No video selected yet. Please upload one.</p>
        )}
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleFullscreen}>Full Screen</button>
      </div>

      <label htmlFor="video-upload">Upload Video</label>
      <input
        id="video-upload"
        type="file"
        accept="video/*"
        onChange={handleFileUpload}
      />
    </div>
  );
}

export default App;
