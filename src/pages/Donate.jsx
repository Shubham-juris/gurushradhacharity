// src/pages/Donate.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Donate = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState('');
  const [donationSuccess, setDonationSuccess] = useState(false);

  const handleDonation = (e) => {
    e.preventDefault();
    if (amount && parseFloat(amount) > 0) {
      setDonationSuccess(true);
      setAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
          Donate to {id ? `Charity #${id}` : 'Our Cause'}
        </h1>

        <form onSubmit={handleDonation} className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-blue-700 mb-1">
              Donation Amount (INR)
            </label>
            <input
              type="number"
              id="amount"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter amount"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Donate
          </button>
        </form>

        {donationSuccess && (
          <p className="mt-6 text-center text-green-600 font-semibold text-sm sm:text-base">
            🎉 Thank you for your generous donation!
          </p>
        )}
      </div>
    </div>
  );
};

export default Donate;
