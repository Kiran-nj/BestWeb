import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GiReactor } from 'react-icons/gi';

const Loader = () => {
  const loaderRef = useRef(null);
  const bigIconRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    // Animate the fill effect on the big icon
    const fillEffect = () => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0, transformOrigin: 'bottom center' }, // Initial state (empty)
        {
          scaleY: 1, // Final state (full)
          duration: 3, // Duration of the fill effect
          ease: 'power2.out', // Easing function
          delay: 1, // Delay before starting the fill effect
          onComplete: () => {
            // Once the fill effect is complete, fade out the loader
            gsap.to(loaderRef.current, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                loaderRef.current.style.display = 'none'; // Hide the loader
              },
            });
          },
        }
      );
    };

    fillEffect(); // Start the fill effect animation
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-[#EF9AAA] z-50"
    >
      {/* Big icon with a water fill effect */}
      <div className="relative text-9xl z-50">
        {/* Water fill mask */}
        <div
          ref={fillRef}
          className="absolute inset-0 bg-[#00BFFF] transform origin-bottom z-10"
          style={{ clipPath: 'url(#icon-mask)' }} // Mask applied here
        />
        {/* Big icon initially set to light grey */}
        <GiReactor
          className="text-light-grey"
          style={{ color: '#D3D3D3' }} // Light grey color
          ref={bigIconRef}
        />
        <svg width="0" height="0">
          <defs>
            <clipPath id="icon-mask">
              <path d="M0,0 H100 V100 H0 Z" /> {/* Adjust path to match icon shape */}
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
