import React, { useState, useEffect } from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import { useAuth2 } from '../ResAuth';
import api from "../../api";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const auth = useAuth2();
  const res_id = auth.user?.id;

  useEffect(() => {
    if (res_id) {
      api.get(`/bookings/${res_id}`)
        .then(response => {
          setBookings(response.data);
        })
        .catch(error => console.error('Error fetching bookings:', error));
    }
  }, [res_id]);


  return (
    <Container maxWidth="sm" className='contain'>
      <Typography variant="h5" gutterBottom>Bookings</Typography>
      <List>
        {bookings.map(booking => (
          <ListItem key={booking.id}>
            <ListItemText primary={`User :${booking.user_id} ,Date: ${booking.date}, Time: ${booking.time}, Seats Required: ${booking.seats_required}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Booking;
