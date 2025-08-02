// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import About from './pages/About';
import Blog from './pages/Blog';
import Couses from './pages/Couses';
import ContactForm from './pages/Contact';

import Water from './pages/Water';
import Education from './pages/Education';
import Hungry from './pages/Hungry';
import Earth from './pages/Earth';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate/:id" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/couses" element={<Couses />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/water" element={<Water />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/hungry" element={<Hungry />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      </>
  );
};

export default App;
