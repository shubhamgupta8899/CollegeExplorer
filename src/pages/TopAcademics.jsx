import React from 'react';
import CollegeList from '../components/CollegeList';
import { topAcademics } from '../data/College';

const TopAcademics = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Top Academic Colleges</h2>
      <CollegeList colleges={topAcademics} />
    </div>
  );
};

export default TopAcademics;
