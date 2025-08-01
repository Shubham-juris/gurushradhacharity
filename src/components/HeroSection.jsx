import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/herobg.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-28"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    {/* /* Blurred overlay */ }
       <div
  className="absolute inset-0 z-0"
  style={{
    backdropFilter: 'blur(8px)',
    background: 'rgba(31, 41, 55, 0.6)',
    WebkitBackdropFilter: 'blur(8px)',
  }}
/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-3xl mt-4 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(to right, #ffffff, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Empowering <span className="text-blue-500">Communities,</span><br /> Changing Lives At <br/>
            <span className=' text-blue-600'> GuruShradha Charity</span>
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            Join us in making a meaningful difference by supporting causes that bring hope and change to those in need. Be a part of something bigger. At GuruShradha Charity, we believe in the power of compassion, community, and collective action. Your support helps us reach those who need it most—whether it’s through education, healthcare, disaster relief, or empowering underprivileged communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
