import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GiReactor } from 'react-icons/gi';

// Function to generate a light grey color
const getLightGreyColor = () => '#3B0017'; // Light grey color

const Loader = () => {
  const loaderRef = useRef(null);
  const iconRefs = useRef([]);
  const bigIconRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Function to generate random positions for small icons
    const getRandomPosition = () => ({
      x: Math.random() * screenWidth - screenWidth / 2,
      y: Math.random() * screenHeight - screenHeight / 2,
    });

    // Animate small icons: move across the screen with rotation and color change
    const animateIcons = () => {
      iconRefs.current.forEach((icon) => {
        const { x, y } = getRandomPosition();
        const duration = Math.random() * 5 + 3; // Duration between 3 and 8 seconds

        // Apply light grey color to the icon
        icon.style.color = getLightGreyColor();

        // GSAP animation for the small icons
        gsap.to(icon, {
          x, // Final X position
          y, // Final Y position
          rotation: 360, // Full rotation
          opacity: 1, // Fade out
          duration: 3, // Animation duration
          ease: 'power2.inOut', // Easing function
          repeat: 1, // Repeat animation
          scale: 1.5, // Scale change
          yoyo: true, // Reverses animation on each repeat
        });
      });
    };

    // Fade out small icons and scale up the big icon
    const fadeOutAndScaleUp = () => {
      gsap.to(iconRefs.current, {
        opacity: 0, // Fade out small icons
        duration: 1, // Duration of fade out
        delay: 5, // Delay before starting fade out
        stagger: 0.05, // Delay between each icon fade out
      });

      gsap.fromTo(
        bigIconRef.current,
        { scale: 0.5, opacity: 0 }, // Initial state of the big icon
        {
          scale: 4, // Final scale of the big icon
          opacity: 1, // Final opacity of the big icon
          duration: 3, // Duration of the scaling effect
          delay: 5, // Delay before starting the scaling effect
          rotation: 360, // Full rotation

          ease: 'power3.out', // Easing function for scaling
          onComplete: () => {
            // Once scaling is complete, fade out the loader
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

    animateIcons(); // Start the small icons animation
    fadeOutAndScaleUp(); // Start the big icon fade and scale up animation
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-[#EF9AAA] z-50"
    >
      {/* Small icons: rendered multiple times with random positions and light grey color */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          className="absolute text-4xl"
        >
          <GiReactor />
        </div>
      ))}

      {/* Big icon: scales up and becomes visible at the end */}
      <div
        ref={bigIconRef}
        className="text-9xl text-black z-50"
      >
        <GiReactor />
      </div>
    </div>
  );
};

export default Loader;
