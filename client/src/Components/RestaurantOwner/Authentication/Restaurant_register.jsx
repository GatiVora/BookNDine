// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   styled,
//   Button,
//   TextField,
//   Typography,
//   Container,
//   Avatar,
//   ThemeProvider,
//   createTheme,
//   FormControlLabel,
//   Stack,
// } from "@mui/material";
// import Login from "./Log";
// import img from "../assets/img1.jpg";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// // import { Checkbox } from "@mui/icons-material";
// import { Checkbox } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// // import {ForgotPassword} from "./ForgotPassword"

// const BoxStyle = styled(Box)`
//   margin: 5vh 12vh; /* Set your desired percentage margin here */
//   border-radius: 2px;
//   height: 120vh; /* Set your desired percentage height here */
//   background: #fff;
//   color: #2874f0;
//   box-shadow: 0 2px 4px 1px rgb(0 0 0 / 40%);

//   @media (max-width: 1000px) {
//     height: 0vh; /* Set a different height for smaller screens */
//   }
// `;

// const center = {
//   position: "relative",
//   top: "50%",
//   left: "35%",
// };

// const darktheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// const responsiveStyles = {
//   "@media (max-width: 600px)": {
//     margin: "5% 2%",
//     height: "auto",
//   },
// };

// const imageURL = "images/img1.jpg";

// export default function SignIn() {
//   const navigate = useNavigate();

//   const user = {
//     res_name: "",
//     name: "",
//     mobile: "",
//     email: "",
//     city: "",
//     password: "",
//   }

//   const [formData, setFormData] = useState(user);

//   const [formErrors, setFormErrors] = useState({
//     res_name: "",
//     name: "",
//     mobile: "",
//     email: "",
//     city: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };



//   const handleSignUp = async () => {
//     try {
//       const temp = JSON.stringify(formData);
//       console.log(temp);

//       const response = await fetch("http://localhost:8000/user", {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: temp,
//       });

//       if (response.ok) {
//         console.log("User registered successfully");
//         navigate("/login");
//       } else {
//         const errorData = await response.json();
//         console.error("Error registering user:", errorData);
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         errors[key] = `${key} is required`;
//       }
//     });
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if there are no errors
//   };

//   return (
//     <>
//       <BoxStyle xs={responsiveStyles}>
//         <Grid container>
//           <Grid item xs={12} sm={12} lg={6}>
//             {/* <Image src={imageURL} alt="Login Image" /> */}
//             <Box
//               style={{
//                 backgroundImage: `url(${img})`,
//                 backgroundSize: "cover",
//                 height: "100vh",
//                 color: "blue",
//               }}
//             ></Box>
//           </Grid>
//           <Grid item xs={12} sm={12} lg={6}>
//             <Box
//               style={{
//                 backgroundSize: "cover",
//                 height: "60vh",
//                 color: "#000",
//                 background: "white",
//               }}
//             >
//               {/* <ThemeProvider theme={darktheme}> */}
//               <Container>
//                 <Box height={10} />
//                 <Box sx={center}>
//                   <Typography component="h1" variant="h4">
//                     Register
//                   </Typography>
//                 </Box>
//                 <Box height={10}></Box>
//                 <Grid container spacing={1}>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="res_name"
//                       name="res_name"
//                       label="Restaurant name"
//                       autoComplete="res_name"
//                       required
//                       fullWidth
//                       value={formData.res_name}
//                       onChange={handleInputChange}
//                       error={!!formErrors.res_name}
//                       helperText={formErrors.res_name}
//                     ></TextField>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="name"
//                       name="name"
//                       label="Name"
//                       required
//                       fullWidth
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       error={!!formErrors.name}
//                       helperText={formErrors.name}
//                     ></TextField>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="mobile"
//                       name="mobile"
//                       label="Mobile number"
//                       required
//                       fullWidth
//                       value={formData.mobile}
//                       onChange={handleInputChange}
//                       error={!!formErrors.mobile}
//                       helperText={formErrors.mobile}
//                     ></TextField>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="email"
//                       name="email"
//                       type="email" /*Not working*/
//                       label="Email id"
//                       required
//                       fullWidth
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={!!formErrors.email}
//                       helperText={formErrors.email}
//                     ></TextField>
//                   </Grid>

