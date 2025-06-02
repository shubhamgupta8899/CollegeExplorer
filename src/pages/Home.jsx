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
const Home = () => {

 
  return (
    <div>
       <MultiCollegeBanner />
      <div className="text-center bg-gradient-to-br from-blue-100 via-white to-purple-100 py-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Explore Top Colleges</h2>
        <CollegeSlider />
      </div>

      <GoalSelector />
      <TopCollegesList />

      {/* Static Advertisement Banner Below Top Colleges */}
      <CollegeAdBanner
        college={{
          name: "Ies University",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hi04SeVZMNi_1MBMb4eJrIclhBYmudIVBg&s",
          tagline: "Ranked among Top 10 Private Universities in India - 2025",
          website: "https://www.iesuniversity.ac.in/",
        }}
      />
      <CollegeRankingPage />
      <CollegeAdBanner
        college={{
          name: "Sharda University",
          image: "https://pbs.twimg.com/media/FDpquYIVQAEwWl-.jpg",
          tagline: "Ranked among Top 10 Private Universities in India - 2025",
          website: "https://www.sharda.ac.in/",
        }}
      />
      <CollegeComparison />
      <StudentReviews />

    </div>
  );
};

export default Home;
