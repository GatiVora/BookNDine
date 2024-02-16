import React from "react";
import "../index.css";
import videoUrl from "../../src/assets/initial.mp4";
import { Link } from "react-router-dom";
const Initial = () => {
    return (
        <div>
            <div className="video-container">
              <video className="fullWidthVideo1" autoPlay loop muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-overlay">
                <h1>Welcome to Our Website</h1>
                <p>Eat outside the box❕ </p>
                <div className="buttons-container">
            <Link to="/login">
              <button className="login-button">User Login</button>
            </Link>
            <Link to="/restaurant-login">
              <button className="login-button">Restaurant Login</button>
            </Link>
          </div>

              </div>
            </div>
        </div>
      );
}
export default Initial;