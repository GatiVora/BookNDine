import React, { useState, useEffect } from 'react';
import api from "../../api";
import { useAuth } from "../Auth";


export default function Profile (){

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
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>Your Bookings</h2>
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Confirmed: {booking.confirmed ? 'Yes' : 'No'}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
}