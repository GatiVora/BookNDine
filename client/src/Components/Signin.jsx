import React from "react";
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
import img from "../assets/img1.jpg";
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
`;
const center = {
  position: "relative",
  top: "50%",
  left: "35%",
};

// const Image = styled('img')({
//     width: 250,
//     margin: 'auto',
//     display: 'block',
//     padding: '50px 0 0'
// })

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
  const navigate = useNavigate();

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
                <Box height={20} />
                <Box sx={center}>
                  <Typography component="h1" variant="h4">
                    Register
                  </Typography>
                </Box>
                <Box height={35}></Box>
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
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="mobile_number"
                      name="mobile_number"
                      label="Mobile number"
                      required
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="email"
                      name="email"
                      label="email"
                      required
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="dob"
                      name="dob"
                      label="DOB"
                      required
                      fullWidth
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
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                    <TextField
                      i
                      d="password"
                      name="password"
                      label="Password"
                      required
                      fullWidth
                    ></TextField>
                  </Grid>

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
                      onClick={() => {
                        navigate("/login");
                      }}
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
