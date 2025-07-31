import React, { useRef, useEffect } from 'react';
import Animated from '../assets/logo/banner.avif';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const headingRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div className="py-10 sm:px-2  lg:px-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-8 border-2 rounded-lg shadow-2xl bg-white p-6">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-[26rem]">
          <img
            src={Animated}
            alt="Empowerment"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-3/4 -mt-4">
          <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-800 mb-4"
            >
               Guru Charity Foundation: Empowering Communities, Changing <span className="text-red-600"> Lives</span>
            </h1>
            <p
              ref={paragraphRef}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
            >
             Every person deserves access to safe and clean water. Through this project, we aim to bring sustainable water solutions to communities in need by installing wells, purifiers, and sanitation facilities. Our goal is to reduce waterborne illnesses and ensure healthier futures for all.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Animation;
