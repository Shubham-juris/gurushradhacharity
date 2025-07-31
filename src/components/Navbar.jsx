// // src/components/NavBar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="bg-blue-600 p-4 text-white fixed top-0 left-0 w-full z-50 shadow px-6 sm:px-20">
//       <div className="max-w-7xl mx-auto flex justify-between items-center gap-10">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-semibold">GuruShradha Charity</Link>

//         {/* Hamburger Icon for mobile */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isMenuOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex justify-center flex-1 space-x-4 gap-8">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About</Link>
//           <Link to="/couses" className="hover:underline">Our Courses</Link>
//           <Link to="/blog" className="hover:underline">Blog</Link>
//           <Link to="/contacts" className="hover:underline">Contact Us</Link>
//         </div>
//       </div>

//       {/* Top-right Mobile Menu with semi-transparent blue background */}
//       <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden  absolute top-14 right-0 z-50  `}>
//         <div className="bg-blue-600 backdrop-blur-md rounded-lg text-center space-y-2 p-4 shadow-lg">
//           <Link to="/" className="block mt-2 text-white text-lg hover:underline">Home</Link>
//           <Link to="/about" className="block mt-2 text-white text-lg hover:underline">About</Link>
//           <Link to="/couses" className="block mt-2 text-white text-lg hover:underline">Our Courses</Link>
//           <Link to="/blog" className="block mt-2 text-white text-lg hover:underline">Blog</Link>
//           <Link to="/contacts" className="block mt-2 mb-2 text-white text-lg hover:underline">Contact Us</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// src/components/NavBar.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const linksRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.4, ease: 'power2.out' } });

    if (isOpen) {
      tl.set(menuRef.current, { display: 'block' })
        .fromTo(
          menuRef.current,
          { xPercent: 100, opacity: 0 },
          { xPercent: 0, opacity: 1 }
        )
        .from(linksRef.current.children, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
        }, '-=0.3');
    } else {
      tl.to(menuRef.current, {
        xPercent: 100,
        opacity: 0,
        onComplete: () => {
          gsap.set(menuRef.current, { display: 'none' });
        },
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600/80 px-6 py-4 z-50 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">GuruShradha Charity</Link>

        {/* /* Desktop Nav */}
          <div className="hidden lg:flex text-lg px-6 space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
            isActive ? 'bg-white text-blue-600 underline scale-110' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
            isActive ? 'bg-white text-blue-600 underline scale-110' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/couses"
              className={({ isActive }) =>
                `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
            isActive ? 'bg-white text-blue-600 underline scale-110' : ''
                }`
              }
            >
              Couses
            </NavLink>
            
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
            isActive ? 'bg-white text-blue-600 underline scale-110' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="lg:hidden fixed top-16 right-0 px-12 max-w-xs h-auto bg-blue-600/80 backdrop-blur-md p-6 text-white  shadow-lg"
        style={{ display: 'none' }}
      >
        <div ref={linksRef} className="space-y-4 text-right">
          <Link to="/" className="block text-lg hover:underline">Home</Link>
          <Link to="/about" className="block text-lg hover:underline">About</Link>
          <Link to="/couses" className="block text-lg hover:underline">Couses</Link>
          <Link to="/contact" className="block text-lg hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
