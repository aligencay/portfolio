import React from "react";
// icons
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiGmail } from "react-icons/si";
// style
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold get-touch-title">Get In Touch</h2>
        <p className="mt-4 text-sm md:text-base text-white">
          Reach out to us for collaborations, inquiries, or support. We're here to help!
        </p>
        <div className="flex justify-center space-x-4 mt-7 gap-5">
            <a href="#" className="hover:text-white">
                <FaLinkedin className="h-10 w-10" />
            </a>
            <a href="#" className="hover:text-white">
                <SiFiverr className="h-10 w-10" />
            </a>
            <a href="#" className="hover:text-white">
                <SiGmail className="h-10 w-10" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default GetInTouch;
