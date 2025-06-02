import React from 'react';
import CollegeList from '../components/CollegeList';
import { topPlacements } from '../data/College';

const TopPlacements = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Top Placement Colleges</h2>
      <CollegeList colleges={topPlacements} />
    </div>
  );
};

export default TopPlacements;