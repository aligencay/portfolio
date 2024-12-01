import React from 'react';

function PersonCard({ name, role, nationality, linkedin, photo }) {
  return (
    <div className="flex items-center bg-[#171a1f] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-full max-w-4xl ">
      {/* Texto a la izquierda */}
      <div className="flex-1 pr-6">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-[#727680] mt-1">Role: {role}</p>
        <p className="text-sm text-[#727680] mt-1">Nationality: {nationality}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 border border-[#636ae8] text-[#636ae8] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#636ae8] hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>

      {/* Imagen a la derecha */}
      <div className="w-36 h-36 flex-shrink-0">
        <img
          src={photo}
          alt={`${name}'s photo`}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
}

export default PersonCard;
