import React, { useEffect, useRef } from 'react';
import water from "../assets/educationbnr.jpg";
import logo from "../assets/logo/guru1.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll('.word');

    gsap.fromTo(
      words,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const text =
    "Every child matters. Join us in building a future where quality education is a right, not a privilege.";

  const words = text.split(' ').map((word, i) => (
    <span key={i} className="word inline-block mr-1 opacity-0">
      {word}
    </span>
  ));

  return (
    <>
      <section>
        <img
          src={water}
          alt="Education Banner"
          className="w-full h-48 sm:h-64 mt-16 md:h-80 lg:h-96 object-cover shadow-lg"
          style={{ maxHeight: '50vh' }}
        />
      </section>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-7xl mx-auto px-10 gap-8 text-lg md:text-xl lg:text-2xl">
        {/* Text Section */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg w-full lg:w-[40%] text-center lg:text-left flex flex-col justify-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Education: The Path to a Brighter Future
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-4">
            GuruCharity is dedicated to advancing education and ensuring access to quality learning opportunities for underserved communities. Through innovative programs and community engagement, we strive to empower every child and adult with the knowledge and skills needed for a better, sustainable future. From building schools in remote areas to providing scholarships, digital classrooms, and essential learning materials, our initiatives address both immediate educational needs and long-term personal and community development. Education is the foundation for lasting change — and we’re committed to making it accessible to all.
          </p>
        </div>

        {/* Image Text Section */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center animate-fade-in-down">
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-0">
            <span className="text-blue-600 font-bold">
              Discover how access to quality education is transforming lives and building a foundation for lasting change in underprivileged areas.
            </span>
            {" "}
            In many communities, the lack of educational resources leads to limited opportunities, poverty, and long-term inequality. GuruCharity provides access to learning through schools, scholarships, teacher training, and digital classrooms, helping students unlock their full potential. Children stay in school, gain valuable knowledge, and dream beyond their circumstances. Beyond academic success, education empowers individuals to lead healthier, more independent lives. It’s not just about learning — it’s the key to dignity, opportunity, and a brighter, sustainable future.
          </p>
        </div>

        {/* Logo Section */}
        <div className="w-full lg:w-[20%] flex flex-col justify-center animate-fade-in-down">
          <img
            src={logo}
            alt="GuruCharity Logo"
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Footer Animated Text */}
      <div className="p-6  mx-auto text-center mt-10">
        <h3
          ref={paragraphRef}
           className='p-10 text-blue-600 font-bold text-6xl'
        >
          {words}
        </h3>
      </div>

      {/* Custom Keyframe Animations */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}
      </style>
    </>
  );
};

export default Education;
