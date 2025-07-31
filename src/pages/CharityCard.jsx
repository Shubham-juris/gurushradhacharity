import React from 'react';
import { Link } from 'react-router-dom';

const CharityCard = ({ charity }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-blue-600">{charity.name}</h3>
      <p className="text-gray-600 mt-2">{charity.description}</p>
      <Link to={`/donate/${charity.id}`} className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Donate Now
      </Link>
    </div>
  );
};

export default CharityCard;
