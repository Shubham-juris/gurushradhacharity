import React, { useState } from "react";
import telephone from "../assets/telephone.jpg";
import DonationPanel from "../components/DonationPanel";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:shivamkumar10813@gmail.com
      ?subject=Contact from ${encodeURIComponent(formData.name)}
      &body=${encodeURIComponent(
        `Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contact}

Message:
${formData.message}`
      )}`;

    window.location.href = mailtoLink.replace(/\s+/g, "");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-16"
      style={{
        backgroundImage: `url(${telephone})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40 backdrop-blur-sm"></div>

      <div className="m-20 relative z-10 bg-white/40 backdrop-blur-md rounded-lg shadow-lg max-w-6xl w-full p-6 sm:p-10">
    
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-8">
          Contact Us
        </h2>

        {/* Responsive content layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Block */}
          <div className="flex-1 text-center lg:text-left pt-10">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient">
              Get in Touch with GuruShradha Charity
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              We'd love to hear from you! Whether you have a question about our work,
              want to get involved, or just want to say hello — fill out the form and
              we’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Form Block */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 space-y-6 bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-blue-600 mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full">
                <label className="block text-blue-600 mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-blue-600 mb-1 font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-blue-600 mb-1 font-medium">Message</label>
              <textarea
                name="message"
                required
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
            
      </div>
  
    </div>
  );
};

export default ContactForm;
