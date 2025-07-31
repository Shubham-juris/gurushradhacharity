import React, { useEffect, useState, useRef } from "react";
import banner from "../assets/logo/banner.avif";
import goods from "../assets/goods.jpg";
import education from "../assets/logo/education.jpg";
import child from "../assets/child.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const causes = [
  {
    title: "Providing access to safe water, sanitation, and hygiene",
    description:
      "We aim to ensure every human has access to clean water and basic hygiene. Your support helps us reach the unreached.",
    image: banner,
  },
  {
    title: "Feeding the hungry in underprivileged communities",
    description:
      "Your donation helps provide nutritious meals to families who struggle with food insecurity every day.",
    image: goods,
  },
  {
    title: "Education for every child",
    description:
      "Support children in gaining access to quality education, school supplies, and a brighter future.",
    image: education,
  },
  {
    title: "Protecting the environment",
    description:
      "Help fund reforestation projects and environmental awareness campaigns to preserve our planet.",
    image: child,
  },
];

export default function CausesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % causes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      }
    );
  }, [currentIndex]);

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-20  font-sans relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-blue-600">Causes</span>
        </h2>
      </div>

      {/* Desktop Slides */}
      <div className="hidden lg:flex relative w-full h-[36rem] transition-all duration-500">
        {causes.map((cause, index) => (
          <div
            key={index}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-11/12 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Text */}
            <div className="p-10 bg-blue-600 text-white md:w-1/2 w-full flex flex-col justify-center rounded-lg space-y-4">
              <h3
                ref={index === currentIndex ? headingRef : null}
                className="text-2xl md:text-3xl font-bold"
              >
                {cause.title}
              </h3>

              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-white w-full animate-pulse"></div>
              </div>

              <p
                ref={index === currentIndex ? paragraphRef : null}
                className="text-base md:text-lg leading-relaxed"
              >
                {cause.description}
              </p>
              <Link to="/contact">
                <button className="bg-rose-500 text-white px-6 py-3 font-semibold rounded hover:bg-rose-600 transition">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Image */}
            <div className="md:w-1/2 w-full h-64 md:h-auto relative">
              <img
                src={cause.image}
                alt="Cause"
                className="w-full h-full object-cover"
              />
              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center bg-white/30">
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet View (Stacked) */}
      <div className="flex lg:hidden flex-col space-y-12">
        {causes.map((cause, index) => (
          <div
            key={index}
            className="w-full rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={cause.image}
              alt={cause.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {cause.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                {cause.description}
              </p>
              <Link to="/contact">
                <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
