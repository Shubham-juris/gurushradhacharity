import React, { useEffect, useRef } from "react";
import youthBanner from "../assets/Youth Support Programs.jpg"; // same style banner
import logo from "../assets/logo/guru1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YouthSupport = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const text =
    "Empowering youth with skills, mentorship, and opportunities to build confident and independent futures.";

  const words = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-1 opacity-0">
      {word}
    </span>
  ));

  return (
    <>
      {/* Banner */}
      <section>
        <img
          src={youthBanner}
          alt="Youth Support Banner"
          className="w-full h-48 sm:h-64 mt-16 md:h-80 lg:h-96 object-cover shadow-lg"
          style={{ maxHeight: "50vh" }}
        />
      </section>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-7xl mx-auto px-10 gap-8 text-lg md:text-xl lg:text-2xl">
        
        {/* Left Box */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg w-full lg:w-[40%] text-center lg:text-left flex flex-col justify-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Youth Support Programs
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-4">
            GuruShradha Charity Foundation is committed to supporting young
            individuals through guidance, mentorship, skill development, and
            community engagement. Our Youth Support Programs focus on helping
            youth overcome challenges, discover their strengths, and build
            meaningful pathways toward education, employment, and leadership.
          </p>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center animate-fade-in-down">
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="text-blue-600 font-bold">
              Inspired by community-based youth initiatives,
            </span>{" "}
            our programs provide personalized support, career guidance,
            life-skills training, and access to resources that empower youth to
            thrive. By investing in young people today, we help create stronger,
            healthier, and more resilient communities for tomorrow.
          </p>
        </div>

        {/* Logo */}
        <div className="w-full lg:w-[20%] flex flex-col justify-center animate-fade-in-down">
          <img
            src={logo}
            alt="GuruShradha Logo"
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Animated Quote */}
      <div className="p-6 mx-auto text-center mt-10">
        <h3
          ref={paragraphRef}
          className="p-10 text-blue-600 font-bold text-5xl md:text-6xl"
        >
          {words}
        </h3>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease both;
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease both;
          }
        `}
      </style>
    </>
  );
};

export default YouthSupport;
