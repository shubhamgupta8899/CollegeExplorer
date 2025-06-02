import React from 'react';
import { useParams } from 'react-router-dom';
import CollegeList from '../components/CollegeList';
import { courseColleges } from '../data/College';

const CourseCollegesPage = () => {
  const { courseName } = useParams();
  const colleges = courseColleges[courseName] || [];

  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Colleges for {courseName.charAt(0).toUpperCase() + courseName.slice(1)}
      </h2>
      <CollegeList colleges={colleges} />
    </div>
  );
};

export default CourseCollegesPage;