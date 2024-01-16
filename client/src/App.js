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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />}></Route>
          {/* <Route path = "/resetpassword" exact element={<ForgotPassword/>}></Route> */}
          <Route path="/signin" exact element={<Signin />}></Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

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
