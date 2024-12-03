import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#171a1f] text-white px-6 py-3 flex items-center shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center mr-8">
      <div className="bg-gradient-to-r from-teal-500 to-pink-500 rounded-full p-2">
              <span className="bg-white block w-4 h-4 rounded-full"></span>
            </div>
        <span className="text-2xl text-white ml-3">World Devs</span>
      </div>

      {/* Links */}
      <ul className="flex items-center space-x-8">
        <li className="group">
          <a
            href="#home"
            className="text-white hover:text-[#636ae8] transition-colors relative"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#636ae8] group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#about"
            className="text-white hover:text-[#636ae8] transition-colors relative"
          >
            About Us
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#636ae8] group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#team"
            className="text-white hover:text-[#636ae8] transition-colors relative"
          >
            Team
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#636ae8] group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#contact"
            className="text-white hover:text-[#636ae8] transition-colors relative"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#636ae8] group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
