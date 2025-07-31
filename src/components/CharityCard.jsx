// src/components/CharityCard.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CharityCard = ({ charity }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition duration-300 w-full sm:w-[90%] md:w-[80%] lg:w-[360px] aspect-[4/3] mx-auto"
      style={{
        backgroundImage: `url(${charity.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300 z-10" />

      {/* Sliding Text Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-6 text-white z-20 group-hover:flex hidden flex-col items-center text-center"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{charity.name}</h3>
        <p className="text-xs sm:text-sm mt-2 leading-snug">{charity.description}</p>
        <Link
          to={`/donate/${charity.id}`}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 py-2 rounded-full transition"
        >
          Donate Now
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CharityCard;
