import React from 'react';
import { GiNinjaStar } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-[#FFDE17] text-center py-5 ">
      <div className="flex justify-between items-center text-xl text-red-500 mx-14">
        <div className='hidden md:flex font-poppins' >PLANT BASED PROTEIN</div>
        <GiNinjaStar className='text-3xl ' />
        <div className='hidden md:flex font-poppins'>PLANT BASED PROTEIN</div>
        <GiNinjaStar className='text-3xl hidden md:flex' />
        <div className='hidden lg:flex font-poppins'>PLANT BASED PROTEIN</div>
        <GiNinjaStar className='text-3xl hidden lg:flex' />
        <div className='hidden lg:flex font-poppins'>PLANT BASED PROTEIN</div>
      </div>
    </nav>
  );
};

export default Navbar;
