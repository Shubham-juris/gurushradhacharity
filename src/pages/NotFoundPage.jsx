// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        marginTop: '6rem',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        borderRadius: '18px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        maxWidth: '420px',
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: 'fadeInDown 1s ease'
      }}
    >
      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .notfound-emoji {
            font-size: 4rem;
            animation: bounce 1.2s infinite alternate;
            display: block;
            margin-bottom: 1rem;
          }
          @keyframes bounce {
            0% { transform: translateY(0);}
            100% { transform: translateY(-18px);}
          }
          .notfound-link {
            display: inline-block;
            margin-top: 1.5rem;
            padding: 0.7rem 2rem;
            background: #6366f1;
            color: #fff;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(99,102,241,0.12);
            transition: background 0.2s;
          }
          .notfound-link:hover {
            background: #4f46e5;
          }
        `}
      </style>
      <span className="notfound-emoji" role="img" aria-label="confused face">😕</span>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>404 - Page Not Found</h1>
      <p style={{ color: '#475569', fontSize: '1.1rem' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link className="notfound-link" to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
