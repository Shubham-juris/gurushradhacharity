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
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-10 border rounded-xl shadow-2xl bg-white p-6 md:p-10">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full pb-[56.25%] lg:pb-0 lg:h-full">
            <img
              src={Animated}
              alt="Empowerment"
              className="absolute lg:static top-0 left-0 w-full h-full lg:h-[26rem] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <section className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <h1
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800"
            >
              Empowering Communities, Changing <span className="text-red-600">Lives</span>
            </h1>
            <p
              ref={paragraphRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            >
              Join us in our mission to bring hope, support, and opportunities to those in need.
              Together, we can create a brighter and more compassionate world.
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
