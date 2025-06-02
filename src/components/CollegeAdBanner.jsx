import React from 'react';
import { motion } from 'framer-motion';

const CollegeAdBanner = ({ college }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative bg-gradient-to-br from-indigo-500 via-purple-500 h-[50vh] to-blue-600 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 my-12 overflow-hidden border-2 border-white/20"
    >
      {/* Floating decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full filter blur-xl"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full filter blur-xl"></div>
      
      {/* Admission Badge - more prominent */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-5 py-2 text-sm font-bold rounded-full z-10 shadow-lg"
      >
        🎓 ADMISSION 2025 OPEN!
      </motion.div>

      {/* College Image with better framing */}
      <motion.div 
        className="relative w-full md:w-72 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white"
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x300?text=College+Campus";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </motion.div>

      {/* College Info with better typography */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <h3 className="text-3xl font-extrabold text-white drop-shadow-md">
          {college.name}
        </h3>
        <p className="mt-3 text-white/90 text-lg font-medium">
          {college.tagline || "Shape your future with excellence"}
        </p>
        
        {/* Key highlights */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
            ⭐ NAAC {college.rating || 'A++'}
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
            💼 {college.placement || '95%'} Placements
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
            🏆 Rank #{college.ranking || '1'}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
          <motion.a
            href={college.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Virtual Tour
          </motion.a>
          <motion.a
            href="#apply"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
            </svg>
            Apply Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default CollegeAdBanner;