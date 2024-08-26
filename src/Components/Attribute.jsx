import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { pattern3 } from './Constants';


const TechShowcase = () => {
  return (
    <div className='relative'> 
    <div className="flex w-full flex-col items-center bg-gray-800 pb-20 pt-14 md:mb-20  ">
      <div className=" animate-fadeIn">
        <h1 className="text-2xl md:text-5xl p-10 font-bold text-slate-300">Technology Stack</h1>
      </div>
      <div className="flex gap-16">
        <div className="text-blue-500  text-5xl md:text-9xl hover:rotate-180 transition-all duration-700 ">
          <FaReact />
        </div>
        <div className="text-green-500 text-5xl md:text-9xl hover:animate-pulse hover:scale-110 transition-all duration-200 ">
          <FaNodeJs />
        </div>
        <div className="text-blue-300 text-5xl md:text-9xl hover:text-orange-400 transition-all duration-300">
          <FaCss3Alt />
        </div>
      </div>

    </div>
          <div className="bg-transparent  infinite-mover mt-[-152px] mb-[-10px]
    md:flex hidden md:w-[200vw] z-20 ">
              <img class="w-1/2" src={pattern3} alt=""/>
              <img class="w-1/2" src={pattern3} alt=""/>

    </div>
    </div>
  );
};

export default TechShowcase;
