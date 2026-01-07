import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo2.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const linksRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power2.out" },
    });

    if (isOpen) {
      tl.set(menuRef.current, { display: "block" })
        .fromTo(
          menuRef.current,
          { xPercent: 100, opacity: 0 },
          { xPercent: 0, opacity: 1 }
        )
        .from(
          linksRef.current.children,
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.3"
        );
    } else {
      tl.to(menuRef.current, {
        xPercent: 100,
        opacity: 0,
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 px-6 py-1 z-50 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain rounded-full bg-blue-600"
            style={{
              background: "rgba(74,123,232,1)",
              WebkitMaskImage: `url(${logo})`,
              maskImage: `url(${logo})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "cover",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex text-lg px-6 space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
                isActive ? "bg-white text-blue-600 underline scale-110" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
                isActive ? "bg-white text-blue-600 underline scale-110" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/couses"
            className={({ isActive }) =>
              `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
                isActive ? "bg-white text-blue-600 underline scale-110" : ""
              }`
            }
          >
            Couses
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold px-3 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-110 hover:underline underline-offset-4 rounded ${
                isActive ? "bg-white text-blue-600 underline scale-110" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="lg:hidden fixed top-16 right-0 w-full max-w-xs h-auto bg-blue-600/80 backdrop-blur-md p-6 text-white shadow-lg"
        style={{ display: "none" }}
      >
        <div ref={linksRef} className="space-y-4 text-right">
          <Link to="/" className="block text-lg hover:underline">
            Home
          </Link>
          <Link to="/about" className="block text-lg hover:underline">
            About
          </Link>
          <Link to="/couses" className="block text-lg hover:underline">
            Couses
          </Link>
          <Link to="/contact" className="block text-lg hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
