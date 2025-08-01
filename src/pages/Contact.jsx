import React, { useState } from "react";
import telephone from "../assets/telephone.jpg";
import logo from "../assets/logo/guru1.png";

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

      <div className="relative z-10 bg-white/50 backdrop-blur-md rounded-xl shadow-xl max-w-6xl w-full p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-8">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-800">
              Get in Touch with GuruShradha Charity
            </h3>
            <p className="mt-4 text-sm sm:text-base text-gray-700">
             We’d love to hear from you! Whether you have a question about our mission, want to collaborate, need more details about our initiatives, or simply want to say hello — we’re here for it.

Our team is always ready to connect with compassionate individuals and organizations looking to make a real difference. Whether you're a donor, volunteer, or advocate, your voice matters. Fill out the form below, and we’ll respond as quickly as possible.

Together, let’s build a future filled with kindness, dignity, and opportunity for all.

</p>  
<img src={logo} alt="" className="w-32 h-32 rounded-full mx-auto mt-10" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  Name
                </label>
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

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  Email
                </label>
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
              <label className="block text-sm font-medium text-blue-700 mb-1">
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
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="2"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
