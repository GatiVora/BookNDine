import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import '../index.css';
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Rating } from "@mui/material";
import Navbar from "../Components/User/HomePage/Navbar";
import { useAuth } from './Auth';

import bg from "../assets/menu/im1.jpg";
import bg2 from "../assets/menu/im2.jpg";
import bg3 from "../assets/menu/img3.jpeg";
import bg4 from "../assets/menu/im4.jpg";
import bg5 from "../assets/menu/im5.jfif";
import bg6 from "../assets/menu/im6.webp";
import bg7 from "../assets/menu/im7.jpg";
// import im1 from "../../../images/";

const Landing = (props) => {
  const { id } = useParams(); // Get the ID from the URL
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const auth = useAuth();

  const user_id = auth.user?.id;
  const res_id = id;



  const [bookingForm, setBookingForm] = useState({
    date: '',
    time: '',
    confirmed: false,
    seats_required: 1 // Default to 1 seat
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to book the table using bookingForm data
      // Example:
      // await api.post(`/bookings/${restaurant.id}`, bookingForm);
      await api.post(`/book-table/${res_id}/${user_id}`, bookingForm);
      console.log('Booking submitted:', bookingForm);
      alert('Table booked successfully!');

      setBookingForm({
        date: '',
        time: '',
        seats_required: '', // Default value
        confirmed: false,
      });

      // Optionally, you can add code to handle success or error responses
    } catch (error) {
      console.error('Error booking table:', error);
      alert('Sorry, the table is not available at the selected date and time. Please choose a different date or time.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    // If the input is a checkbox and checked, set the value to true, otherwise false
    const checkboxValue = type === 'checkbox' ? checked : value;

    setBookingForm(prevState => ({
      ...prevState,
      [name]: name === 'confirmed' ? checkboxValue : inputValue
    }));
  };


  const galleryImages = [
    "../../../images/resimg2.jpeg",
    "../../../images/resimg3.jpeg",
    "../../../images/resimg2.jpeg",
    "../../../images/resimg3.jpeg",
  ];

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await api.get(`/restaurants/${id}`);
        setRestaurant(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    fetchRestaurant();

  }, [id]); // Fetch data whenever restaurantId changes


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get(`/menu_items/${id}`);
        setMenu(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [id]); // Fetch data whenever restaurantId or restaurant_id changes


  useEffect(() => {
    // Change photo index every 5 seconds
    const interval = setInterval(() => {
      setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const scrollToBookForm = () => {
    document.getElementById('book-now').scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
    
      <Navbar />
      {/* <img src="../../../images/resimg3.jpg" /> */}
      <div>
        <p className='title'>{restaurant.res_name}</p>
        {/* <img src="../../../images/resimg2.jpeg" className='img' alt="Restaurant" /> */}
        <img src={"http://127.0.0.1:8000/restaurants/" + id + "/image"} alt="item" className='resimgg' style={{ width: '1500px', height: '750px', paddingLeft: '25px', paddingRight: '25px' }} />
        <button className="image-button" onClick={scrollToBookForm}>Book Now</button>
        <div className='data-container'>
          <div className='content'>
            <div className='heading'>Welcome to {restaurant.res_name}</div>
            <div className='description'>{restaurant.about}</div>
            <div className="heading">Image Gallery</div>
          </div>
          <div className='content'>
            <div className='box'>
              <div className='address'>{restaurant.address}, {restaurant.city}</div>
              <div className="mobile">Contact No. : {restaurant.mobile}</div>
              <div className='email'>Email : {restaurant.email}</div>
              <div className="schedule">Mon-Sat : 8am-8pm / Sunday - Closed</div>
              <div className="ratings"></div>
              <ul className="social_links">
                <li><BsFacebook /></li>
                <li><BsLinkedin /></li>
                <li><AiFillInstagram /></li>
              </ul>
              <div className="rating">
                <Rating name="rating" value={parseInt(restaurant.rating)} readOnly />
              </div>
            </div>
          </div>
        </div>
        <div className="image-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', justifyContent: 'center' }}>
          {galleryImages.map((image, index) => (
            <div key={index} style={{ width: '200px', height: '200px', border: '2px solid #fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', borderRadius: '8px' }}>
              <img src={image} alt={`Photo ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
          <p>{currentPhotoIndex + 1}/{galleryImages.length}</p>
        </div>

        <div className="menu">
          <div className='heading'>Menu</div>
          {/* Loop through unique categories */}
          {Array.from(new Set(menu.map(item => item.category))).map((category, index) => (
            <div key={index}>
              <h2>{category}</h2>
              <ul>
                {/* Filter menu items by category */}
                {menu.filter(item => item.category === category).map((menuItem, itemIndex) => (
                  <li key={itemIndex}>
                    <div className="menu-item">
                      {/* Render image based on category */}
                      {menuItem.category === "x" && <img src={galleryImages[0]} alt={menuItem.name} />}
                      {menuItem.category === "2" && <img src={galleryImages[1]} alt={menuItem.name} />}

                      {menuItem.name === "Palak Paneer" && <img src={bg} alt={menuItem.name} />}
                      {menuItem.name === "Paneer Tikka Masala" && <img src={bg2} alt={menuItem.name} />}
                      {menuItem.name === "Dal Tadka" && <img src={bg3} alt={menuItem.name} />}
                      {menuItem.name === "Classic Tomato Soup" && <img src={bg4} alt={menuItem.name} />}
                      {menuItem.name === "Hot and Sour Soup" && <img src={bg5} alt={menuItem.name} />}
                      {menuItem.name === "Butter Roti" && <img src={bg6} alt={menuItem.name} />}
                      {menuItem.name === "Garlic Naan" && <img src={bg7} alt={menuItem.name} />}

                      {/* Add more conditions as needed */}
                      <div>
                        <h3>{menuItem.name}</h3>
                        <p>{menuItem.description}</p>
                        <p>₹{menuItem.price}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* <div className="book-now"></div> */}
        {/* <div className="book-now">
          <h2>Book a Table</h2>
          <form onSubmit={handleSubmit}>
            <input type="date" name="date" value={bookingForm.date} onChange={handleInputChange} required />
            <input type="time" name="time" value={bookingForm.time} onChange={handleInputChange} required />
            <input type="number" name="seats_required" placeholder="Seats Required" min="1" value={bookingForm.seats_required} onChange={handleInputChange} required />
            <label>
              <input type="checkbox" name="confirmed" checked={bookingForm.confirmed} onChange={handleInputChange} />
              Confirm Booking
            </label>
            <button type="submit">Book Table</button>
          </form>
        </div>
        
        
        */}


        {/* <div className="book-now" id="book-now" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="heading" style={{ textAlign: 'center' }}>Book a Table</h2>
          <form onSubmit={handleSubmit} className="booking-form" >
            <div className='dt'>
              <div className="form-group1">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={bookingForm.date} onChange={handleInputChange} required />
              </div>
              <div className="form-group1">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={bookingForm.time} onChange={handleInputChange} required />
              </div>
            </div>
            <div className='si'>
              <div className="form-group">
                <label htmlFor="seats_required">Seats Required:</label>
                <select
                  id="seats_required"
                  name="seats_required"
                  value={bookingForm.seats_required}
                  onChange={handleInputChange}
                  className='label1'
                  required
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>

            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <label htmlFor="confirmed" style={{ whiteSpace: 'nowrap' }}>Confirm Booking</label>
              <input type="checkbox" id="confirmed" name="confirmed" style={{ marginBottom: '0' }} />
            </div>

            <div className="btn-container">
              <button type="submit" className="btn">Book Table</button>
            </div>


          </form>

        </div> */}

<div className="book-now" id="book-now" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="heading" style={{ textAlign: 'center' }}>Book a Table</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className='dt'>
            <div className="form-group1">
              <label htmlFor="date">Date:</label>
              {/* Set the min attribute to today's date */}
              <input type="date" id="date" name="date" value={bookingForm.date} onChange={handleInputChange} required min={today} />
            </div>
            <div className="form-group1">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" value={bookingForm.time} onChange={handleInputChange} required />
            </div>
          </div>
          <div className='si'>
            <div className="form-group">
              <label htmlFor="seats_required">Seats Required:</label>
              <select
                id="seats_required"
                name="seats_required"
                value={bookingForm.seats_required}
                onChange={handleInputChange}
                className='label1'
                required
              >
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <label htmlFor="confirmed" style={{ whiteSpace: 'nowrap' }}>Confirm Booking</label>
            <input type="checkbox" id="confirmed" name="confirmed" style={{ marginBottom: '0' }} />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn">Book Table</button>
          </div>
        </form>
      </div>

      </div>
      <br />
      <br />
    </>
  );
}

export default Landing;