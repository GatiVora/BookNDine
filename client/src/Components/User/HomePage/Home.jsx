import Navbar from './Navbar';
import Hero from './Hero';
import Recommend from './Recommend';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Scroll from './Scroll';
import Services from './Services';

// import Login from './Components/Log';


import React, { useEffect } from 'react';
import { useAuth } from '../../Auth';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const { user } = useAuth();
  const navigate = useNavigate();

  // // Check if the user is authenticated
  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login'); // Redirect to the login page if the user is not authenticated
  //   }
  // }, [user, navigate]);

  const auth = useAuth();

  return (
    <>

    <h1>Welcome! {auth.user?.username}</h1>
    <Scroll/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>


    </>
  );
}


