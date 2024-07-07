import React, { useState, useEffect } from 'react';
import api from "../../api";
import { useAuth } from "../Auth";
import Navb from './HomePage/Navbar';
import './profile.css';
import Dashboard from './Dashboard';
import backgroundImage from '../../assets/b5.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function Profile() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  const { user } = useAuth();
  const auth = useAuth();
  const user_id = auth.user?.id;

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await api.get(`/bookings/user/${user_id}`);
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

  const handleDeleteBooking = async (bookingId) => {
    try {
      await api.delete(`/cancel-booking/${bookingId}`);
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      setDeleteConfirmationOpen(false);
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const openDeleteConfirmation = (bookingId) => {
    setBookingToDelete(bookingId);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setBookingToDelete(null);
    setDeleteConfirmationOpen(false);
  };

    // Function to convert time from 24-hour format to 12-hour format
    const convertTo12HourFormat = (time24) => {
      const [hour, minute] = time24.split(':');
      const hour12 = (hour % 12) || 12;
      const ampm = hour >= 12 ? 'pm' : 'am';
      return `${hour12}:${minute} ${ampm}`;
    };

      // Function to check if a booking is on or after the current date
  const isBookingOnOrAfterCurrentDate = (bookingDate) => {
    const currentDate = new Date();
    const bookingDateObj = new Date(bookingDate);
    return bookingDateObj >= currentDate;
  };


  return (
    <>
    <Navb />
    <div className='bgg' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed', // Ensure the background image is fixed
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      overflowY: 'auto',
    }}>
      <h1 className="welcome-message">Welcome {auth.user?.username} ! </h1>
      <div className="profile-container">
        <div className="dashboard-container">
          <Dashboard />
        </div>
        <div className="bookings-container">
          <h2>Your Bookings</h2>
          <ul className="booking-list">
            {bookings.map(booking => (
              <li key={booking.id} className="booking-item">
                <p><strong>Date:</strong> {booking.date}</p>
                {/* <p><strong>Time:</strong> {booking.time}</p> */}
                <p><strong>Time:</strong> {convertTo12HourFormat(booking.time)}</p>
                <p><strong>Confirmed:</strong>Yes</p>
                {isBookingOnOrAfterCurrentDate(booking.date) && (
                  <Button
                    size="small"
                    style={{ color: 'white', backgroundColor: 'grey' }}
                    onClick={() => openDeleteConfirmation(booking.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Cancel
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Dialog
      open={deleteConfirmationOpen}
      onClose={closeDeleteConfirmation}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to cancel this booking?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDeleteConfirmation} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleDeleteBooking(bookingToDelete)} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
}
