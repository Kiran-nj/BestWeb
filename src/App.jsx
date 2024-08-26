import React from 'react';
import './Components/animate.css'; // Make sure this path is correct

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import LocomotiveScroll from "locomotive-scroll";
import HorizontalScroll from './Components/HorizontalScroll';
import Attribute from './Components/Attribute';
import Lavender from './Components/Lavender';
import Available from './Components/Available';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className="">
      <Navbar />
       <div className="relative">
      <Header className="" />
       <Banner className="" /> 
    <HorizontalScroll/>
     <Attribute />
   <Lavender />
          <Available />
    </div> 

    </div>
  );
}

export default App;
