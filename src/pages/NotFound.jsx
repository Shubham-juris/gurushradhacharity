import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // optional: for custom styling

const NotFound = () => {
  return (
    <div className="not-found-page" style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Oops! Page Not Found</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    background: '#f5f5f5',
    height: '100vh',
  },
  code: {
    fontSize: '96px',
    color: '#e74c3c',
    marginBottom: '20px',
  },
  message: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '18px',
    color: '#3498db',
    textDecoration: 'none',
    border: '1px solid #3498db',
    padding: '10px 20px',
    borderRadius: '5px',
  }
};

export default NotFound;
