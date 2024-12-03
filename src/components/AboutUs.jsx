import React from "react";
import { IoTelescope } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="text-lg max-w-4xl mx-auto mb-4">
        World Devs specializes in developing cross-platform and web
        applications, offering personalized solutions for third-party clients.
        Our multicultural team is driven by a shared passion for technology and
        a dedication to crafting software that aligns with our clients' unique
        needs. We approach every project as an opportunity to learn, grow, and
        create meaningful results, combining fresh ideas with a commitment to
        quality.
      </p>
      <div className="my-6 flex justify-center">
        <IoTelescope />
      </div>
      <p className="text-lg max-w-4xl mx-auto">
        Together, we turn challenges into opportunities.
      </p>
    </div>
  );
};

export default AboutUs;
