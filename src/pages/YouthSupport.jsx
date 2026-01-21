import React, { useEffect, useRef } from "react";
import youthBanner from "../assets/Youth Support Programs.jpg";
import logo from "../assets/logo/guru1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YouthSupport = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    const words = quoteRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  const quoteText =
    "Empowering youth today to build confident, independent, and meaningful futures tomorrow.";

  const quoteWords = quoteText.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-2 opacity-0">
      {word}
    </span>
  ));

  return (
    <>
      {/* ================= Banner ================= */}
      <section>
        <img
          src={youthBanner}
          alt="Youth Support Program Banner"
          className="w-full h-56 sm:h-72 md:h-96 object-cover mt-16 shadow-lg"
        />
      </section>

      {/* ================= Intro Section ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            Youth Support Programs
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            GuruShradha Charity Foundation is dedicated to empowering young
            individuals—especially those from underprivileged and marginalized
            communities—through structured guidance, mentorship, skill
            development, and community engagement.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our Youth Support Programs aim to help young people overcome social,
            emotional, and economic challenges while discovering their
            strengths, building confidence, and creating meaningful pathways
            toward education, employment, leadership, and self-reliance.
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="GuruShradha Charity Logo"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-xl object-cover"
          />
        </div>
      </section>

      {/* ================= What We Offer ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-14">
            What Our Youth Support Program Offers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:scale-105 transition">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Social Connection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Safe spaces for youth to connect, share experiences, build
                friendships, express emotions, and feel supported within the
                community.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:scale-105 transition">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Personal & Career Guidance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                One-on-one mentorship, goal setting, career counseling, and
                skill development to help youth plan a stable and successful
                future.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:scale-105 transition">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Advocacy Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Guidance to understand rights, raise voices, access services,
                and navigate systems related to education, employment, and
                social welfare.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:scale-105 transition">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Resource Navigation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Support in identifying needs, accessing government schemes,
                training programs, health services, and community resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Impact Section ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-12 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Our Impact & Vision
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Through consistent support, trust-based mentorship, and community
          involvement, GuruShradha Charity Foundation strives to nurture a
          generation of confident, responsible, and independent young leaders.
          Our long-term vision is to strengthen communities by investing in
          youth, enabling them to become positive contributors to society.
        </p>
      </section>

      {/* ================= Animated Quote ================= */}
      <section className="bg-blue-50 py-20">
        <h3
          ref={quoteRef}
          className="text-center text-blue-700 font-bold text-4xl md:text-5xl px-6"
        >
          {quoteWords}
        </h3>
      </section>
    </>
  );
};

export default YouthSupport;
