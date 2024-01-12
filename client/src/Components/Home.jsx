import Navbar from './Navbar';
import Hero from './Hero';
import Recommend from './Recommend';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Scroll from './Scroll';
import Services from './Services';

// import Login from './Components/Log';


export default function Home() {
  return (
    <>


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


