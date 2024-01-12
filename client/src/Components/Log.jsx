import React from "react";
import { Box, Grid, styled, Button, TextField,Typography, Container, Avatar, ThemeProvider, createTheme, FormControlLabel , Stack } from "@mui/material";
import img from "../assets/img1.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Checkbox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

import {  useNavigate} from "react-router-dom";
import {useState} from "react";
// import {ForgotPassword} from "./ForgotPassword"

const BoxStyle = styled(Box)`
  margin: 20vh 12vh; /* Set your desired percentage margin here */
  border-radius: 2px;
  height: 60vh; /* Set your desired percentage height here */
  background: #fff;
  color: #2874f0;
  box-shadow: 0 2px 4px 1px rgb(0 0 0 / 40%);
`;
const center = {
    position : "relative",
    top : "50%",
    left: "35%"
};

// const Image = styled('img')({
//     width: 250,
//     margin: 'auto',
//     display: 'block',
//     padding: '50px 0 0'
// })

const darktheme = createTheme({
    palette:{
        mode:"dark",
    },
})

const imageURL = "images/img1.jpg";

export default function Login() {

    const [remember,setRemember] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <BoxStyle>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6}>
                        {/* <Image src={imageURL} alt="Login Image" /> */}
                        <Box style={{
                            backgroundImage :`url(${img})`,
                            backgroundSize:"cover",
                            height:"60vh",
                            color:"blue"

                        }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                    <Box style={{
                            backgroundSize:"cover",
                            height:"60vh",
                            color:"#000",
                            background:"white",

                        }}>

                    {/* <ThemeProvider theme={darktheme}> */}
                    <Container>

                        <Box height={35}/>
                        <Box sx={center}>
                        <Typography component="h1" variant="h4">

                            Login
                        </Typography>


                        </Box>
                        <Box height={35}></Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sx={{ml:"3em" , mr:"3em"}}>
                            <TextField i d="username" name="username" label="Username" autoComplete="usern ame" required fullWidth></TextField>
                            </Grid>
                            <Box height={10}></Box>
                            <Grid item xs={12} sx={{ml:"3em" , mr:"3em"}}>
                            <TextField i d="password" name="password" label="Password" required fullWidth></TextField>
                            </Grid>

                            <Grid item xs={12} sx={{ml:"3em" , mr:"2em"}}>
                                <Stack direction="row" spacing={2} >
                                    <FormControlLabel sx={{width:"60%"}} 
                                        onClick={() => setRemember(! remember) }
                                        control={<Checkbox checked={remember}/>}
                                        label="Remember me"
                                    />
                                    <Typography variant="body1" component="span" 
                                        onClick={()=> {navigate("/resetpassword")}}
                                        style={{marginTop:"10px" , cursor:"pointer"}}
                                    
                                    >
                                    Forgot Password?

                                    </Typography>
                                </Stack>
                               
                                
                            </Grid>
                            <Grid item xs={12} sx={{ml:"3em" , mr:"5em"}}>
                                <Button variant="contained" type="submit" fullWidth="true" size="large" 
                                    sx={{
                                        mt:"10px",
                                        mr:"20px",
                                        borderRadius:28,
                                        color:"#fff",
                                        minwidth:"170px",
                                        backgroundColor:"#000"
                                    }}
                                >
                                    Login
                                </Button>



                            </Grid>

                            <Grid item xs={12} sx={{ml:"3em" , mr:"2em"}}>
                                <Stack direction="row" spacing={2} >

                                 

                                    <Typography variant="body1" component="span" 
                                        
                                        style={{marginTop:"10px" , cursor:"pointer"}}
                                    
                                    >Not yet Registered?</Typography>
                                   
                                    <Typography variant="body1" component="span" 
                                        onClick={()=> {navigate("/signin")}}
                                        style={{marginTop:"10px" , cursor:"pointer", color:"gray"}}
                                    
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
