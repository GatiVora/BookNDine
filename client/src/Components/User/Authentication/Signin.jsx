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
import Login from "./Log";
import img from "../../../assets/img1.jpg";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Checkbox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

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

  


  const [users,setUsers] = useState([]);
  const [formData,setFormData] = useState({
    username:'',
    name:'',
    mobile:'',
    email:'',
    city:'',
    password:''

  });


  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const fetchusers = async () =>{
    const response = await api.get('/users');
    setUsers(response.data)
  };

  useEffect(()=>{
    fetchusers();
  },[]);

  const handleInputChange =(event)=>{
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
     // Validation for mobile number
     if (name === 'mobile' && value.trim() !== '') {
      if (!/^\d{10}$/.test(value)) {
        setFormErrors({ ...formErrors, mobile: 'Invalid mobile number' });
      } else {
        setFormErrors({ ...formErrors, mobile: '' });
      }
    }

    // Validation for email
    if (name === 'email' && value.trim() !== '') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setFormErrors({ ...formErrors, email: 'Invalid email address' });
      } else {
        setFormErrors({ ...formErrors, email: '' });
      }
    }

    if (name === 'password' && value.trim() !== '') {
      if (value.length < 6) {
        setFormErrors({ ...formErrors, password: 'Password must be at least 6 characters long' });
      } else {
        setFormErrors({ ...formErrors, password: '' });
      }
    }

  };

// ... (previous code)

const handleFormSubmit = async (event) => {
    event.preventDefault();


    if (formData.username.trim() === "") {
      setFormErrors({ ...formErrors, username: "Username is required" });
      return;
    }

    
    const usernameExists = users.some(user => user.username === formData.username);
    if (usernameExists) {
      setFormErrors({ ...formErrors, username: "Username already exists" });
      return;
    }
  
    if (formData.name.trim() === "") {
      setFormErrors({ ...formErrors, name: "Name is required" });
      return;
    }
  
    if (formData.mobile.trim() === "") {
      setFormErrors({ ...formErrors, mobile: "Mobile number is required" });
      return;
    }
  
    if (formData.email.trim() === "") {
      setFormErrors({ ...formErrors, email: "Email is required" });
      return;
    }
  
    if (formData.city.trim() === "") {
      setFormErrors({ ...formErrors, city: "City is required" });
      return;
    }
  
    if (formData.password.trim() === "") {
      setFormErrors({ ...formErrors, password: "Password is required" });
      return;
    }
    try{
    await api.post('/users/', formData);

    fetchusers();
    setFormData({
      username: '',
      name: '',
      mobile: '',
      email: '',
      city: '',
      password: ''
    });
  
    navigate('/login');
    setErrorMessage("");
  }catch (error) {
    setErrorMessage(error.message);
  }
  };
  

  const [formErrors, setFormErrors] = useState({
    username: "",
    name: "",
    mobile: "",
    email: "",
    city: "",
    password: "",
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
            <a href="/">
            <Box
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "blue",
              }}
            ></Box>
            </a>
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
                      d="username"
                      name="username"
                      label="Username"
                      autoComplete="username"
                      required
                      fullWidth
                      onChange={(e) => {
                        handleInputChange(e);
                        setErrorMessage(""); // Clear error message on change
                      }} value={formData.username}
                      error={!!formErrors.username}
                      helperText={formErrors.username}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="name"
                      name="name"
                      label="Name"
                      required
                      fullWidth
                      onChange={(e) => {
                        handleInputChange(e);
                        setErrorMessage(""); // Clear error message on change
                      }} value={formData.name}
                      error={!!formErrors.name}
                      helperText={formErrors.name}
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
                      onChange={(e) => {
                        handleInputChange(e);
                        setErrorMessage(""); // Clear error message on change
                      }} value={formData.mobile}
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
                      onChange={(e) => {
                        handleInputChange(e);
                        setErrorMessage(""); // Clear error message on change
                      }} value={formData.email}
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
                      onChange={(e) => {
                        handleInputChange(e);
                        setErrorMessage(""); // Clear error message on change
                      }} value={formData.city}
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
                      onChange={(e) => {
                        handleInputChange(e);
                        setErrorMessage(""); // Clear error message on change
                      }} value={formData.password}
                      error={!!formErrors.password}
                      helperText={formErrors.password}
                    ></TextField>
                  </Grid>
                  {/* <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <Typography>Date of birth :</Typography>
                    <Box height={2}></Box>
                    <TextField
                      i
                      d="dob"
                      name="dob"
                      type="date"
                      required
                      fullWidth
                      value={formData.dob}
                      onChange={handleInputChange}
                      error={!!formErrors.dob}
                      helperText={formErrors.dob}
                    ></TextField>
                  </Grid> */}
                  <Box size={4} />
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
                          navigate("/login");
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