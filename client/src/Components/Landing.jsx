// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios'; // You can use axios for making HTTP requests
// import api from '../api';
// import '../index.css';
// import { BsLinkedin, BsFacebook } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
// import { Rating } from "@mui/material";
// import Navbar from "../Components/User/HomePage/Navbar";

// // import "../../public/images/resimg3.jpeg";
// // import "../../../images/resimg3.jpeg"


// const Landing = (props) => {

//   // const { id } = useParams();

//   const { id } = useParams(); // Get the ID from the URL

//   // const [restaurants, setRestaurants] = useState([]);

//   const [restaurant, setRestaurant] = useState(null);

//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); 

//   const [loading, setLoading] = useState(true);


//   const galleryImages = [
//     "../../../images/resimg2.jpeg",
//     "../../../images/resimg3.jpeg",
//     "../../../images/resimg2.jpeg",
//     "../../../images/resimg3.jpeg",
//     // Add more image URLs as needed
//   ];


//   useEffect(() => {
//     const fetchRestaurant = async () => {
//       try {
//         const response = await api.get(`/restaurants/${id}`);
//         setRestaurant(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching restaurant:', error);
//       }
//     };

//     fetchRestaurant();
//   }, [id]); // Fetch data whenever restaurantId changes

//   useEffect(() => {
//     // Change photo index every 5 seconds
//     const interval = setInterval(() => {
//       setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!restaurant) {
//     return <div>Restaurant not found</div>;
//   }
  



//   const menuItems = [
//     {
//       name: "Coffee",
//       description: "Freshly brewed coffee",
//       price: "$2.50",
//       photoUrl: "../../../images/resimg3.jpeg"
//     },
//     {
//       name: "Tea",
//       description: "A selection of fine teas",
//       price: "$2.00",
//       photoUrl: "../../../images/resimg3.jpeg"
//     },
//     {
//       name: "Sandwich",
//       description: "Classic sandwich with assorted fillings",
//       price: "$5.00",
//       photoUrl: "../../../images/resimg3.jpeg"
//     },
//     {
//       name: "Sandwich",
//       description: "Classic sandwich with assorted fillings",
//       price: "$5.00",
//       photoUrl: "../../../images/resimg3.jpeg"
//     },
//     // Add more menu items as needed
//   ];

  
  
//   return (

//             <>
//             <Navbar/>
//             <div>
//               <p className='title'>{restaurant.res_name}</p>
//               <img src="../../../images/resimg2.jpeg" className='img'></img>
//               <button className="image-button">Book Now</button>
//               <div className='data-container'>
//               <div className='content'>
//                 <div className='heading'>Welcome to {restaurant.res_name}</div>
//                 <div className='description'>{restaurant.about}</div>
//                 <div className="heading">Image Gallery</div>
//             </div>
//               <div className='content'>
//                 <div className='box'>
//                     <div className='address'>{restaurant.address} , {restaurant.city}</div>
//                     <div className="mobile">Contact No. : {restaurant.mobile}</div>
//                     <div className='email'>Email : {restaurant.email}</div>
//                     <div className="schedule">Mon-Sat : 8am-8pm / Sunday - Closed</div>
//                     <div className="ratings"></div>
//                     <ul className="social_links">
//         <li>
//           <BsFacebook />
//         </li> /
//         <li>
//           <BsLinkedin />
//         </li> /
//         <li>
//           <AiFillInstagram />
//         </li>
//       </ul>
//       <div className="rating"><Rating name="rating" value={parseInt(restaurant.rating)}
//       readOnly /></div>
      
//                 </div>
//               </div>
//               </div>
//               <div className="image-gallery">
//                       <img src={galleryImages[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex}`} />
//                       <p>{currentPhotoIndex + 1}/{galleryImages.length}</p>
//                     </div>
//               <div className="menu">
//                             <div className='heading'>Menu</div>
//                             <ul>
//                               {menuItems.map((item, index) => (
//                                 <li key={index}>
//                                   <div className="menu-item">
//                                     <img src={item.photoUrl} alt={item.name} />
//                                     <div>
//                                       <h3>{item.name}</h3>
//                                       <p>{item.description}</p>
//                                       <p>{item.price}</p>
//                                     </div>
//                                   </div>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="book-now"></div>
//             </div>
//             </>

  
//   );
// }

// export default Landing;













//   // const { id } = useParams(); // Get the ID from the URL
//   // console.log("id:", id); 
//   // const [restaurant, setRestaurant] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   const fetchRestaurant = async () => {
//   //     try {
//   //       const response = await api.get(`/restaurants/${id}`);
//   //       setRestaurant(response.data);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error('Error fetching restaurant:', error);
//   //     }
//   //   };

//   //   fetchRestaurant();
//   // }, [id]); // Fetch data whenever restaurantId changes

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (!restaurant) {
//   //   return <div>Restaurant not found</div>;
//   // }

// //   return (
// //     <div>
// //       <h2>{restaurant.res_name}</h2>
// //       <p>{restaurant.id}</p>
// //       {/* Display other restaurant details */}
// //     </div>
// //   );
// // };

// // export default Landing;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import '../index.css';
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Rating } from "@mui/material";
import Navbar from "../Components/User/HomePage/Navbar";
import { useAuth } from './Auth';

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
      await api.post(`/book-table/${res_id}/${user_id}`,bookingForm);
      console.log('Booking submitted:', bookingForm);
      // Optionally, you can add code to handle success or error responses
    } catch (error) {
      console.error('Error booking table:', error);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <p className='title'>{restaurant.res_name}</p>
        <img src="../../../images/resimg2.jpeg" className='img' alt="Restaurant" />
        <button className="image-button">Book Now</button>
        <div className='data-container'>
          <div className='content'>
            <div className='heading'>Welcome to {restaurant.res_name}</div>
            <div className='description'>{restaurant.about}</div>
            <div className="heading">Image Gallery</div>
          </div>
          <div className='content'>
            <div className='box'>
              <div className='address'>{restaurant.address} , {restaurant.city}</div>
              <div className="mobile">Contact No. : {restaurant.mobile}</div>
              <div className='email'>Email : {restaurant.email}</div>
              <div className="schedule">Mon-Sat : 8am-8pm / Sunday - Closed</div>
              <div className="ratings"></div>
              <ul className="social_links">
                <li><BsFacebook /></li> /
                <li><BsLinkedin /></li> /
                <li><AiFillInstagram /></li>
              </ul>
              <div className="rating">
                <Rating name="rating" value={parseInt(restaurant.rating)} readOnly />
              </div>
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
            {menu.map((item, index) => (
              <li key={index}>
                <div className="menu-item">
                  {/* <img src={item.photoUrl} alt={item.name} /> */}
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
        {/* <div className="book-now"></div> */}
        <div className="book-now">
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
      </div>
    </>
  );
}

export default Landing;
