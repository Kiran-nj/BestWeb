import React, { useRef } from 'react';
import reactor from './../../public/Assets/reactor1.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { pattern1, pattern2 } from './Constants';

gsap.registerPlugin(ScrollTrigger)
const InfiniteMover = () => {
const scrollRef=useRef();

/* used for scaling image */
useGSAP(() => {
const boxes = gsap.utils.toArray
(scrollRef.current.children);
boxes.forEach((box) => {
  gsap.to(box,{
    scale:2,
    scrollTrigger:{
        trigger:box,
        start: 'top, bottom',
        scrub:true,
 
    },
    ease:'power2.in'
  })
})

},[])

  return (
    <>
    
    <div className=" md:mt-[170px] md:translate-y-[-280px] infinite-mover absolute top-0 left-0  
    flex w-[100vw]   md:w-[200vw] z-10 ">
      <img 
        className="w-1/2 bg-transparent" 
        src={pattern1} 
        alt="Pattern 1" 
      />
      <img 
        className="w-1/2 -ml-1" 
        src={pattern1} 
        alt="Pattern 2" 
      />
    </div>
    {/* reactor image scaling up */}
    <div ref={scrollRef} className='mt-[200px] md:mt-[-70px] translate-y-[-280px] relative overflow-hidden'>
      <img  src={reactor} className="scale" alt="Reactor" />
    </div>

    {/* second div with infinite mover   */}
    <div className='hidden md:block  w-[100vw] md:w-[1000px] overflow-hidden'>
    <div className="bg-transparent  infinite-mover absolute top-[740px] left-0 
    flex w-[100vw] md:w-[200vw] z-10 ">
              <img class="w-1/2" src={pattern2} alt=""/>
              <img class="w-1/2" src={pattern2} alt=""/>
    </div>
    </div>
    {/* for background */}
    <div className=' bg-[#3B0017] h-[250px]  mt-[0px] translate-y-[-280px] overflow-hidden '>
    <h1 className='text-[#EF9AAA] pt-5 text-lg px-14 md:text-4xl text-center font-poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore architecto, provident consectetur porro unde recusandae eum modi eaque deserunt velit praesentium 
        consequuntur beatae quos nobis! Eos corrupti itaque magni autem.</h1>

    </div>

    </>
  );
}

export default InfiniteMover;