import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const goals = [
  {
    name: 'Engineering',
    id: 'engineering',
    image: 'https://plus.unsplash.com/premium_photo-1663091651850-bd044f089c31?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    description: 'Top engineering colleges with cutting-edge programs',
  
    color: '',
    hoverColor: 'hover:from-blue-600 hover:to-blue-700'
  },
  {
    name: 'Medical',
    id: 'medical',
    image: 'https://thumbs.dreamstime.com/b/medical-students-smiling-camera-university-49033819.jpg',
    description: 'Premier medical schools with excellent clinical exposure',
  
    color: '',
    hoverColor: 'hover:from-green-600 hover:to-green-700'
  },
  {
    name: 'Management',
    id: 'management',
    image: 'https://t3.ftcdn.net/jpg/08/06/58/36/360_F_806583644_76YsZ3Dmlk1vonpfvxk7Pt8do4ZQ9JJ0.jpg',
    description: 'Leading business schools with global recognition',
    color: '',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700'
  },
  {
    name: 'Arts & Humanities',
    id: 'arts-humanities',
    image: 'https://plus.unsplash.com/premium_photo-1714348662044-8ac88ba11bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Renowned institutions for creative and liberal arts',
  
    color: '',
    hoverColor: 'hover:from-amber-600 hover:to-amber-700'
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const GoalSelector = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Dream College</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore top-ranked institutions across various disciplines to find your perfect academic match
        </p>
      </motion.div>

      {/* Goals Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
            onMouseEnter={() => setHoveredCard(goal.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card */}
            <div 
              className={`h-full cursor-pointer rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${hoveredCard === goal.id ? 'shadow-2xl' : ''}`}
              onClick={() => navigate(`/colleges/${goal.id}`)}
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={goal.image}
                  alt={goal.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: hoveredCard === goal.id ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${goal.color} opacity-70`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-90">{goal.icon}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.name}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                
                {/* Animated Button */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center px-4 py-2 rounded-lg ${goal.color.replace('from-', 'bg-gradient-to-r ')} text-white font-medium`}
                >
                  Explore
                  <svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Floating badge on hover */}
            {hoveredCard === goal.id && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-white font-bold text-sm ${goal.color.replace('from-', 'bg-gradient-to-r ')} shadow-lg`}
              >
                Top Colleges
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-6">Not sure which path to choose?</p>
        <button 
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-green-700"
          onClick={() => navigate('/career-guidance')}
        >
          Take Career Assessment
        </button>
      </motion.div>
    </div>
  );
};

export default GoalSelector;