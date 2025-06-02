import React from 'react';
import CollegeList from '../components/CollegeList';
import { topColleges } from '../data/College';

const TopColleges = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Top 5 Colleges</h2>
      <CollegeList colleges={topColleges} />
    </div>
  );
};

export default TopColleges;