//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="city"
//                       name="city"
//                       label="City"
//                       required
//                       fullWidth
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       error={!!formErrors.city}
//                       helperText={formErrors.city}
//                     ></TextField>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="password"
//                       name="password"
//                       label="Password"
//                       type="password"
//                       required
//                       fullWidth
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       error={!!formErrors.password}
//                       helperText={formErrors.password}
//                     ></TextField>
//                   </Grid>
//                   {/* <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <Typography>Date of birth :</Typography>
//                     <Box height={2}></Box>
//                     <TextField
//                       i
//                       d="dob"
//                       name="dob"
//                       type="date"
//                       required
//                       fullWidth
//                       value={formData.dob}
//                       onChange={handleInputChange}
//                       error={!!formErrors.dob}
//                       helperText={formErrors.dob}
//                     ></TextField>
//                   </Grid> */}
//                   <Box size={4} />
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "5em" }}>
//                     <Button
//                       variant="contained"
//                       type="submit"
//                       fullWidth="true"
//                       size="large"
//                       sx={{
//                         mt: "10px",
//                         mr: "20px",
//                         borderRadius: 28,
//                         color: "#fff",
//                         minwidth: "170px",
//                         backgroundColor: "#000",
//                       }}
//                       onClick={handleSignUp}
//                     >
//                       Register
//                     </Button>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography
//                         variant="body1"
//                         component="span"
//                         style={{ marginTop: "10px", cursor: "pointer" }}
//                       >
//                         Already Having An Account?
//                       </Typography>

//                       <Typography
//                         variant="body1"
//                         component="span"
//                         onClick={() => {
//                           navigate("/login");
//                         }}
//                         style={{
//                           marginTop: "10px",
//                           cursor: "pointer",
//                           color: "gray",
//                         }}
//                       >
//                         Login
//                       </Typography>
//                     </Stack>
//                   </Grid>
//                 </Grid>
//               </Container>
//               {/* </ThemeProvider> */}
//             </Box>
//           </Grid>
//         </Grid>
//       </BoxStyle>
//     </>
//   );
// }











// import React,{useState,useEffect, forwardRef} from 'react';
// import api from '../api'

// import { useNavigate } from 'react-router-dom'; 

// const SignIn = ()=>{
//   const [users,setUsers] = useState([]);
//   const [formData,setFormData] = useState({
//     res_name:'',
//     name:'',
//     mobile:'',
//     email:'',
//     city:'',
//     password:''

//   });


//   const navigate = useNavigate();

//   const fetchusers = async () =>{
//     const response = await api.get('/users');
//     setUsers(response.data)
//   };

//   useEffect(()=>{
//     fetchusers();
//   },[]);

//   const handleInputChange =(event)=>{
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   } 

//   const handleFormSubmit = async(event) =>{
//     event.preventDefault();
//     await api.post('/users/',formData)
//     fetchusers();
//     setFormData({
//       res_name:'',
//       name:'',
//       mobile:'',
//       email:'',
//       city:'',
//       password:''
//     });

//     navigate('/login');
//   };

//   return(
//     <div>
//       <nav className='navbar navbar-dark bg-primary '></nav>
//       <div className='container-fluid'>
//          <a className='navbar-brand' href="#">BookNDine</a>
//       </div>

//       <div className='container'>
//         <form onSubmit={handleFormSubmit}>
//           <div className='mb-3 mt-3'>
//             <label htmlFor='Restaurant name' className='form-label'>Restaurant name</label>
//             <input type='text' className='form-control' id='res_name' name='res_name'  onChange={handleInputChange} value={formData.res_name}/>
//           </div>

//           <div className='mb-3 mt-3'>
//             <label htmlFor='Name' className='form-label'>Name</label>
//             <input type='text' className='form-control' id='name' name='name'  onChange={handleInputChange} value={formData.name}/>
//           </div>

//           <div className='mb-3 mt-3'>
//             <label htmlFor='Mobile' className='form-label'>Mobile</label>
//             <input type='text' className='form-control' id='mobile' name='mobile'  onChange={handleInputChange} value={formData.mobile}/>
//           </div>

//           <div className='mb-3 mt-3'>
//             <label htmlFor='Email' className='form-label'>Email</label>
//             <input type='text' className='form-control' id='email' name='email'  onChange={handleInputChange} value={formData.email}/>
//           </div>

//           <div className='mb-3 mt-3'>
//             <label htmlFor='City' className='form-label'>City</label>
//             <input type='text' className='form-control' id='city' name='city'  onChange={handleInputChange} value={formData.city}/>
//           </div>

//           <div className='mb-3 mt-3'>
//             <label htmlFor='Password' className='form-label'>Password</label>
//             <input type='text' className='form-control' id='password' name='password'  onChange={handleInputChange} value={formData.password}/>
//           </div>

//         <button type = 'submit' className='btn btn-primary'>
//             Submit
//         </button>
         

//         </form>
//       </div>

//     </div>
//   );

// }

// export default SignIn;



import React,{useState,useEffect, forwardRef} from 'react';
import api from '../../../api'

import {
  Box,
  Grid,
  styled,
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Stack,
} from "@mui/material";
// import Login from "./Log";
import img from "../../../assets/img1.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Checkbox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { Rating } from "@mui/material";


import { useNavigate } from "react-router-dom";
// import {ForgotPassword} from "./ForgotPassword"

const BoxStyle = styled(Box)`
  margin: 5vh 12vh; /* Set your desired percentage margin here */
  border-radius: 2px;
  height: 100vh; /* Set your desired percentage height here */
  background: #fff;
  color: #2874f0;
  box-shadow: 0 2px 4px 1px rgb(0 0 0 / 40%);

  @media (max-width: 1000px) {
    height: 0vh; /* Set a different height for smaller screens */
  }
`;

