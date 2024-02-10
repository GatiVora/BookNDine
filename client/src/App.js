// import logo from './logo.svg';
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Recommend from './Components/Recommend';
// import Testimonials from './Components/Testimonials';
// import Footer from './Components/Footer';
// import Scroll from './Components/Scroll';
// import Services from './Components/Services';
import Login from "./Components/Log";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Restaurants from "./Components/Restaurants";
import Landing from "./Components/Landing";
import Restaurant_login from "./Components/Restaurant_login";
import Restaurant_register from "./Components/Restaurant_register";
import PrivateRoute from "./Components/Private";

function App() {
  return (
    <>
      
        <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" exact element={<Home />}></Route>
        </Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route
            path="/restaurant-login"
            exact
            element={<Restaurant_login />}
          ></Route>
          <Route
            path="/restaurant-register"
            exact
            element={<Restaurant_register />}
          ></Route>
          {/* <Route path = "/resetpassword" exact element={<ForgotPassword/>}></Route> */}
          <Route path="/signin" exact element={<Signin />}></Route>
          <Route element={<PrivateRoute />}>
            
          <Route path="/home" exact element={<Home />}></Route>
          </Route>
          <Route path="/restaurants" element={<Restaurants />}></Route>
        </Routes>
    

      {/* <Scroll/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>
    <Route path = "/login" exact element={<Login/>}></Route> */}
    </>
  );
}

export default App;
