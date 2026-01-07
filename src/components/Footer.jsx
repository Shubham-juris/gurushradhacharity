import React from "react";
import fb from "../assets/logo/fb.avif";
import insta from "../assets/logo/insta.jpg";
import twitter from "../assets/logo/x.jpg";
import youtube from "../assets/logo/youtube.avif";
import logo from "../assets/logo/logo2.jpeg";
  import { MapPin, Phone, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">

        {/* Logo & Description */}
        <div className="flex-1 min-w-[250px]">
          <img
            src={logo}
            className="w-20 h-auto mx-auto rounded-full mb-6"
            alt="Logo"
          />
          <p className="text-sm text-gray-300 mb-4">
            Towards the end of the 19th century, with the advent of the New
            Liberalism and the innovative
          </p>
        </div>

        {/* Contact Info */}
    

<div className="flex-1 min-w-[250px]">
  <h3 className="text-lg font-semibold uppercase mb-4 text-white">
    Contact Information
  </h3>

  <p className="flex items-center gap-2 text-sm text-gray-300 mb-2">
    <MapPin size={16} className="text-red-600" />
    Calgary, Alberta, Canada
  </p>

  <p className="flex items-center gap-2 text-sm text-gray-300 mb-2">
    <Phone size={16} className="text-red-600" />
    7087107692
  </p>

  <p className="flex items-center gap-2 text-sm text-gray-300">
    <Mail size={16} className="text-red-600" />
    gurushardhawelfaresociety@gmail.com
  </p>
</div>


        {/* Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Courses", href: "/couses" },
              { label: "Contact", href: "/contact" },
              { label: "FAQ", href: "/faq" },
            ].map((link, index) => (
              <li
                key={index}
                className="hover:text-white cursor-pointer text-base font-semibold"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold uppercase mb-4">Our Location</h3>
          <div className="w-full h-40 rounded overflow-hidden">
            <iframe
              title="Calgary, Alberta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40192.97340120952!2d-114.135493!3d51.044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f82d6c5bdb7%3A0x88c0fca7c3db6d2c!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
