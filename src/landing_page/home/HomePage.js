import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Awards from './Awards';
import Navbar from '../Navbar';
import Footer from '../Footer'; 
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';  



const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;