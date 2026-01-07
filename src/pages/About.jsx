import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Animation from "../components/About";
import DonationPanel from "../components/DonationPanel";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const headingRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
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
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-20 py-16">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-1 mt-4"
        >
          About Us
        </h1>
        <p
          ref={paragraphRef}
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Our mission at{" "}
          <span className="font-semibold text-blue-700">
            GuruShradha Charity
          </span>{" "}
          is to create lasting impact in the lives of those who need it most. We
          support initiatives that provide food for the homeless, clean water
          for communities, and education for underprivileged children. Every
          donation you make fuels real change.
        </p>
      </div>

      <Animation />
      <DonationPanel />
    </div>
  );
};

export default AboutUs;
