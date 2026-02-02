import "./video.css";
import { useState } from "react";
import { ArrowBigUp, ArrowBigDown } from 'lucide-react';


const videos = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
];

export const Video = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((index) => {
      if (index === videos.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const prevVideo = () => {
    setCurrentIndex((index) => {
      if (index === 0) {
        return videos.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  return (
    <div className="video-container">
      <video key={currentIndex} className="video">
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>

      <div className="controls-container">
        <button onClick={prevVideo} className="control-btn"><ArrowBigUp /></button>
        <button onClick={nextVideo} className="control-btn"><ArrowBigDown /></button>
      </div>
    </div>
  )
}
