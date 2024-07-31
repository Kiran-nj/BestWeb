import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import LocomotiveScroll from "locomotive-scroll";
import HorizontalScroll from './Components/HorizontalScroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="">
      <Navbar />
      <div className="relative">
      <Header className="" /> {/* Fixed at the top */}
      <Banner className="" /> {/* Adjust mt and translate-y values as needed */}
      <HorizontalScroll/>
    </div>

    </div>
  );
}

export default App;
