import React from "react";
import education from "../assets/logo/4.jpg";
import { Link } from "react-router-dom";
import educationbnr from "../assets/educationbnr.jpg";
import hungry from "../assets/homeless.jpg";
import earth from "../assets/earth.jpg"

const blogPosts = [
  {
    id: 1,
    title: "Empowering Communities Through Clean Water",
    date: "July 15, 2025",
    excerpt:
      "Discover how providing access to safe water is transforming lives and promoting sustainable health in underprivileged areas.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/water",
  },
  {
    id: 2,
    title: "Education: The Path to a Brighter Future",
    date: "June 28, 2025",
    excerpt:
      "Education is a fundamental right. Learn about our initiatives to bring quality education to children in remote communities.",
    image: educationbnr,
    link: "/education",
  },
  {
    id: 3,
    title: "Feeding the Hungry: Every Meal Counts",
    date: "May 12, 2025",
    excerpt:
      "Your support helps provide nutritious meals to families facing food insecurity every day. Here’s how we’re making an impact.",
    image: hungry,
    link: "/hungry",
  },
  {
    id: 4,
    title: "Protecting Our Environment for Future Generations",
    date: "April 20, 2025",
    excerpt:
      "Join us in reforestation and awareness campaigns that safeguard our planet’s health for the children of tomorrow.",
    image: earth,
    link: "/earth",
  },
];

const Couses = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
          alt="Charity Banner"
          className="w-full h-56 sm:h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center px-4">
            Welcome to <span className="text-blue-500">GuruShradha Charity</span> <br />
            Foundation
          </h1>
        </div>
      </div>

      {/* Blog/Courses Section */}
      <section className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            GuruShradha Charity Foundation Courses
          </h2>
          <p className="text-blue-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Stories and updates from our mission to empower communities and change lives.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogPosts.map(({ id, title, date, excerpt, image, link }) => (
            <article
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-44 sm:h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-grow">
                <time className="text-sm text-blue-600 mb-1">{date}</time>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
                <p className="text-blue-800 text-sm flex-grow">{excerpt}</p>
                {id === 1 ? (
                  <Link
                    to="/water"
                    className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                    aria-label={`Read more about ${title}`}
                  >
                    Read More →
                  </Link>
                ) : (
                  <a
                    href={link}
                    className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                    aria-label={`Read more about ${title}`}
                  >
                    Read More →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Couses;
