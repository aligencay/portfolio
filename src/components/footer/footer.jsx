import React from "react";
// style
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-teal-500 to-pink-500 rounded-full p-2">
              <span className="bg-white block w-4 h-4 rounded-full"></span>
            </div>
            <span className="text-white text-xl font-bold">World Devs</span>
          </div>

          {/* Year */}
          <div className="text-md text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
