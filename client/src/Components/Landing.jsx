import React from "react";
import Navbar from "./Navbar";
import videoUrl from "../../src/assets/landing3.mp4";
import "../index.css";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="video-container">
          <video className="fullWidthVideo" autoPlay loop>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-overlay">
            <h1>Welcome to Our Website</h1>
            <p>Explore the Excitement!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
