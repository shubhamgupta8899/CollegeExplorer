import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import engineeringColleges from '../data/engineeringColleges';
import medicalColleges from '../data/medicalColleges';
import managementColleges from '../data/managementColleges';
import artsHumanitiesColleges from '../data/artsHumanitiesColleges';

// Enhanced fallback logo generator with category colors
const generateFallbackLogo = (name, category) => {
  const initials = name.split(' ').map(word => word[0]).join('').substr(0, 2);
  const colors = {
    engineering: { bg: '#2563eb', text: '#ffffff' },
    medical: { bg: '#16a34a', text: '#ffffff' },
    management: { bg: '#9333ea', text: '#ffffff' },
    'arts-humanities': { bg: '#d97706', text: '#ffffff' },
    default: { bg: '#4b5563', text: '#ffffff' }
  };
  
  const color = colors[category] || colors.default;

  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="50" fill="${color.bg}"/>
      <text x="50" y="55" font-family="Arial" font-size="40" 
            fill="${color.text}" text-anchor="middle" dominant-baseline="middle">
        ${initials}
      </text>
    </svg>`
  )}`;
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryLower = category?.toLowerCase() || '';
  const formattedCategory = category ? category.replace('-', ' ') : '';

  // Vibrant color themes with glassmorphism effect
  const categoryThemes = {
    engineering: {
      bg: 'bg-gradient-to-br from-blue-50 via-white to-blue-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      border: 'border-blue-200/80',
      text: 'text-blue-800',
      accentText: 'text-blue-600',
      badge: 'bg-blue-600/90 text-white',
      button: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200/50',
      cardHover: 'hover:shadow-lg hover:shadow-blue-200/40 hover:-translate-y-1',
      glass: 'bg-blue-500/5 backdrop-blur-sm'
    },
    medical: {
      bg: 'bg-gradient-to-br from-green-50 via-white to-green-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      border: 'border-green-200/80',
      text: 'text-green-800',
      accentText: 'text-green-600',
      badge: 'bg-green-600/90 text-white',
      button: 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200/50',
      cardHover: 'hover:shadow-lg hover:shadow-green-200/40 hover:-translate-y-1',
      glass: 'bg-green-500/5 backdrop-blur-sm'
    },
    management: {
      bg: 'bg-gradient-to-br from-purple-50 via-white to-purple-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      border: 'border-purple-200/80',
      text: 'text-purple-800',
      accentText: 'text-purple-600',
      badge: 'bg-purple-600/90 text-white',
      button: 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200/50',
      cardHover: 'hover:shadow-lg hover:shadow-purple-200/40 hover:-translate-y-1',
      glass: 'bg-purple-500/5 backdrop-blur-sm'
    },
    'arts-humanities': {
      bg: 'bg-gradient-to-br from-amber-50 via-white to-amber-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      border: 'border-amber-200/80',
      text: 'text-amber-800',
      accentText: 'text-amber-600',
      badge: 'bg-amber-600/90 text-white',
      button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-200/50',
      cardHover: 'hover:shadow-lg hover:shadow-amber-200/40 hover:-translate-y-1',
      glass: 'bg-amber-500/5 backdrop-blur-sm'
    },
    default: {
      bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      border: 'border-gray-200/80',
      text: 'text-gray-800',
      accentText: 'text-gray-600',
      badge: 'bg-gray-600/90 text-white',
      button: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg shadow-gray-200/50',
      cardHover: 'hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-1',
      glass: 'bg-gray-500/5 backdrop-blur-sm'
    }
  };

  const theme = categoryThemes[categoryLower] || categoryThemes.default;

  let colleges = [];
  if (categoryLower === 'engineering') colleges = engineeringColleges;
  else if (categoryLower === 'medical') colleges = medicalColleges;
  else if (categoryLower === 'management') colleges = managementColleges;
  else if (categoryLower === 'arts-humanities') colleges = artsHumanitiesColleges;
  else colleges = [];

  return (
    <div className={`min-h-screen ${theme.bg} py-12 px-4 sm:px-6 lg:px-8`}>
      {/* Hero Header with Glassmorphism Effect */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-4xl mx-auto p-8 rounded-3xl ${theme.glass} border ${theme.border} mb-12 text-center`}
      >
        <h2 className={`text-4xl md:text-5xl font-extrabold ${theme.text} mb-4`}>
          Top {formattedCategory} Colleges 2025
        </h2>
        <p className={`text-lg ${theme.accentText} max-w-2xl mx-auto`}>
          Premier institutions for {formattedCategory} education with verified rankings and comprehensive details
        </p>
      </motion.div>

      {/* College Cards Section */}
      {colleges.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colleges.map((college, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative rounded-2xl overflow-hidden ${theme.cardBg} border ${theme.border} shadow-md ${theme.cardHover} transition-all duration-300`}
              >
                {/* Ranking Badge with Ribbon Effect */}
                <div className={`absolute -top-2 -right-2 ${theme.badge} font-bold text-xs rounded-md px-3 py-1 shadow-md z-10 rotate-12`}>
                  # {college.ranking}
                </div>

                {/* College Image with Glow Effect */}
                <div className="p-6 pb-0 flex justify-center relative">
                  <div className="relative w-32 h-32 rounded-full bg-white p-1 shadow-xl flex items-center justify-center overflow-hidden border-4 border-white/80 group">
                    <div className={`absolute inset-0 rounded-full ${theme.badge} opacity-20 blur-md group-hover:opacity-30 transition-opacity`}></div>
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-full object-cover rounded-full z-10"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = generateFallbackLogo(college.name, categoryLower);
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* College Info */}
                <div className="p-6 pt-4 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {college.name}
                  </h3>

                  {/* Stats with Icons */}
                  <div className="flex flex-col gap-3 mb-5">
                    <div className="flex justify-center items-center gap-2">
                      <svg className={`h-5 w-5 ${theme.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">Package:</span>
                      <span className={`text-lg font-bold ${theme.accentText}`}>
                        {college.topPackage || 'N/A'}
                      </span>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <svg className={`h-5 w-5 ${theme.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{college.location || 'Location not specified'}</span>
                    </div>
                  </div>

                  {/* Animated Button */}
                  <motion.a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-3 rounded-xl ${theme.button} font-medium transition-all`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore College</span>
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto text-center mt-16"
        >
          <div className={`inline-block p-5 rounded-full ${theme.glass} border ${theme.border} shadow-sm mb-4`}>
            <svg className={`h-14 w-14 ${theme.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>No colleges found</h3>
          <p className={`text-gray-600 ${theme.glass} rounded-xl p-4 border ${theme.border}`}>
            We couldn't find any colleges for the "{formattedCategory}" category. Please check back later or explore other categories.
          </p>
        </motion.div>
      )}

      {/* Category-Specific Info Section */}
      {colleges.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`max-w-6xl mx-auto mt-16 rounded-3xl ${theme.glass} p-8 border ${theme.border} shadow-sm`}
        >
          <h3 className={`text-2xl font-bold ${theme.text} mb-6 text-center`}>
            About {formattedCategory} Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className={`text-lg font-semibold ${theme.accentText} mb-3 flex items-center`}>
                <svg className={`h-5 w-5 ${theme.accentText} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {[
                  `Top entrance exams for ${formattedCategory}`,
                  `Average course duration in ${formattedCategory} programs`,
                  `Career prospects after ${formattedCategory} education`,
                  `Industry trends in ${formattedCategory} field`
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`h-5 w-5 ${theme.accentText} mr-2 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-semibold ${theme.accentText} mb-3 flex items-center`}>
                <svg className={`h-5 w-5 ${theme.accentText} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Popular Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  ...(categoryLower === 'engineering' ? ['Computer Science', 'Mechanical', 'Electrical', 'Civil'] : []),
                  ...(categoryLower === 'medical' ? ['General Medicine', 'Surgery', 'Pediatrics', 'Dermatology'] : []),
                  ...(categoryLower === 'management' ? ['Marketing', 'Finance', 'HR', 'Operations'] : []),
                  ...(categoryLower === 'arts-humanities' ? ['Literature', 'History', 'Philosophy', 'Performing Arts'] : []),
                ].map((spec, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${theme.badge} bg-opacity-80`}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryPage;