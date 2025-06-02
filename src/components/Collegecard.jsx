import React from 'react';

const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      {/* College Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={college.image} 
          alt={college.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/400x200?text=College+Image";
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{college.name}</h3>
          <p className="text-sm text-white/90">{college.location || 'Bhopal'}</p>
        </div>
      </div>
      
      {/* College Details */}
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span className="text-sm font-medium text-gray-700">
            {college.ranking ? `Ranked #${college.ranking}` : 'Top Rated College'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {college.description || 'Premier institution offering quality education and excellent placement opportunities.'}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-500">Established</p>
            <p className="font-medium text-sm">🏛️ {college.established || '1960'}</p>
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            <p className="text-xs text-gray-500">Top Package</p>
            <p className="font-medium text-sm">💰 {college.topPackage || '12 LPA'}</p>
          </div>
        </div>
        
        <a
          href={college.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
        >
          Explore Admissions
        </a>
      </div>
    </div>
  );
};

export default CollegeCard;