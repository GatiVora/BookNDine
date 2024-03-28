import React, { useState, useEffect } from 'react';
import api from "../../api";
import { useAuth } from "../Auth";
import Navb from './HomePage/Navbar';
import './profile.css';
import Dashboard from './Dashboard';

export default function Profile() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const auth = useAuth();
  const user_id = auth.user?.id;

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await api.get(`/bookings/${user_id}`);
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user bookings:', error);
      }
    };

    fetchUserBookings();
  }, [user_id]);

  if (loading) {
    return <div className="loading">Loading...</div>; // Apply loading style
  }

  return (
    <>
  <div className='bgg'>

 
    <Navb />
    <h1 className="welcome-message">Welcome {auth.user?.username} ! </h1>

    <div className="profile-container">
      
    <Dashboard/>
      <br/>
      <h2>Your Bookings</h2>
      <ul className="booking-list">
        {bookings.map(booking => (
          <li key={booking.id} className="booking-item">
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Confirmed:</strong> {booking.confirmed ? 'Yes' : 'No'}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
 

    </div>
    </>
  );
}