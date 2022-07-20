import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';


function Home() {
  return (
    <>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <HeroSection />
      <div class="Container mx-auto">
      <Cards />
      </div>
      <small class='website-rights' text-align='centre'>Jha © 2022</small>
      </>
  );
}

export default Home;
