import React from 'react';
import CollegeCard from './Collegecard';

const CollegeList = ({ colleges }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {colleges.map((college, index) => (
        <CollegeCard key={index} college={college} />
      ))}
    </div>
  );
};

export default CollegeList;