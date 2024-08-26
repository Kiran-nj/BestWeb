import React from 'react'
import amazon from '../../public/Assets/amazon.png';
import zepto from '../../public/Assets/zepto.png';
import blinkit from '../../public/Assets/blinkit.png';
import swiggy from '../../public/Assets/swiggy.png';
import bigbasket from '../../public/Assets/bigbasket.png';
const Available = () => {
  return (
    <div className='p-5 pt-32 pb-32'>
      <h1 className='text-3xl md:text-6xl font-poppins font-semibold flex items-center justify-center text-[#3B0017] mb-20'>Available On</h1>
    <div className='  md:flex justify-center items-center gap-8 md:mb-8 mx-16'>
        <img className='w-[200px] hover:rotate-6 transition-ease duration-100' src={zepto} alt="" />
        <img className='w-[200px] hover:rotate-6 transition-ease duration-100' src={blinkit} alt="" />
        <img className='w-[200px] hover:rotate-6 transition-ease duration-100' src={swiggy} alt="" />        
        <img className='w-[200px] hover:rotate-6 transition-ease duration-100' src={bigbasket} alt="" />

    </div>
    <div className='flex justify-center items-center'>
    <img className='w-[200px] hover:scale-105 transition-ease duration-100' src={amazon} alt="" />

    </div>
    </div>
  )
}

export default Available
