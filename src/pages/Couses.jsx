import React from "react";
import education from "../assets/logo/education.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Empowering Communities Through Clean Water",
    date: "July 15, 2025",
    excerpt:
      "Discover how providing access to safe water is transforming lives and promoting sustainable health in underprivileged areas.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "Education: The Path to a Brighter Future",
    date: "June 28, 2025",
    excerpt:
      "Education is a fundamental right. Learn about our initiatives to bring quality education to children in remote communities.",
    image: education,
    link: "#",
  },
  {
    id: 3,
    title: "Feeding the Hungry: Every Meal Counts",
    date: "May 12, 2025",
    excerpt:
      "Your support helps provide nutritious meals to families facing food insecurity every day. Here’s how we’re making an impact.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Protecting Our Environment for Future Generations",
    date: "April 20, 2025",
    excerpt:
      "Join us in reforestation and awareness campaigns that safeguard our planet’s health for the children of tomorrow.",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const Couses = () => {
  return (
    <>
    {/* Banner Image with Heading */}
      <div className="w-full relative">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
          alt="Charity Banner"
          className="w-full h-56 sm:h-72 md:h-96 object-cover shadow-lg"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-center mt-12  text-3xl sm:text-5xl font-extrabold bg-black bg-opacity-40 px-6 py-2 rounded">
            Welcome to <span className="text-blue-600"> Guru Charity</span> <br/> Foundation
          </h1>
        </div>
      </div>
    
    <div className="min-h-screen bg-blue-600 py-12 px-4 sm:px-6 lg:px-20 ">
      

      <header className="max-w-7xl mx-auto text-center mb-12 mt-8">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">
          Guru Charity Foundation Couses
        </h1>
        <p className="text-blue-200 max-w-3xl mx-auto text-lg sm:text-xl">
          Stories and updates from our mission to empower communities and change lives.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map(({ id, title, date, excerpt, image, link }) => (
            <article
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-sm text-blue-600 mb-2">{date}</time>
                <h2 className="text-xl font-semibold text-blue-900 mb-3">{title}</h2>
                <p className="text-blue-800 flex-grow">{excerpt}</p>
                <a
                  href={link}
                  className="mt-6 inline-block text-blue-600 font-bold hover:text-blue-800 transition"
                  aria-label={`Read more about ${title}`}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default Couses;
