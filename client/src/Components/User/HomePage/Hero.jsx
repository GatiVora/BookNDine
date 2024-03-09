import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeImage from "../../../assets/bg.webp";
// import videoUrl from "../../src/assets/landing3.mp4";
import videoUrl from "../../../assets/landing3.mp4";
// import "../index.css";
import "../../../index.css";

import api from "../../../api";


export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  const [cityName, setCityName] = useState(""); // State to store the city name

  useEffect(() => {
    const currentTime = new Date().getHours();
    let text = "";

    if (currentTime >= 6 && currentTime < 10) {
      text =
        "Rise and Dine: Start your morning with flavors that awaken the senses.";
    } else if (currentTime >= 10 && currentTime < 12) {
      text = "Brunch: A feast for every taste, a delight for every craving.";
    } else if (currentTime >= 12 && currentTime < 15) {
      text =
        "Lunchtime Euphoria: Where taste meets satisfaction at every forkful.";
    } else if (currentTime >= 15 && currentTime < 17) {
      text =
        "Evening Eats: Elevate your twilight hours with our flavorful snacks.";
    } else if (currentTime >= 17 && currentTime < 22) {
      text = "Make your evening extraordinary with our culinary masterpieces.";
    } else {
      text = "When hunger strikes after hours, our snacks answer the call.";
    }

    setDisplayText(text);
  }, []);


  const handleBookNowClick = () => {
    // Make sure the cityName is not empty before making the API call
    if (cityName.trim() !== "") {
      api.get(`/restaurants/${cityName}`)
        .then(response => {
          // Handle the response data as needed
          console.log(response.data);
        })
        .catch(error => {
          console.error("Error fetching restaurants:", error);
        });
    } else {
      console.error("City name is empty");
    }
  };

  return (
    <Section id="hero">
      <div className="video-container">
        <video className="fullWidthVideo" autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="title">
          <h1>Come hungry, leave happy.</h1>
          <p>{displayText}, just a few clicks away.</p>
        </div>
        <div className="search">
          <div className="container">
            
            <input
              type="text"
              id="cityInput"
              placeholder="Search your location"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </div>
          <a href={`/restaurants/${cityName}`}><button>Book Now</button></a>
        </div>
      </div>
    </Section>
  );
}
//hello
const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .video-container {
    position: relative;
    overflow: hidden;
    height: 100vh; /* Adjust height as needed */
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -1;
    }
  }

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: auto;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      height: 3.5rem;
      border-radius: 0.5rem;
      width: 50%;
      align-items: center;
      margin: 0 auto;
      .container {
        flex: 1;
        max-width: 300px;
        padding: 0 1rem;
        width: 50%;

        label {
          font-size: 1.1 rem;
          color: #03045e;
        }
        input {
          width: 100%;
          padding: 0.2rem;
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &::placeholder {
            color: grey;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        height: 3rem;
        margin-left: auto;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: black;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      .title {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.2rem;
          padding: 0 1rem; /* Adjust padding as needed */
        }
      }
      .search {
        width: 80%; /* Adjust width as needed */
        .container {
          padding: 0.5rem; /* Adjust padding as needed */
        }
        button {
          padding: 0.8rem 1.5rem; /* Adjust padding as needed */
          font-size: 1rem; /* Adjust font size as needed */
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980) {
    height: 25rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
