import React from 'react'
import '../Components/animate.css'; // Make sure this path is correct
import CardContainer from './Card';
import { pattern1, pattern2, pattern3, pattern4 } from './Constants';



const Lavender = () => {
  return (
    <>
    <div className='bg-[#b26de1] h-[20vh] md:h-[65vh]  w-full'>
        
          {/* second div with infinite mover   */}
{/*     <div className="bg-transparent  infinite-mover  mt-[0px]
    md:flex hidden md:w-[200vw] z-20 overflow-hidden">
              <img class="w-1/2" src={pattern3} alt=""/>
              <img class="w-1/2" src={pattern3} alt=""/>
              /* commit 
    </div> */}
    <h1 className=' text-6xl md:text-[150px] text-center font-semibold  text-[#461A63] font-poppins
     md:py-auto md:mt-[10px] '>CARNIVORE</h1>
      {/* infinitemover 2 */}
      <div className="bg-transparent  infinite-mover  mt-[100px]
    md:flex hidden md:w-[200vw] z-10 overflow-hidden">
              <img class="w-1/2" src={pattern4} alt=""/>
              <img class="w-1/2" src={pattern4} alt=""/>
    </div>

    </div>
    {/*cards  */}
     <div className=''>
       <CardContainer />
     </div>
    </>
  )
}

export default Lavender
