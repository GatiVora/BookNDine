// import React from "react";
// import "../index.css";
// import videoUrl from "../../src/assets/initial.mp4";
// import { Link } from "react-router-dom";
// const Initial = () => {
//     return (
//         <div>
//             <div className="video-container">
//               <video className="fullWidthVideo1" autoPlay loop muted>
//                 <source src={videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="text-overlay">
//                 <h1>Welcome to Our Website</h1>
//                 <p>Eat outside the box❕ </p>
//                 <div className="buttons-container">
//             <Link to="/login">
//               <button className="login-button">User Login</button>
//             </Link>
//             <Link to="/restaurant-login">
//               <button className="login-button">Restaurant Login</button>
//             </Link>
//           </div>

//               </div>
//             </div>
//         </div>
//       );
// }
// export default Initial;

import React, { useState, useEffect } from "react";
import "../index.css";
import videoUrl from "../../src/assets/bookndine.mp4";
import { Link } from "react-router-dom";

const Initial = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [charging, setCharging] = useState(null);

  useEffect(() => {
    const batteryHandler = (battery) => {
      const level = battery.level * 100;
      setBatteryLevel(level);
      setCharging(battery.charging);
    };

    navigator.getBattery().then(batteryHandler);

    return () => {
      navigator.getBattery().then(batteryHandler);
    };
  }, []);

  let message = "";
  if (charging) {
    message = 
    "Book your table at your favorite restaurant while your phone powers up! 🚀 Don't miss out!";
  } else {
    if (batteryLevel !== null) {
      if (batteryLevel >= 70) {
        message = `It's time to refuel yourself as your phone is already at ${batteryLevel.toFixed(0)}%! 🍽️✨`;
      } else if (batteryLevel >= 20) {
        message = `It's the perfect time to recharge both you and your phone buzzing at over ${batteryLevel.toFixed(0)}%! 🍽️🔋`;
      } else {
        message = `It's time to give you and your phone a break. Secure your table now and recharge your device proudly displaying {batteryLevel}% power. ⚡🍽️`;
      }
    } else {
      message = 
      `Reserve your seat and savor the moment!`;
    }
  }

  return (
    <div>
      <div className="video-container">
        <video className="fullWidthVideo1" autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <div className="typewriter"><p>{message}</p></div>
        
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
};

export default Initial;
