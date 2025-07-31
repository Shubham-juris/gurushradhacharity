// src/pages/Home.jsx
import React from 'react';
import CharityCard from '../components/CharityCard';
import  HeroSection  from '../components/HeroSection';
import Animation from '../components/Animation';
import homelessImage from '../assets/homeless.jpg';
import water from '../assets/water.jpg';
import education from '../assets/logo/education.jpg';
import CouseSection from '../components/CouseSection';
const Home = () => {
  
  const charities = [
    { 
      id: 1, 
      name: 'Feed the Homeless', 
      description: 'Provide food and shelter to the homeless.',  
      image: homelessImage 
    },
    { 
      id: 2, 
      name: 'Clean Water Initiative', 
      description: 'Help provide clean water to underserved communities.' ,
      image: water
    },
    { 
      id: 3, 
      name: 'Education for All', 
      description: 'Donate to provide education for underprivileged children.' ,
      image: education
    },
  ];

  return (
    <>
    <HeroSection/>
    <Animation/>
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Support a Charity</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {charities.map(charity => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </div>
    </div>

        <CouseSection/>
    
    </>
  );
};

export default Home;
