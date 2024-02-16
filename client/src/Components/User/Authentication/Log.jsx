// import React from "react";
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
// import img from "../assets/img1.jpg";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// // import { Checkbox } from "@mui/icons-material";
// import { Checkbox } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// // import {ForgotPassword} from "./ForgotPassword"

// const BoxStyle = styled(Box)`
//   margin: 5vh 12vh; /* Set your desired percentage margin here */
//   border-radius: 2px;
//   height: 60vh; /* Set your desired percentage height here */
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

// export default function Login() {
//   const [remember, setRemember] = useState(false);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState({
//     username: "",
//     password: "",
//   });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
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
//                 height: "60vh",
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
//                 <Box height={20} />
//                 <Box sx={center}>
//                   <Typography component="h1" variant="h4">
//                     Login
//                   </Typography>
//                 </Box>
//                 <Box height={35}></Box>
//                 <Grid container spacing={1}>
//                   <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                     <TextField
//                       i
//                       d="username"
//                       name="username"
//                       label="Username"
//                       autoComplete="username"
//                       required
//                       fullWidth
//                       value={formData.username}
//                       onChange={handleInputChange}
//                       error={!!formErrors.username}
//                       helperText={formErrors.username}
//                     ></TextField>
//                   </Grid>
//                   <Box height={10}></Box>
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

//                   <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
//                     <Stack direction="row" spacing={2}>
//                       <FormControlLabel
//                         sx={{ width: "60%" }}
//                         onClick={() => setRemember(!remember)}
//                         control={<Checkbox checked={remember} />}
//                         label="Remember me"
//                       />
//                       <Typography
//                         variant="body1"
//                         component="span"
//                         onClick={() => {
//                           navigate("/resetpassword");
//                         }}
//                         style={{ marginTop: "10px", cursor: "pointer" }}
//                       >
//                         Forgot Password?
//                       </Typography>
//                     </Stack>
//                   </Grid>
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
//                       onClick={() => {
//                         if (validateForm()) {
//                           navigate("/home");
//                         }
//                       }}
//                     >
//                       Login
//                     </Button>
//                   </Grid>

//                   <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography
//                         variant="body1"
//                         component="span"
//                         style={{ marginTop: "10px", cursor: "pointer" }}
//                       >
//                         Not yet Registered?
//                       </Typography>

//                       <Typography
//                         variant="body1"
//                         component="span"
//                         onClick={() => {
//                           navigate("/signin");
//                         }}
//                         style={{
//                           marginTop: "10px",
//                           cursor: "pointer",
//                           color: "gray",
//                         }}
//                       >
//                         Register Now
//                       </Typography>
//                     </Stack>
//                   </Grid>
// <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
//   <Stack direction="row" spacing={2}>
//     <Typography
//       variant="body1"
//       component="span"
//       style={{ marginTop: "10px", cursor: "pointer" }}
//     >
//       Are you a restaurant owner?
//     </Typography>

//     <Typography
//       variant="body1"
//       component="span"
//       onClick={() => {
//         navigate("/restaurant-login");
//       }}
//       style={{
//         marginTop: "10px",
//         cursor: "pointer",
//         color: "gray",
//       }}
//     >
//       Login Here
//     </Typography>
//   </Stack>
// </Grid>
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

import { React, useContext } from "react";
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
import img from "../../../assets/img1.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Checkbox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import { AuthContext } from "./AuthContext";

import api from '../../../api'
// import {ForgotPassword} from "./ForgotPassword"

import { useAuth } from "../../Auth";


