import React, { useState, useRef } from 'react';

const RecordingPage = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const videoRef = useRef(null);

  const handleToggleRecording = async () => {
    if (!recording) {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        const chunks = [];
        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/webm' });
          const videoURL = URL.createObjectURL(blob);
          videoRef.current.src = videoURL;
        };

        recorder.start();
        setRecording(true);
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    } else {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div>
      <h2>Recording Page</h2>
      <button onClick={handleToggleRecording}>{recording ? 'Stop Recording' : 'Start Recording'}</button>
      <video ref={videoRef} controls style={{ display: recording ? 'block' : 'none' }} />
    </div>
  );
};

export default RecordingPage;
