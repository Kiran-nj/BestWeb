import React, { useEffect } from 'react';
import './Components/animate.css'; // Ensure the path is correct
import LocomotiveScroll from "locomotive-scroll";

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import HorizontalScroll from './Components/HorizontalScroll';
import Attribute from './Components/Attribute';
import Lavender from './Components/Lavender';
import Available from './Components/Available';
import Loader from './Components/Loader';
import { GiReactor } from 'react-icons/gi';

function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" className="">
      <Loader icon={GiReactor} />
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
