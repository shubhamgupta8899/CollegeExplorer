// File: src/pages/CollegeComparison.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiBarChart2, FiAward, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap, FaUniversity, FaUsers } from 'react-icons/fa';

const CollegeComparison = () => {
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Sample college data with more details
  const colleges = [
    { 
      id: 1, 
      name: "IES University, Bhopal", 
      rating: 4.5, 
      fees: "₹1.2L/year", 
      placement: "92%", 
      rank: 8,
      location: "Bhopal, MP",
      courses: ["B.Tech", "MBA", "BBA"],
      facultyRatio: "1:15",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 2, 
      name: "Sharda University, Noida", 
      rating: 4.2, 
      fees: "₹1.5L/year", 
      placement: "88%", 
      rank: 12,
      location: "Noida, UP",
      courses: ["B.Tech", "MBA", "B.Sc"],
      facultyRatio: "1:18",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 3, 
      name: "Amity University, Mumbai", 
      rating: 4.7, 
      fees: "₹1.8L/year", 
      placement: "95%", 
      rank: 5,
      location: "Mumbai, MH",
      courses: ["B.Tech", "MBA", "BBA", "LLB"],
      facultyRatio: "1:12",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  useEffect(() => {
    // Simulate loading
    if (searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const toggleCollegeSelection = (college) => {
    if (selectedColleges.some(c => c.id === college.id)) {
      setSelectedColleges(selectedColleges.filter(c => c.id !== college.id));
    } else if (selectedColleges.length < 3) {
      setSelectedColleges([...selectedColleges, college]);
    }
  };

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              College Comparison Tool
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare up to 3 colleges side-by-side with detailed insights
          </p>
        </motion.div>

        {/* Search and Selection */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div variants={itemVariants} className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Search colleges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Selected colleges chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-6">
            {selectedColleges.map(college => (
              <motion.span 
                key={college.id}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 shadow-md"
              >
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-6 h-6 rounded-full mr-2 object-cover"
                />
                {college.name}
                <button 
                  onClick={() => toggleCollegeSelection(college)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <FiX className="h-4 w-4" />
                </button>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Search Results */}
        {searchQuery && !isLoading && filteredColleges.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">Search Results</h3>
            <div className="space-y-3">
              {filteredColleges.map(college => (
                <motion.div
                  key={college.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg shadow-md cursor-pointer transition-all ${selectedColleges.some(c => c.id === college.id) ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200' : 'bg-white'}`}
                  onClick={() => toggleCollegeSelection(college)}
                >
                  <div className="flex items-center">
                    <img 
                      src={college.image} 
                      alt={college.name}
                      className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{college.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <FiMapPin className="mr-1" />
                        {college.location}
                      </div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <FiAward className="text-yellow-400 mr-1" />
                      <span className="font-medium">{college.rating}/5</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Comparison Table */}
        <AnimatePresence>
          {selectedColleges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white shadow-xl rounded-xl overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                {/* Header Row */}
                <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                  Comparison Criteria
                </div>
                {selectedColleges.map(college => (
                  <div key={college.id} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex flex-col items-center">
                      <img 
                        src={college.image} 
                        alt={college.name}
                        className="w-16 h-16 rounded-lg object-cover mb-3 shadow-md"
                      />
                      <h3 className="font-bold text-center text-gray-900">{college.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <FiMapPin className="mr-1" />
                        {college.location}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Rating Row */}
                <ComparisonRow 
                  icon={<FiAward className="text-blue-500" />}
                  title="Rating"
                  values={selectedColleges.map(c => (
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiAward 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(c.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-gray-700">{c.rating}/5</span>
                    </div>
                  ))}
                />

                {/* Fees Row */}
                <ComparisonRow 
                  icon={<FiDollarSign className="text-blue-500" />}
                  title="Annual Fees"
                  values={selectedColleges.map(c => c.fees)}
                />

                {/* Placement Row */}
                <ComparisonRow 
                  icon={<FiBarChart2 className="text-blue-500" />}
                  title="Placement Rate"
                  values={selectedColleges.map(c => c.placement)}
                />

                {/* Rank Row */}
                <ComparisonRow 
                  icon={<FaUniversity className="text-blue-500" />}
                  title="National Rank"
                  values={selectedColleges.map(c => `#${c.rank}`)}
                />

                {/* Faculty Ratio Row */}
                <ComparisonRow 
                  icon={<FaUsers className="text-blue-500" />}
                  title="Faculty Ratio"
                  values={selectedColleges.map(c => c.facultyRatio)}
                />

                {/* Courses Row */}
                <ComparisonRow 
                  icon={<FaGraduationCap className="text-blue-500" />}
                  title="Popular Courses"
                  values={selectedColleges.map(c => (
                    <div className="flex flex-wrap gap-2">
                      {c.courses.slice(0, 3).map(course => (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {course}
                        </span>
                      ))}
                      {c.courses.length > 3 && (
                        <span className="text-xs text-gray-500">+{c.courses.length - 3} more</span>
                      )}
                    </div>
                  ))}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {selectedColleges.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-lg max-w-2xl mx-auto"
          >
            <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-2">Ready to compare?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Search and select up to 3 colleges to start comparing their features, rankings, and more
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md font-medium"
              onClick={() => document.querySelector('input').focus()}
            >
              Search Colleges
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Need help deciding?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our education counselors can help you choose the perfect college based on your preferences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold shadow-lg"
          >
            Talk to an Expert
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Reusable comparison row component
const ComparisonRow = ({ icon, title, values }) => (
  <>
    <div className="p-4 flex items-center bg-gray-50 text-gray-700 font-medium border-t border-gray-200">
      <span className="mr-2">{icon}</span>
      {title}
    </div>
    {values.map((value, i) => (
      <div key={i} className="p-4 flex items-center border-t border-gray-200">
        {value}
      </div>
    ))}
  </>
);

export default CollegeComparison;