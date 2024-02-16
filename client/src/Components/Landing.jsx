import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // You can use axios for making HTTP requests
import api from '../api';
import '../index.css';
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Rating } from "@mui/material";
// import "../../public/images/resimg3.jpeg";
// import "../../../images/resimg3.jpeg"
const Landing = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); 

  const galleryImages = [
    "../../../images/resimg2.jpeg",
    "../../../images/resimg3.jpeg",
    "../../../images/resimg2.jpeg",
    "../../../images/resimg3.jpeg",
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/restaurants/`);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    // Change photo index every 5 seconds
    const interval = setInterval(() => {
      setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  const menuItems = [
    {
      name: "Coffee",
      description: "Freshly brewed coffee",
      price: "$2.50",
      photoUrl: "../../../images/resimg3.jpeg"
    },
    {
      name: "Tea",
      description: "A selection of fine teas",
      price: "$2.00",
      photoUrl: "../../../images/resimg3.jpeg"
    },
    {
      name: "Sandwich",
      description: "Classic sandwich with assorted fillings",
      price: "$5.00",
      photoUrl: "../../../images/resimg3.jpeg"
    },
    {
      name: "Sandwich",
      description: "Classic sandwich with assorted fillings",
      price: "$5.00",
      photoUrl: "../../../images/resimg3.jpeg"
    },
    // Add more menu items as needed
  ];

  
  
  return (
    <div>
      {restaurants.length > 0 ? (
         <ul>
          
         {restaurants.map((restaurant) => {
          
           if (restaurant.id == id) {
             return (
            //   <div key={restaurant.id} className="restaurant-container">
            //   <img src="../../../images/resimg3.jpeg" alt={restaurant.res_name} className="restaurant-image" />
            //   <div className="restaurant-name">{restaurant.res_name}</div>
            //   {/* Display other details of the restaurant */}
            // </div>
            <>
            <div>
              <p className='title'>{restaurant.res_name}</p>
              <img src="../../../images/resimg3.jpeg" className='img'></img>
              <button className="image-button">Book Now</button>
              <div className='data-container'>
              <div className='content'>
                <div className='heading'>Welcome to {restaurant.res_name}</div>
                <div className='description'>A bustling cafe nestled in the heart of downtown, offering a cozy retreat for coffee enthusiasts and food lovers alike. With its warm ambiance and inviting decor, this cafe is the perfect spot to savor artisanal brews, indulge in freshly baked pastries, and unwind with friends or a good book. Whether you're seeking a quiet moment of solitude or lively conversation, this cafe provides a welcoming haven for all.</div>
                <div className="heading">Image Gallery</div>
            </div>
              <div className='content'>
                <div className='box'>
                    <div className='address'>742 Evergreen Terrace, Springfield, IL 62704, United States</div>
                    <div className="mobile">Conatct No. : {restaurant.mobile}</div>
                    <div className='email'>Email : {restaurant.email}</div>
                    <div className="schedule">Mon-Sat : 8am-8pm / Sunday - Closed</div>
                    <div className="ratings"></div>
                    <ul className="social_links">
        <li>
          <BsFacebook />
        </li> /
        <li>
          <BsLinkedin />
        </li> /
        <li>
          <AiFillInstagram />
        </li>
      </ul>
      <div className="rating"><Rating name="rating" value={parseInt(restaurant.rating)}
      readOnly /></div>
      
                </div>
              </div>
              </div>
              <div className="image-gallery">
                      <img src={galleryImages[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex}`} />
                      <p>{currentPhotoIndex + 1}/{galleryImages.length}</p>
                    </div>
              <div className="menu">
                            <div className='heading'>Menu</div>
                            <ul>
                              {menuItems.map((item, index) => (
                                <li key={index}>
                                  <div className="menu-item">
                                    <img src={item.photoUrl} alt={item.name} />
                                    <div>
                                      <h3>{item.name}</h3>
                                      <p>{item.description}</p>
                                      <p>{item.price}</p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="book-now"></div>
            </div>
            </>
             );
           }
           return null;
         })}
       </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Landing;
