import React, { useState } from 'react';
import { Typography, Button, TextField, List, ListItem, ListItemText, Container, Grid, Drawer, Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Res = () => {
//   const [numTables, setNumTables] = useState(10);
//   const [bookedTables, setBookedTables] = useState([]);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };

//   const handleAddTables = () => {
//     setNumTables(prevNumTables => prevNumTables + 1);
//   };

//   const handleSubtractTables = () => {
//     if (numTables > 0) {
//       setNumTables(prevNumTables => prevNumTables - 1);
//     }
//   };

//   const handleBookTable = (tableNumber, user) => {
//     const newBookedTables = [...bookedTables, { tableNumber, user }];
//     setBookedTables(newBookedTables);
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" gutterBottom>Restaurant Owner Dashboard</Typography>
//       <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         onClick={handleDrawerOpen}
//         edge="start"
//         sx={{ mr: 2 }}
//       >
//         <MenuIcon />
//       </IconButton>
//       <Drawer
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={handleDrawerClose}
//       >
//         <div>
//           <IconButton onClick={handleDrawerClose}>
//             <CloseIcon />
//           </IconButton>
//           <Divider />
//           <List>
//             <ListItem button onClick={handleDrawerClose}>
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <Typography variant="h6">Manage Tables</Typography>
//           <Typography variant="body1">Number of Tables: {numTables}</Typography>
//           <Button variant="contained" onClick={handleAddTables}>Add Table</Button>
//           <Button variant="contained" onClick={handleSubtractTables}>Remove Table</Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography variant="h6">Booked Tables</Typography>
//           <List>
//             {bookedTables.map((booking, index) => (
//               <ListItem key={index}>
//                 <ListItemText primary={`Table ${booking.tableNumber} booked by ${booking.user}`} />
//               </ListItem>
//             ))}
//           </List>
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography variant="h6">Book a Table</Typography>
//         <form
//           onSubmit={e => {
//             e.preventDefault();
//             const tableNumber = parseInt(e.target.tableNumber.value);
//             const user = e.target.user.value;
//             handleBookTable(tableNumber, user);
//           }}
//         >
//           <TextField
//             label="Table Number"
//             name="tableNumber"
//             type="number"
//             variant="outlined"
//             required
//             fullWidth
//           />
//           <TextField
//             label="Your Name"
//             name="user"
//             variant="outlined"
//             required
//             fullWidth
//           />
//           <Button type="submit" variant="contained" color="primary">Book Table</Button>
//         </form>
//       </Grid>
//     </Container>
//   );
// };

// export default Res;

return(
    <>
    <p>Heelo</p>
    </>
);
}

export default Res;