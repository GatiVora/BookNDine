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
import SignIn from "./Components/User/Authentication/Signin";
import Landing from "./Components/Landing";
import Profile from "./Components/User/Profile";

import Profile_Index from "./Components/User/Profile_Index";

import LocationDetector from "./Components/Demo";
import Tables from '../src/Components/RestaurantOwner/Tables'
import Menu from "./Components/RestaurantOwner/Menu";
import Booking from "./Components/RestaurantOwner/Bookings";
import TableR from "./Components/RestaurantOwner/TableR"
import Tab from './Components/RestaurantOwner/Table_page';
import Bookings from "./Components/RestaurantOwner/Bookings_page";
import Menuu from "./Components/RestaurantOwner/Menu_page";

// import PopcornPreloader from "./Components/Preloader/Popcorn";

function App() {
  return (
    <>

      <Routes>

        <Route path="/" exact element={<Initial />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" exact element={<Home />}></Route>
        </Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route
          path="/restaurant-login"
          exact
          element={<Restaurant_login />}
        >
        </Route>
        <Route
          path="/restaurant-register"
          exact
          element={<Restaurant_register />}
        >
        </Route>
        {/* <Route path = "/resetpassword" exact element={<ForgotPassword/>}></Route> */}
        <Route path="/signin" exact element={<SignIn />}></Route>


        <Route path="/profile" exact element={<Profile />}></Route>

        {/* <Route path="/profile" exact element={<Profile_Index />}></Route> */}



        <Route element={<PrivateRoute />}>
          <Route path="/home" exact element={<Home />}></Route>
        </Route>

        <Route path="/restaurants" element={<Restaurants />}></Route>
        <Route path="/restaurants/:city" element={<Restaurants />}></Route>
        {/* <Route path="/restaurant/:id" element={<Landing />}></Route> */}
        <Route path="/restaurant/:id" element={<Landing />} />

        <Route path="/demo" element={<LocationDetector />} />


        <Route element={<PrivateRoute2 />}>
          <Route path="/reshome" exact element={<Res />}></Route>


        </Route>

        <Route path="/tables" exact element={<Tab/>}></Route>
        <Route path="/menu" exact element={<Menuu />}></Route>
        <Route path="/bookings" exact element={<Bookings />}></Route>

        
        {/* <Route path='/dashboard' component={Home} />
        <Route path='/tables' component={TableR} />
        <Route path='/menu' component={Menu} />
        <Route path='/bookings' component={Booking} /> */}
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
