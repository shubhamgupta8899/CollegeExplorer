import React from 'react';
import artsHumanitiesColleges from '../data/artsHumanitiesColleges';

const ArtsHumanitiesPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-10 text-center text-purple-800">
        Top Arts & Humanities Colleges 2025
      </h2>

      {artsHumanitiesColleges.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {artsHumanitiesColleges.map((college, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative mb-5 w-40 h-40">
                <img
                  src={college.image}
                  alt={college.name}
                  className="object-contain w-full h-full"
                />
                <div className="absolute -top-3 -left-3 bg-purple-400 text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  #{college.ranking}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-center">{college.name}</h3>

              <p className="mb-4 text-lg text-gray-700">
                <span className="font-semibold">Top Package:</span> {college.topPackage || 'N/A'}
              </p>

              <a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">
          No colleges found for Arts & Humanities.
        </p>
      )}
    </div>
  );
};

export default ArtsHumanitiesPage;
