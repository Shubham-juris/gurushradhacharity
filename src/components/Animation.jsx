import React, { useRef, useEffect } from 'react';
import Animated from '../assets/animated.jpg';
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
    <div className="px-4 py-10 sm:px-6 lg:px-16 bg-gray-50">
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
        <div className="w-full lg:w-1/2">
          <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-800 mb-4"
            >
              Empowering Communities, Changing Lives
            </h1>
            <p
              ref={paragraphRef}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Join us in our mission to bring hope, support, and opportunities to those in need. Together, we can create a brighter and more compassionate world.
              Whether it’s feeding the hungry, educating children, or providing clean water, your support makes a real difference.
              Every act of kindness—big or small—has the power to transform lives.
              Stand with us as we work to uplift communities, restore dignity, and build a future filled with hope and opportunity for all.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Animation;
