// // import React, { useState, useEffect } from 'react';
// // import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
// // import { useAuth2 } from '../ResAuth';
// // import api from "../../api";

// // const Booking = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const auth = useAuth2();
// //   const res_id = auth.user?.id;

// //   useEffect(() => {
// //     if (res_id) {
// //       api.get(`/bookings/${res_id}`)
// //         .then(response => {
// //           setBookings(response.data);
// //         })
// //         .catch(error => console.error('Error fetching bookings:', error));
// //     }
// //   }, [res_id]);


// //   return (
// //     <Container maxWidth="sm" className='contain'>
// //       <Typography variant="h5" gutterBottom>Bookings</Typography>
// //       <List>
// //         {bookings.map(booking => (
// //           <ListItem key={booking.id}>
// //             <ListItemText primary={`User :${booking.user_id} ,Date: ${booking.date}, Time: ${booking.time}, Seats Required: ${booking.seats_required}`} />
// //           </ListItem>
// //         ))}
// //       </List>
// //     </Container>
// //   );
// // };

// // export default Booking;

// import React, { useState, useEffect } from 'react';
// import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
// import { useAuth2 } from '../ResAuth';
// import api from "../../api";

// const Booking = () => {
//   const [bookings, setBookings] = useState([]);
//   const [usersMap, setUsersMap] = useState({});
//   const auth = useAuth2();
//   const res_id = auth.user?.id;

//   useEffect(() => {
//     if (res_id) {
//       api.get(`/bookings/${res_id}`)
//         .then(response => {
//           setBookings(response.data);
//           // Fetch user names for all user IDs
//           fetchUserNames(response.data);
//         })
//         .catch(error => console.error('Error fetching bookings:', error));
//     }
//   }, [res_id]);

//   const fetchUserNames = (bookingsData) => {
//     const userIds = bookingsData.map(booking => booking.user_id);
//     const uniqueUserIds = [...new Set(userIds)]; // Get unique user IDs
//     uniqueUserIds.forEach(userId => {
//       api.get(`/users/${userId}`)
//         .then(response => {
//           setUsersMap(prevState => ({
//             ...prevState,
//             [userId]: response.data.name // Assuming user's name is stored in 'name' field
//           }));
//         })
//         .catch(error => console.error(`Error fetching user ${userId} details:`, error));
//     });
//   };

//   return (
//     <Container maxWidth="sm" className='contain'>
//       <Typography variant="h5" gutterBottom>Bookings</Typography>
//       <List>
//         {bookings.map(booking => (
//           <ListItem key={booking.id}>
//             <ListItemText primary={`User: ${usersMap[booking.user_id]}, Date: ${booking.date}, Time: ${booking.time}, Seats Required: ${booking.seats_required}`} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default Booking;

import React, { useState, useEffect } from 'react';
import { Typography, Container, Card, CardContent } from '@mui/material';
import { useAuth2 } from '../ResAuth';
import api from '../../api';
import styled from 'styled-components'; // Import styled-components

// Styled component for the entire Booking container
const StyledBookingContainer = styled(Container)`
  padding: 16px;
  border-radius: 8px;
`;

// Styled component for individual booking cards
const BookingCard = styled(Card)`
  margin-bottom: 16px;
`;

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [usersMap, setUsersMap] = useState({});
  const auth = useAuth2();
  const res_id = auth.user?.id;

  useEffect(() => {
    if (res_id) {
      api.get(`/bookings/${res_id}`)
        .then(response => {
          setBookings(response.data);
          // Fetch user names for all user IDs
          fetchUserNames(response.data);
        })
        .catch(error => console.error('Error fetching bookings:', error));
    }
  }, [res_id]);

  const fetchUserNames = (bookingsData) => {
    const userIds = bookingsData.map(booking => booking.user_id);
    const uniqueUserIds = [...new Set(userIds)]; // Get unique user IDs
    uniqueUserIds.forEach(userId => {
      api.get(`/users/${userId}`)
        .then(response => {
          setUsersMap(prevState => ({
            ...prevState,
            [userId]: response.data.name // Assuming user's name is stored in 'name' field
          }));
        })
        .catch(error => console.error(`Error fetching user ${userId} details:`, error));
    });
  };

  return (
    <StyledBookingContainer maxWidth="sm">
      <Typography variant="h5" gutterBottom>Bookings</Typography>
      {bookings.map(booking => (
        <BookingCard key={booking.id}>
          <CardContent>
            <Typography variant="subtitle1">
              <strong>UserName:</strong> {usersMap[booking.user_id]}
            </Typography>
            <Typography variant="body2">
              <strong>Date:</strong> {booking.date}
            </Typography>
            <Typography variant="body2">
              <strong>Time:</strong> {booking.time}
            </Typography>
            <Typography variant="body2">
              <strong>Seats Required:</strong> {booking.seats_required}
            </Typography>
          </CardContent>
        </BookingCard>
      ))}
    </StyledBookingContainer>
  );
};

export default Booking;
