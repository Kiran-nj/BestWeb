import React, { useEffect, useRef } from 'react';
import { GiAfrica } from "react-icons/gi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Attribute = () => {
  const leftIconsRef = useRef(null);
  const rightIconsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const leftIcons = leftIconsRef.current.children;
    const rightIcons = rightIconsRef.current.children;
    const textLines = textRef.current.children;

    gsap.from(leftIcons, {
      scrollTrigger: {
        trigger: leftIconsRef.current,
        start: "top 90%", // Adjusted to start earlier
        end: "bottom 10%", // Adjusted to end earlier
        scrub: 1,
      },
      opacity: 0,
      x: 300,
      y: 200,
      stagger: 0.1,
      duration: .5,
    });

    gsap.from(rightIcons, {
      scrollTrigger: {
        trigger: rightIconsRef.current,
        start: "top 90%", // Adjusted to start earlier
        end: "bottom 10%", // Adjusted to end earlier
        scrub: 1,
      },
      opacity: 0,
      x: -300,
      y: 200,
      stagger: 0.1,
      duration: .5,
    });

    gsap.from(textLines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%", // Adjusted to start earlier
        end: "bottom 10%", // Adjusted to end earlier
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: .5,
    });
  }, []);

  return (
    <div className='flex justify-center items-center bg-[#3B0017] p-10 pb-20'>
      <div className='flex flex-col gap-10' ref={leftIconsRef}>
        <h1 className='text-[180px] text-yellow-400'><GiAfrica /></h1>
        <h1 className='text-[180px] text-green-400'><GiAfrica /></h1>
      </div>
      <div className='mx-10 my-auto' ref={textRef}>
        <h1 className='text-9xl h-24 text-[#b26de1] font-poppins font-semibold'>GOOD</h1>
        <h1 className='text-9xl text-[#b26de1] font-poppins font-semibold'>REACT</h1>
      </div>
      <div className='flex flex-col gap-10' ref={rightIconsRef}>
        <h1 className='text-[180px] text-cyan-500'><GiAfrica /></h1>
        <h1 className='text-[180px] text-orange-400'><GiAfrica /></h1>
      </div>
    </div>
  );
}

export default Attribute;
