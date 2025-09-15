// File: src/pages/Home.jsx
import React from 'react';
import CollegeSlider from '../components/CollegeSlider';
import GoalSelector from '../components/GoalSelector';
import TopCollegesList from '../components/TopCollegesList';
import CollegeAdBanner from '../components/CollegeAdBanner';
import CollegeRankingPage from './CollegeRankingPage';
import MultiCollegeBanner from '../components/MultiCollegeBanner';
import StudentReviews from '../pages/StudentReviews';
import CollegeComparison from './CollegeComparison';

const Home = ({ onLinkClick, user, hasSignedUp }) => {
  const handleLinkClick = (linkName) => {
    onLinkClick(linkName);
  };

  return (
    <div>
      {/* Show a welcome message for new users */}
      {!hasSignedUp && !user && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 极客时间 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Sign up required:</strong> Create an account to access all college resources and information.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <MultiCollegeBanner onLinkClick={handleLinkClick} />
      <div className="text-center bg-gradient-to-br from-blue-100 via-white to-purple-100 py-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Explore Top Colleges</h2>
        <CollegeSlider onLinkClick={handleLinkClick} />
      </div>

      <GoalSelector onLinkClick={handleLinkClick} />
      <TopCollegesList onLinkClick={handleLinkClick} />

      {/* Static Advertisement Banner Below Top Colleges */}
      <CollegeAdBanner
        college={{
          name: "Ies University",
          image: "https://encrypted-tbn0.g3static.com/images?q=tbn:ANd9GcQ6hi04SeVZMNi_1MBMb4eJrIclhBYmudIVBg&s",
          tagline: "Ranked among Top 10 Private Universities in India - 2025",
          website: "https://www.iesuniversity.ac.in/",
        }}
        onLinkClick={handleLinkClick}
      />
      <CollegeRankingPage onLinkClick={handleLinkClick} />
      <CollegeAdBanner
        college={{
          name: "Sharda University",
          image: "https://pbs.twimg.com/media/FDpquYIVQAEwWl-.jpg",
          tagline: "Ranked among Top 10 Private Universities in India - 2025",
          website: "https://www.sharda.ac.in/",
        }}
        onLinkClick={handleLinkClick}
      />
      <CollegeComparison onLinkClick={handleLinkClick} />
      <StudentReviews onLinkClick={handleLinkClick} />
    </div>
  );
};

export default Home;