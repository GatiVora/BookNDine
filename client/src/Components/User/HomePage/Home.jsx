import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Recommend from './Recommend';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Scroll from './Scroll';
import Services from './Services';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch('https://ipapi.co/json');
        const data = await response.json();
        setCity(data.city);
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };

    fetchCity();
  }, []);

  const auth = useAuth();
const cityy = "Nadiad";
  return (
    <>
      <Scroll />
      <Navbar />
      <Hero />
      <Services />
      <h1>&nbsp;&nbsp;&nbsp;Top Restaurants in {cityy}:</h1>
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}
