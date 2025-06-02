import React from 'react';

const CollegeRankingCard = ({ college }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
    <div className="text-sm bg-yellow-400 px-3 py-1 rounded-full font-semibold mb-3">
      #{college.rank}
    </div>
    <img src={college.image} alt={college.name} className="w-24 h-24 object-contain mb-4" />
    <h3 className="text-xl font-bold text-center mb-2">{college.name}</h3>
    <p className="text-gray-600 text-sm mb-2">
      <strong>Top Package:</strong> {college.topPackage}
    </p>
    <a
      href={college.website}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-medium hover:underline"
    >
      Visit Website
    </a>
  </div>
);

export default CollegeRankingCard;
