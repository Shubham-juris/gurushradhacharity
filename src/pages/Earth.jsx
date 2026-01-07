import React, { useEffect, useRef } from "react";
import water from "../assets/earth.jpg";
import logo from "../assets/logo/guru1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Earth = () => {
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
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const text =
    "Every life matters. Join us in building a future where a healthy planet is a right, not a privilege";

  const words = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-1 opacity-0">
      {word}
    </span>
  ));

  return (
    <>
      <section>
        <img
          src={water}
          alt="Education Banner"
          className="w-full object-cover shadow-lg"
          style={{ maxHeight: "70vh", objectPosition: "top" }}
        />
      </section>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-7xl mx-auto px-10 gap-8 text-lg md:text-xl lg:text-2xl">
        {/* Text Section */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg w-full lg:w-[40%] text-center lg:text-left flex flex-col justify-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            🌍 Saving the Earth: Every Action Counts
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-4">
            GuruCharity is dedicated to protecting the Earth and promoting
            sustainable practices for communities in need. Through eco-friendly
            programs and grassroots partnerships, we strive to nurture every
            environment with the care and respect it deserves. From organizing
            tree planting drives in urban areas to supporting clean energy
            projects in rural regions, our initiatives address both urgent
            environmental challenges and long-term sustainability. By empowering
            local communities, reducing waste, and raising awareness, we tackle
            climate change at its roots. Protecting the planet is not just about
            survival — it’s a path to health, resilience, and hope. At
            GuruCharity, we believe a thriving Earth is essential for future
            generations, and we are committed to making that belief a reality.
          </p>
        </div>

        {/* Image Text Section */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center animate-fade-in-down">
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-0">
            <span className="text-blue-600 font-bold">
              Discover how sustainable practices are transforming communities
              and building a foundation for lasting environmental change.
            </span>{" "}
            In many communities, the lack of environmental resources and
            awareness leads to pollution, resource depletion, and a cycle of
            ecological damage that affects generations. GuruCharity implements
            vital sustainability programs such as tree planting, clean energy
            initiatives, and waste reduction efforts, ensuring that communities
            thrive in harmony with nature. Families learn to adopt eco-friendly
            practices, fostering healthier environments and greater resilience.
            Beyond immediate actions, our efforts promote long-term
            environmental stewardship and community well-being. It’s not just
            about protecting nature — it’s about restoring balance, empowering
            communities, and offering hope for a healthier, more sustainable
            future.
          </p>
        </div>

        {/* Logo Section */}
        <div className="w-full lg:w-[20%] flex flex-col justify-center animate-fade-in-down">
          <img
            src={logo}
            alt="GuruCharity Logo"
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Footer Animated Text */}
      <div className="p-6  mx-auto text-center mt-10">
        <h3
          ref={paragraphRef}
          className="p-10 text-blue-600 font-bold text-6xl"
        >
          {words}
        </h3>
      </div>

      {/* Custom Keyframe Animations */}
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
                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s cubic-bezier(0.4,0,0.2,1) both;
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
                }
            `}
      </style>
    </>
  );
};

export default Earth;
