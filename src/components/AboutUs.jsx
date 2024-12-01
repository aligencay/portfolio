import React from 'react';
import { IoTelescope } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="text-lg max-w-4xl mx-auto mb-4">
        World Devs is a global community dedicated to connecting developers worldwide. 
        Our mission is to foster learning, collaboration, and innovation in technology, 
        providing resources and opportunities for developers to grow professionally.
      </p>
      <div className="my-6 flex justify-center">
        <IoTelescope />
      </div>
      <p className="text-lg max-w-4xl mx-auto">
        Our goal is to empower developers to reach their full potential and positively 
        contribute to the tech society.
      </p>
    </div>
  );
};

export default AboutUs;