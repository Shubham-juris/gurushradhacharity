// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/herobg.jpg';

const HeroSection = () => {

return (
    <>
    <section className="relative py-16" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="flex flex-col items-center text-center mt-16 w-full md:w-1/2">
                <h1
                    className="text-4xl mt-10 md:text-5xl font-bold mb-4 animate-fade-in"
                    style={{
                        background: 'linear-gradient(90deg, #ffffff 0%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        transition: 'background-position 1s',
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'left'
                    }}
                >
                    Empowering <span className='text-blue-500'>Communities,</span> Changing Lives
                </h1>
                <p className="text-lg md:text-xl mb-6 animate-slide-up text-white">
                    Join us in making a meaningful difference by supporting causes that bring hope and change to those in need.
                </p>
                <div className="flex justify-center space-x-4">
                   
                    <Link to="/contact">
                        <button className=" w-full bg-blue-400 hover:bg-white  text-white hover:text-blue-600 border-1 hover: border-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 mt-10">
                           Contact Us
                        </button>
                    </Link>
                   
                </div>
            </div>
        </div>
    </section>
    </>
);
};

export default HeroSection;

