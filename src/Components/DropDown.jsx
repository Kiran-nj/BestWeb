import React from 'react';
import { GiNinjaStar, GiReactor } from "react-icons/gi";
import { pattern2 } from './Constants';

const DropDown = () => {
  return (
    <div className='bg-[#3B0017] text-center py-5 w-full hidden'>
      <nav>
        <div className="flex justify-between items-center text-xl text-yellow-500 mx-8">
          <div className='hidden md:flex font-poppins'>PLANT BASED PROTEIN</div>
          <GiNinjaStar className='text-3xl' />
          <div className='hidden md:flex font-poppins'>PLANT BASED PROTEIN</div>
          <GiNinjaStar className='text-3xl hidden md:flex' />
          <div className='hidden lg:flex font-poppins'>PLANT BASED PROTEIN</div>
          <GiNinjaStar className='text-3xl hidden lg:flex' />
          <div className='hidden lg:flex font-poppins'>PLANT BASED PROTEIN</div>
        </div>
      </nav>
      <div className='bg-yellow-400 flex mt-3 pb-16'>
        <div className='w-1/2 my-16 mx-16'>
          <h1><GiReactor className='text-[200px] md:text-[300px] lg:text-[400px]' /></h1>
        </div>
        <div className='w-1/2 text-left mt-5 mb-20'>
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-poppins font-semibold'>Product</h1>
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-poppins font-semibold'>Recipes</h1>
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-poppins font-semibold'>About us</h1>
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-poppins font-semibold'>Blog</h1>
        </div>
      </div>
      {/* Infinite mover section */}
      <div className="bg-transparent h-[1px] infinite-mover relative flex w-[200vw] sm:w-[200vw] z-20 overflow-hidden">
        <img className="w-1/2" src={pattern2} alt="pattern" />
        <img className="w-1/2" src={pattern2} alt="pattern" />
      </div>
      <div className="bg-transparent h-[200px] infinite-mover absolute top-[500px] flex w-[200vw] sm:w-[200vw] z-20 overflow-hidden">
        <img className="w-1/2" src={pattern2} alt="pattern" />
        <img className="w-1/2" src={pattern2} alt="pattern" />
      </div>
    </div>
  );
}

export default DropDown;
