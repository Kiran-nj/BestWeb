import React from 'react'
import { GiReactor } from 'react-icons/gi'
import { GiPowerLightning } from "react-icons/gi";
import InfiniteMover from './InfiniteMover';

const Banner = () => {
  return (
    <>
    <div className='relative flex w-full h-[90vh] bg-[#EF9AAA]  mt-[275px] translate-y-[-280px] '>
        {/* first half */}
      <div className='w-full md:w-[35%] h-[90vh] flex justify-center items-center'>
      <h1 className='text-[350px] '> <GiReactor className='text-[#3B0017]' /> </h1> 
      </div>
      {/* Second Half */}
      <div className='hidden sm:w-[65%] md:flex flex-col justify-center items-center pr-7'>
        <h1 className='text-7xl text-[#3B0017] font-semibold font-poppins '>Reactor , Strong</h1>
        <h1  className='text-5xl text-[#3B0017] font-semibold font-poppins'>Made with Pure energy</h1>
      </div>
      <GiPowerLightning className='absolute text-yellow-300 top-28 text-9xl left-[900px] z-50 hidden md:flex ' />
      <GiPowerLightning className='absolute text-yellow-300 top-[270px] text-9xl right-[720px]  z-50  hidden md:flex ' />    

    </div>
    <div className=''>
    <InfiniteMover  />
    </div>

    </>
  )
}

export default Banner
