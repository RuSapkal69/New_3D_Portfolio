import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react"; // Import speaker icons
import Hamburger from "./Hamburger"; // Import the Hamburger component

const LandingPage = () => {
  const audioRef = useRef(new Audio("/universe_sound.mp3")); // Load MP3 file
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/Universe.mp4" type="video/mp4" />
      </video>
      <Hamburger />
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-comfortaa text-white">
          Rushikesh's Portfolio
        </h1>
      </div>

      {/* Speaker Icon - Controls MP3 Audio */}
      <button
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={toggleAudio}
      >
        {playing ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
};

export default LandingPage;