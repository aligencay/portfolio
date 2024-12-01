import React from "react";

function PersonCard({ name, role, nationality, linkedin, photo }) {
  return (
    <div className="flex items-center bg-[#171a1f] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-lg mx-auto mb-6">
      <div className="flex-1 pr-4">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-sm text-[#727680] mt-1">Role: {role}</p>
        <p className="text-sm text-[#727680] mt-1">Nationality: {nationality}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 border border-[#636ae8] text-[#636ae8] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#636ae8] hover:text-white transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>

      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={photo}
          alt={`${name}'s photo`}
          className="object-cover w-full h-full rounded-full border-2 border-[#636ae8]"
        />
      </div>
    </div>
  );
}

export default PersonCard;
