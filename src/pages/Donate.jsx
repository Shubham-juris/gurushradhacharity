// src/pages/Donate.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Donate = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState('');
  const [donationSuccess, setDonationSuccess] = useState(false);

  const handleDonation = (e) => {
    e.preventDefault();
    setDonationSuccess(true); // Simulate donation success
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Donate to Charity</h1>
      <form onSubmit={handleDonation} className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-lg font-medium text-gray-700">Donation Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Donate
        </button>
      </form>
      {donationSuccess && (
        <p className="mt-4 text-center text-green-500 font-semibold">Thank you for your donation!</p>
      )}
    </div>
  );
};

export default Donate;
