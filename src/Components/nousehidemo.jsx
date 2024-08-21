import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';
import lavend from '../../public/Assets/lavend.png';
import orange from '../../public/Assets/orange.png';
import blue from '../../public/Assets/blue.png';
import choc from '../../public/Assets/choco.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const HorizontalScrollProductShowcase = () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Ref to store product images
  const scrollRef = useRef([]);
  // Ref for the container of the scrollable elements
  const containerRef = useRef(null);

  // Setup GSAP animations on component mount
  useEffect(() => {
    const boxes = scrollRef.current; // All product image elements
    const container = containerRef.current; // Container element

    // Calculate the width of each section based on container width and number of images
    const sectionWidth = container.offsetWidth / boxes.length / 3;

    // Define animations for each image
    const animations = [
      { x: -300, y: -220, rotate: 0 },   // Animation for first image
      { x: 300, y: -50, rotate: 40, opacity:0 },  // Animation for second image
      { x: -300, y: -80, rotate: -30 }, // Animation for third image
      { x: -350, y: -30, rotate: 80 }   // Animation for fourth image
    ];

    // Apply GSAP animation to each image
    boxes.forEach((box, index) => {
      const startOffset = sectionWidth * (index - 1); // Start point of the animation for each image
      const endOffset = sectionWidth * (index + 1.1); // End point of the animation for each image

      gsap.fromTo(
        box,
        { x: animations[index].x, y: animations[index].y, scale: 1, rotate: animations[index].rotate }, // Initial state of the animation
        {
          x: 0, // Final state of the animation
          y: 0,
          scale: 1,
          opacity:1,
          rotate: 0,
          scrollTrigger: {
            trigger: container, // Use the container as the trigger
            start: `left+=${startOffset}px center`, // Start point relative to the container left
            end: `left+=${endOffset}px center`, // End point relative to the container left
            scrub: 1, // Smoothly animate based on scroll position
            markers: false, // Uncomment to see markers for debugging
          },
          ease: 'power1.out', // Easing function for the animation
        }
      );
    });
  }, []);

  // Product details array
  const products = [
    { name: 'BERRY', image: lavend },
    { name: 'CLASSIC', image: orange },
    { name: 'VANILLA', image: blue },
    { name: 'MADAG\'R', image: choc },
  ];

  // Star SVG component for decorative purposes
  const StarSVG = ({ className }) => (
    <svg className={className} width="112" height="166" viewBox="0 0 112 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M56.0115 4.37021C56.0115 47.7972 32.259 83.0018 2.95888 83.0018C1.96598 83.0018 0.979451 82.9613 0 82.8815V83.1223C0.979451 83.0425 1.96598 83.0021 2.95888 83.0021C32.259 83.0021 56.0115 118.207 56.0115 161.634C56.0115 163.099 55.9845 164.555 55.9311 166H56.1038C56.0505 164.555 56.0234 163.099 56.0234 161.634C56.0234 118.207 79.7759 83.0021 109.076 83.0021C110.057 83.0021 111.032 83.0416 112 83.1195V82.8844C111.032 82.9623 110.057 83.0018 109.076 83.0018C79.7759 83.0018 56.0234 47.7972 56.0234 4.37021C56.0234 2.90375 56.0505 1.44667 56.104 0H55.931C55.9844 1.44667 56.0115 2.90375 56.0115 4.37021Z" fill="currentColor" />
    </svg>
  );

  // Ref for the target section and measure the container width
  const targetRef = useRef(null);
  const [containerMeasureRef, { width }] = useMeasure();

  // Track scroll progress using framer-motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Calculate the horizontal scroll position based on the scroll progress
  const x = useTransform(scrollYProgress, [0, 1], [0, -width * (products.length - 1)]);

  return (
    <section ref={targetRef} className="h-[300vh] mt-[-280px]">
      <div ref={containerMeasureRef} className="sticky top-0 h-[100vh] overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex w-fit bg-[#68219b] text-[#b26de1] h-full"
          ref={containerRef}
        >
          {products.map((product, index) => (
            <div key={index} className="relative w-screen h-full flex-shrink-0">
              <div className="flex flex-col moo items-center relative z-10 translate-y-[10%]">
                <motion.div
                  className="model relative w-fit"
                >
                  <img
                    className="product-img h-[70vh] object-contain"
                    src={product.image}
                    alt=""
                    ref={(el) => (scrollRef.current[index] = el)}
                  />
                </motion.div>
                <button
                  className="uppercase hover:bg-white hover:text-[#006450] hover:border-white 
                  transition-all duration-300 ease-in-out text-3xl font-black p-4 border border-[#b26de1] 
                  rounded-lg mt-10"
                >
                  shop now
                </button>
              </div>
              <motion.h1
                className="uppercase text-[10vw] md:text-[15vw] absolute top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2 font-black text-[#b26de1] font-poppins text-center"
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [
                      index / products.length,
                      (index + 0.5) / products.length,
                      (index + 1) / products.length,
                    ],
                    [0, 1, 0]
                  ),
                }}
              >
                {product.name}
              </motion.h1>

              <div className="stars w-full h-full absolute top-0 left-0">
                <StarSVG className="absolute w-10 h-10 left-[20%] scale-x-[1.4] top-0" />
                <StarSVG className="absolute w-9 h-9 left-[80%] scale-x-[1.4] top-[15%]" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollProductShowcase;
