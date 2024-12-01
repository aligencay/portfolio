import React from "react";
import image from "../images/welcome-img.jpg";

const Welcome = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <img
        src={image}
        alt="welcome-img"
        className="absolute w-full h-full object-cover z-0"
        style={{ opacity: 0.85 }}
      />
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to World Devs
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-lg">
          Innovating the future, one line of code at a time.
        </p>
        <button
          style={{ backgroundColor: "#636AE8" }}
          className="text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4e58c9] transition-colors duration-300"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Welcome;
