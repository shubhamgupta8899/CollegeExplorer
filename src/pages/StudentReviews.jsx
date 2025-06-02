// File: src/pages/StudentReviews.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { RiGraduationCapFill } from 'react-icons/ri';

const StudentReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Shanvi Sukla",
      college: "IES University, Bhopal",
      rating: 5,
      image: "data:image/jpeg;base64,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",
      comment: "This platform helped me find the perfect college with detailed comparisons. The virtual tour feature was amazing!",
      course: "B.Tech Computer Science (2021-2)",
      placement: "Placed at Microsoft (₹21.0 LPA)"
    },
    {
      name: "Priya Patel",
      college: "Sharda University, Noida",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "The admission process guidance was exceptional. I got direct connect with college counselors through this site.",
      course: "MBA (2022-24)",
      placement: "Placed at Deloitte (₹12 LPA)"
    },
    {
      name: "Amit Singh",
      college: "Amity University, Mumbai",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      comment: "The scholarship information saved me ₹1.2 lakh in fees! The college rankings are very accurate.",
      course: "BBA (2021-24)",
      placement: "Placed at HDFC Bank (₹8 LPA)"
    },
    {
      name: "Neha Gupta",
      college: "LPU, Punjab",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      comment: "Placement statistics helped me choose wisely. Got placed at Amazon with ₹12 LPA package!",
      course: "B.Tech CSE (2020-24)",
      placement: "Placed at Amazon (₹15 LPA)"
    }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`text-${i < rating ? 'yellow-400' : 'gray-300'} text-lg`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Modern Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-4"
        >
          <RiGraduationCapFill className="text-purple-600 text-4xl mr-3" />
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Success Stories
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Students Say</span>
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real experiences from students who transformed their careers
        </p>
      </div>

      {/* Modern Review Card */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          key={activeReview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            {/* Student Image Section - Modern Design */}
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
              <img
                src={reviews[activeReview].image}
                alt={reviews[activeReview].name}
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{reviews[activeReview].name}</h3>
                <p className="text-blue-100">{reviews[activeReview].college}</p>
                <div className="mt-2">
                  <StarRating rating={reviews[activeReview].rating} />
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
            </div>

            {/* Review Content - Modern Layout */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-center mb-4">
                <IoMdSchool className="text-purple-500 text-xl mr-2" />
                <span className="text-sm font-medium text-gray-500">{reviews[activeReview].course}</span>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{reviews[activeReview].comment}"
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">{reviews[activeReview].placement}</span>
                </div>
              </div>

              {/* Modern Navigation */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${activeReview === index ? 'bg-purple-600 w-6' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={prevReview}
                    className="p-3 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition shadow-sm border border-gray-200"
                  >
                    <FaArrowLeft />
                  </button>
                  <button 
                    onClick={nextReview}
                    className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition shadow-lg"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Testimonials - Modern Grid */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Campus Life Experiences</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">See what our students say about their college journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="relative pt-[56.25%] bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Student Journey #{item}</h4>
                <p className="text-gray-600 text-sm mb-4">Watch authentic campus experiences</p>
                <button className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center">
                  Watch Story
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-24 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="md:flex">
          <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-3">Share Your Story</h3>
            <p className="text-blue-100 mb-6">Help future students make the right choice</p>
            <RiGraduationCapFill className="text-white/20 text-6xl self-end" />
          </div>
          <div className="md:w-3/5 p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Become a Student Ambassador</h4>
            <p className="text-gray-600 mb-6">Join our community of students sharing authentic experiences about their colleges</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Submit Your Review
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentReviews;