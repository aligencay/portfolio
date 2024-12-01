import React from 'react'
import image from "../images/welcome-img.jpg"

const Welcome = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center mb-10">
      <img
        src={image}
        alt="welcome-img"
        className=""
        style={{ opacity: 0.9 }}
      />
      <div className="absolute text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to World Devs</h1>
        <p className="text-lg mb-6">
          Innovating the future, one line of code at a time.
        </p>
        <button
          style={{ backgroundColor: '#636AE8' }}
          className="text-white px-6 py-3 rounded-lg"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Welcome;