const center = {
  position: "relative",
  top: "50%",
  left: "35%",
};

const darktheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const responsiveStyles = {
  "@media (max-width: 600px)": {
    margin: "5% 2%",
    height: "auto",
  },
};

const imageURL = "images/img1.jpg";

export default function SignIn() {

  
  const [formData, setFormData] = useState({
    res_name: '',
    mobile: '',
    email: '',
    city: '',
    password: '',
    category: '', // Initialize with an empty string
    cusine: '', // Initialize with an empty string
    rating: null,
  });

  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

// ... (previous code)

const handleFormSubmit = async (event) => {
  event.preventDefault();
  await api.post('/restaurants/', formData);
  setFormData({
    res_name: '',
    mobile: '',
    email: '',
    city: '',
    password: '',
    category: '',
    cusine: '',
    rating: null,
  });
  navigate('/restaurant-login');
};

  
  // ... (remaining code)
  

//   const user = {
//     res_name: "",
//     name: "",
//     mobile: "",
//     email: "",
//     city: "",
//     password: "",
//   }

//   const [formData, setFormData] = useState(user);

  const [formErrors, setFormErrors] = useState({
    res_name: "",
    mobile: "",
    email: "",
    city: "",
    password: "",
    category:"",
    rating: null,
  });


  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = `${key} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  return (
    <>
      <BoxStyle xs={responsiveStyles}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            {/* <Image src={imageURL} alt="Login Image" /> */}
            <Box
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "blue",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              style={{
                backgroundSize: "cover",
                height: "60vh",
                color: "#000",
                background: "white",
              }}
            >
              {/* <ThemeProvider theme={darktheme}> */}
              <Container>
                <Box height={10} />
                <Box sx={center}>
                  <Typography component="h1" variant="h4">
                    Register
                  </Typography>
                </Box>
                <Box height={10}></Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="res_name"
                      name="res_name"
                      label="Restaurant name"
                      autoComplete="res_name"
                      required
                      fullWidth
                      onChange={handleInputChange} value={formData.res_name}
                      error={!!formErrors.res_name}
                      helperText={formErrors.res_name}
                    ></TextField>
                  </Grid>
                 
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="mobile"
                      name="mobile"
                      label="Mobile number"
                      required
                      fullWidth
                      onChange={handleInputChange} value={formData.mobile}
                      error={!!formErrors.mobile}
                      helperText={formErrors.mobile}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="email"
                      name="email"
                      type="email" /*Not working*/
                      label="Email id"
                      required
                      fullWidth
                      onChange={handleInputChange} value={formData.email}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                    ></TextField>
                  </Grid>

                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="city"
                      name="city"
                      label="City"
                      required
                      fullWidth
                      onChange={handleInputChange} value={formData.city}
                      error={!!formErrors.city}
                      helperText={formErrors.city}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="password"
                      name="password"
                      label="Password"
                      type="password"
                      required
                      fullWidth
                      onChange={handleInputChange} value={formData.password}
                      error={!!formErrors.password}
                      helperText={formErrors.password}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Select Category</MenuItem>
                    <MenuItem value="Cafe">Cafe</MenuItem>
                    <MenuItem value="Restaurant">Restaurant</MenuItem>
                    {/* Add more options as needed */}
                  </Select>
                </Grid>
                
                <Grid item xs={12} sm={6} sx={{ ml: "3em", mr: "3em", display: "flex", alignItems: "center" }}>
  <Typography component="legend" sx={{ marginRight: "1em" }}>Rating</Typography>
  <Rating
    name="rating"
    value={formData.rating}  // Ensure formData.rating is a string
    onChange={(event, newValue) => {
      setFormData({
        ...formData,
        rating: newValue.toString()  // Convert newValue to string
      });
    }}
  />
</Grid>

                  <Box size={4} />
                  <Grid item xs={12} sx={{ ml: "3em", mr: "5em" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth="true"
                      size="large"
                      sx={{
                        mt: "10px",
                        mr: "20px",
                        borderRadius: 28,
                        color: "#fff",
                        minwidth: "170px",
                        backgroundColor: "#000",
                      }}
                      onClick={handleFormSubmit}
                    >
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
                    <Stack direction="row" spacing={2}>
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ marginTop: "10px", cursor: "pointer" }}
                      >
                        Already Having An Account?
                      </Typography>

                      <Typography
                        variant="body1"
                        component="span"
                        onClick={() => {
                          navigate("/restaurant-login");
                        }}
                        style={{
                          marginTop: "10px",
                          cursor: "pointer",
                          color: "gray",
                        }}
                      >
                        Login
                      </Typography>
                    </Stack>
                  </Grid>


                </Grid>
              </Container>
              {/* </ThemeProvider> */}
            </Box>
          </Grid>
        </Grid>
      </BoxStyle>
    </>
  );

}