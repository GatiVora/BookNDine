// import logo from './logo.svg';
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/User/HomePage/Home";
import Login from "./Components/User/Authentication/Log";
import Initial from "./Components/Initial"
import PrivateRoute from "./Components/Private";
import PrivateRoute2 from "./Components/ResPrivate";
import Restaurant_login from "./Components/RestaurantOwner/Authentication/Restaurant_login";
import Restaurant_register from "./Components/RestaurantOwner/Authentication/Restaurant_register";
// import SignIn from "./Components/User/Authentication/Signin";
import Restaurants from "./Components/Restaurant_tab/Restaurants";
// import Testimonials from "./Components/User/HomePage/Testimonials";
import Res from "./Components/RestaurantOwner/index";
import SignIn from "./Components/RestaurantOwner/Authentication/Restaurant_register";
import Landing from "./Components/Landing";

function App() {
  return (
    <>

      <Routes>

          <Route path="/" exact element={<Initial/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" exact element={<Home />}></Route>
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
          <Route path="/signin" exact element={<SignIn />}></Route>
          <Route element={<PrivateRoute />}>
            
          <Route path="/home" exact element={<Home />}></Route>
        </Route>

        <Route path="/restaurants" element={<Restaurants />}></Route>
        {/* <Route path="/restaurant/:id" element={<Landing />}></Route> */}
        <Route path="/restaurant/:id" element={<Landing />} />

        <Route element={<PrivateRoute2 />}>
          <Route path="/reshome" exact element={<Res />}></Route>
          </Route>
          {/* <Route path="/images" exact element={<Im/>}></Route> */}
          
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