const BoxStyle = styled(Box)`
  margin: 5vh 12vh; /* Set your desired percentage margin here */
  border-radius: 2px;
  height: 60vh; /* Set your desired percentage height here */
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

export default function Login() {
  const [remember, setRemember] = useState(false);

  // const { setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  const [formData, setFormData] = useState({
    username: '',
    password: ''

  });



  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });


  const auth = useAuth();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const fetchusers = async () =>{
  //   const response = await api.get('/users');
  //   setUsers(response.data)
  // };


  // Inside your component function
  const [errorMessage, setErrorMessage] = useState("");


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   // try {
  //   //   await api.post('/login/', formData);
  //   //   setErrorMessage(""); // Clear any previous error messages
  //   //   // fetchusers();

  //   //   setFormData({
  //   //     username: '',
  //   //     name: '',
  //   //     mobile: '',
  //   //     email: '',
  //   //     city: '',
  //   //     password: '',
  //   //   });
  //   //   setIsLoggedIn(true);
  //   //   navigate('/');
  //   // } catch (error) {
  //   //   setErrorMessage("Invalid credentials");
  //   // }
  //   if (formData.username !== "" && formData.password !== "") {

  //     try{

  //       auth.loginAction(formData);
  //       setErrorMessage(""); 

  //     }catch(error){
  //       setErrorMessage(error.message);
  //     }


  //     return;
  //   }
  // };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formData.username !== "" && formData.password !== "") {
      try {
        await auth.loginAction(formData);
        setErrorMessage(""); // Clear any previous error messages
      } catch (error) {
        setErrorMessage(error.message);
      }

      return;
    }
  };


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
                height: "60vh",
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
                <Box height={20} />
                <Box sx={center}>
                  <Typography component="h1" variant="h4">
                    Login
                  </Typography>
                </Box>
                <Box height={30}></Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="username"
                      name="username"
                      label="Username"
                      autoComplete="username"
                      required
                      fullWidth
                      value={formData.username}
                      onChange={handleInputChange}
                      error={!!formErrors.username}
                      helperText={formErrors.username}
                    ></TextField>
                  </Grid>
                  <Box height={10}></Box>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="password"
                      name="password"
                      label="Password"
                      type="password"
                      required
                      fullWidth
                      value={formData.password}
                      onChange={handleInputChange}
                      error={!!formErrors.password}
                      helperText={formErrors.password}
                    ></TextField>
                  </Grid>

                  {/* <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
                    <Stack direction="row" spacing={2}>
                      <FormControlLabel
                        sx={{ width: "60%" }}
                        onClick={() => setRemember(!remember)}
                        control={<Checkbox checked={remember} />}
                        label="Remember me"
                      />
                      <Typography
                        variant="body1"
                        component="span"
                        onClick={() => {
                          navigate("/resetpassword");
                        }}
                        style={{ marginTop: "10px", cursor: "pointer" }}
                      >
                        Forgot Password?
                      </Typography>
                    </Stack>
                  </Grid> */}

                  <Grid item xs={12} sx={{ ml: "3em", mr: "5em" }}>
                    {/* <Button
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
                      Login
                    </Button> */}

                    <Grid item xs={12} sx={{ ml: "3em", mr: "5em" }}>
                      {errorMessage && (
                        <Typography variant="body1" color="error" sx={{ mt: 1 }}>
                          {errorMessage}
                        </Typography>
                      )}
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
                          minWidth: "170px",
                          backgroundColor: "#000",
                        }}
                        onClick={handleFormSubmit}
                      >
                        Login
                      </Button>


                    </Grid>


                  </Grid>

                  {/* <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
                    <Stack direction="row" spacing={2}>
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ marginTop: "10px", cursor: "pointer" }}
                      >
                        Are you a restaurant owner?
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
                        Login Here
                      </Typography>
                    </Stack>
                  </Grid> */}
                  
                  <Grid item xs={12} sx={{ ml: "3em", mr: "2em" }}>
                    <Stack direction="row" spacing={2}>
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ marginTop: "10px", cursor: "pointer" }}
                      >
                        Not yet registered?
                      </Typography>

                      <Typography
                        variant="body1"
                        component="span"
                        onClick={() => {
                          navigate("/signin");
                        }}
                        style={{
                          marginTop: "10px",
                          cursor: "pointer",
                          color: "gray",
                        }}
                      >
                        Register Now
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