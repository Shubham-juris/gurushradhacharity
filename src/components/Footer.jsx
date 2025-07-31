import React from "react";
import fb from "../assets/logo/fb.avif";
import insta from "../assets/logo/insta.jpg";
import twitter from "../assets/logo/x.jpg";
import youtube from "../assets/logo/youtube.avif";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl font-bold mb-4">CHARITI</h2>
          <p className="text-sm text-gray-300 mb-4">
            Towards the end of the 19th century, with the advent of the New
            Liberalism and the innovative
          </p>
          <div>
            <h4 className="text-md font-semibold mb-2">Social Media Handles</h4>
            <div className="flex gap-4 flex-wrap items-center">
              {[{ img: fb, label: "Facebook" }, { img: insta, label: "Instagram" }, { img: twitter, label: "Twitter" }, { img: youtube, label: "YouTube" }].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img src={item.img} alt={item.label} className="w-10 h-10 rounded-full shadow-lg object-cover" />
                  <span className="text-xs mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold uppercase mb-4">Contact Information</h3>
          <p className="text-sm text-gray-300 mb-2">
            Box 3233<br />
            1810 Kings Way<br />
            King Street, 5th Avenue, New York
          </p>
          <p className="text-sm text-gray-300 mb-1"><strong>New York:</strong> 1800–2355–2356</p>
          <p className="text-sm text-gray-300 mb-1"><strong>London:</strong> 020–1455–236–34</p>
          <p className="text-sm text-gray-300">📧 contact@Chariti.theme</p>
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
              title="Chariti Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.911377417627!2d-74.00601568459393!3d40.71277597933009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
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
