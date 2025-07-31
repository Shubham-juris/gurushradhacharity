// src/components/CharityCard.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="relative bg-cover bg-center rounded-lg overflow-hidden group transition-all duration-300 shadow-md hover:shadow-none"
      style={{
        backgroundImage: `url(${charity.image})`,
        height: '300px',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 group-hover:bg-opacity-70 z-10" />

      {/* Sliding Text Content on Hover */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute bottom-6 left-6 right-6 text-white z-20 group-hover:flex hidden flex-col text-center"
      >
        <h3 className="text-xl font-bold">{charity.name}</h3>
        <p className="text-sm mt-2">{charity.description}</p>
        <Link
          to={`/donate/${charity.id}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Donate Now
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CharityCard;
