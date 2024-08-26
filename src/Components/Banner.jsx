import React, { useState, useEffect } from 'react';
import { GiReactor, GiPowerLightning } from 'react-icons/gi';
import InfiniteMover from './InfiniteMover';

const Banner = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLargeScreen) {
    return (
      <>
        <div className='relative flex w-full h-[90vh] bg-[#EF9AAA] mt-[275px] translate-y-[-280px]'>
          {/* first half */}
          <div className='w-full md:w-[35%] h-[90vh] flex justify-center items-center'>
            <h1 className='text-[350px]'>
              <GiReactor className='text-[#3B0017]' />
            </h1>
          </div>
          {/* Second Half */}
          <div className='hidden sm:w-[65%] md:flex flex-col justify-center items-center pr-7'>
            <h1 className='text-7xl text-[#3B0017] font-semibold font-poppins'>
              Reactor , Strong
            </h1>
            <h1 className='text-5xl text-[#3B0017] font-semibold font-poppins'>
              Made with Pure energy
            </h1>
          </div>
          <GiPowerLightning className='absolute text-yellow-300 top-28 text-9xl left-[900px] z-50 hidden md:flex' />
          <GiPowerLightning className='absolute text-yellow-300 top-[270px] text-9xl right-[720px] z-50 hidden md:flex' />
        </div>
        <div className=''>
          <InfiniteMover />
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className='flex w-full h-screen bg-[#EF9AAA] flex-col justify-center items-center relative'>
           <GiReactor className='text-[#3B0017] text-[250px]' />
        <h1 className='text-3xl text-[#3B0017] font-semibold font-poppins text-center'>
          Reactor <br />Made with Pure energy
        </h1>
        <GiPowerLightning className='absolute text-yellow-300 left-24 top-44   text-6xl   ' />

        {/* You can add any additional small-screen-specific content here */}
      </div>
              <div className='md:relative'>
              <InfiniteMover />
            </div>
            </>
    );
  }
};

export default Banner;
