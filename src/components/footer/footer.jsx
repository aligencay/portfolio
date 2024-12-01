import React from "react";
// icons
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiGmail } from "react-icons/si";
// style
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-white text-xl font-bold flex items-center">
              <div className="bg-gradient-to-r from-teal-500 to-pink-500 rounded-full p-2">
                <span className="bg-white block w-4 h-4 rounded-full"></span>
              </div>
              <span className="ml-2">World Devs</span>
            </div>
          </div>

          <nav className="mt-4 md:mt-0 flex space-x-6 text-lg">
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              About us
            </a>
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Help Center
            </a>
            <a href="#" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              FAQs
            </a>
            <a href="#" className="hover:text-white">
              Careers
            </a>
          </nav>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-md">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <select
                className="bg-gray-800 text-gray-400 p-2 rounded border border-gray-700"
                defaultValue="English"
              >
                <option value="English">English</option>
              </select>
            </div>
          </div>

          <div className="mt-4 md:mt-0 text-white-500 text-center">
            © 2024 Brand, Inc. • <a href="#" className="hover:underline">Privacy</a> •{" "}
            <a href="#" className="hover:underline">Terms</a> •{" "}
            <a href="#" className="hover:underline">Sitemap</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
                <FaLinkedin className="h-7 w-7" />
            </a>
            <a href="#" className="hover:text-white">
                <SiFiverr className="h-7 w-7" />
            </a>
            <a href="#" className="hover:text-white">
                <SiGmail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

