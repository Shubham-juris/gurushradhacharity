import React from "react";
import fb from "../assets/logo/fb.avif";
import insta from "../assets/logo/insta.jpg";
import twitter from "../assets/logo/x.jpg";
import youtube from "../assets/logo/youtube.avif";
import logo from "../assets/logo/guru1.png";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6 items-center text-center">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[250px]">
          <img src={logo} className="w-20 h-auto mx-auto rounded-full mb-6" alt="" />
          <p className="text-sm text-gray-300 mb-4">
            Towards the end of the 19th century, with the advent of the New
            Liberalism and the innovative
          </p>
          
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold uppercase mb-4">Contact Information</h3>
          <p className="text-sm text-gray-300 mb-2">
            SCO 27<br />
            New Sunny Enclave,<br />
            Sector-125, MOHALI-140301<br/>
            PUNJAB
          </p>
          <p className="text-sm text-gray-300 mb-1"><strong>Mohali:</strong> 0160-501-3008</p>
{/*           <p className="text-sm text-gray-300"></p> */}
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] text-center">
          <h3 className="text-lg font-semibold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Courses", href: "/courses" },
              { label: "Contact", href: "/contact" },
              { label: "FAQ", href: "/faq" },
            ].map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer text-base font-semibold">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Embed */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold uppercase mb-4">Our Location</h3>
          <div className="w-full h-40 rounded overflow-hidden">
            <iframe
              title="GuruShradha Chariti Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.091543112093!2d76.67381317466199!3d30.7422371851749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef00741720f5%3A0x9f5f7dfc98a60da1!2sJurisnexa%20Immigration!5e1!3m2!1sen!2sin!4v1754285317815!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
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
