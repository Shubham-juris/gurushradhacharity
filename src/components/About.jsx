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
    <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-10 border rounded-xl shadow-xl bg-white p-6 md:p-10">
        
        {/* Responsive Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <img
              src={Animated}
              alt="Empowerment"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Responsive Text Block */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <section className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full max-w-2xl">
            <h1
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-800 mb-4 leading-snug"
            >
              Guru Charity Foundation: Empowering Communities, Changing{' '}
              <span className="text-red-600">Lives</span>
            </h1>
            <p
              ref={paragraphRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            >
              Every person deserves access to safe and clean water. Through this project, we aim to bring sustainable water solutions to communities in need by installing wells, purifiers, and sanitation facilities. Our goal is to reduce waterborne illnesses and ensure healthier futures for all.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Animation;
