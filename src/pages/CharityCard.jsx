import React from 'react';
import { Link } from 'react-router-dom';

const CharityCard = ({ charity }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full transition duration-300 hover:shadow-xl">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
          {charity.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {charity.description}
        </p>
      </div>

      <div className="mt-4">
        <Link
          to={`/donate/${charity.id}`}
          className="inline-block bg-blue-600 text-white px-5 py-2 text-sm sm:text-base rounded-full hover:bg-blue-700 transition"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CharityCard;
