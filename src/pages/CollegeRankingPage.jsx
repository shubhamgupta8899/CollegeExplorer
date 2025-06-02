import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Fallback logo generator
const generateFallbackLogo = (name) => {
  const initials = name.split(' ').map(word => word[0]).join('').substr(0, 2);
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="50" fill="#3b82f6"/>
      <text x="50" y="55" font-family="Arial" font-size="40" 
            fill="white" text-anchor="middle" dominant-baseline="middle">
        ${initials}
      </text>
    </svg>`
  )}`;
};

const CollegeRankingPage = () => {
  // Bhopal colleges data with website links
  const colleges = [
    {
      id: 1,
      name: "IIIT Bhopal",
      fullName: "Indian Institute of Information Technology, Bhopal",
      image: "https://imgs.search.brave.com/Scbnw4_nHAy1WSF-2xQhCjv-4bZ9mX7ewq_KChnUpNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNGwtTExL/STJRWVpmclFUQnlQ/NlZjVEU5Z01nWnZV/dkg4cVdQeXQtVVha/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTls/YUdWaC9iSFJvTG1W/c1pYUnpiMjVzL2FX/NWxMbU52YlM5M2ND/MWovYjI1MFpXNTBM/M1Z3Ykc5aC9aSE12/TWpBeU5TOHdOQzlK/L1NVbFVMVUpvYjNC/aGJDNXEvY0dj",
      website: "https://www.iiitbhopal.ac.in",
      rankings: { nirf: 45, theWeek: 32, outlook: 38, iirf: 42 },
      category: "Engineering",
      location: "Bhopal",
      established: 2017,
      highlights: ["Focus on IT Education", "Strong Industry Connections", "Modern Campus"]
    },
    {
      id: 2,
      name: "MANIT Bhopal",
      fullName: "Maulana Azad National Institute of Technology",
      image: "https://images.unsplash.com/photo-1590119778271-9a72b0930bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      website: "https://www.manit.ac.in",
      rankings: { nirf: 28, theWeek: 25, outlook: 30, iirf: 27 },
      category: "Engineering",
      location: "Bhopal",
      established: 1960,
      highlights: ["NIT Status", "Excellent Placement Record", "Large Campus"]
    },
    {
      id: 3,
      name: "Barkatullah University",
      fullName: "Barkatullah University, Bhopal",
      image: "https://imgs.search.brave.com/bRAzt86lufhi74VAtnbWSkzoUQFkL-y4qGp5CahBDrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOUNWUGEw/MFpIOXNEaXlSNHo1/ZjlkSFlHaGFoUkxW/bUxfRXV5OElkbllK/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/YjI1MC9aVzUwTG1w/a2JXRm5hV05pL2Iz/Z3VZMjl0TDJOdmJY/QXYvWW1odmNHRnNM/M0F4THpBMy9OVFZ3/ZURjMU5TNTROelUx/L0xqRXpNRGN3T1RF/eU5EazAvTXk1ME1Y/QXhMMk5oZEdGcy9i/MmQxWlM5aVlYSnJZ/WFIxL2JHeGhhQzEx/Ym1sMlpYSnovYVhS/NUxXaHZjMmhoYm1k/aC9ZbUZrTFhKdllX/UXRZbWh2L2NHRnNM/WFZ1YVhabGNuTnAv/ZEdsbGN5MHpZbU5t/TXpJdS9jRzVuUDNj/OU16ZzBNQ1p4L1BU/YzE",
      website: "https://www.bubhopal.ac.in",
      rankings: { nirf: 65, theWeek: 58, outlook: 62, iirf: 60 },
      category: "Government",
      location: "Bhopal",
      established: 1970,
      highlights: ["Affordable Education", "Diverse Course Offerings", "Central Location"]
    },
    {
      id: 4,
      name: "LNCT Bhopal",
      fullName: "Lakshmi Narain College of Technology",
      image: "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      website: "https://www.lnct.ac.in",
      rankings: { nirf: 72, theWeek: 65, outlook: 68, iirf: 70 },
      category: "Private",
      location: "Bhopal",
      established: 1994,
      highlights: ["Good Infrastructure", "Active Student Community", "Industry Collaborations"]
    },
    {
      id: 5,
      name: "IES University",
      fullName: "Infotech Education Society University",
      image: "https://images.unsplash.com/photo-1680084521816-cc1ad0433ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      website: "https://www.iesuniversity.ac.in/",
      rankings: { nirf: 85, theWeek: 78, outlook: 82, iirf: 80 },
      category: "Private",
      location: "Bhopal",
      established: 2020,
      highlights: ["Modern Facilities", "Emerging University", "Tech-focused"]
    },
    {
      id: 6,
      name: "SISTEC",
      fullName: "Sagar Institute of Science & Technology",
      image: "https://images.unsplash.com/photo-1680084521806-b408d976e3e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      website: "https://www.sistec.ac.in",
      rankings: { nirf: 85, theWeek: 78, outlook: 82, iirf: 80 },
      category: "Private",
      location: "Bhopal",
      established: 2003,
      highlights: ["Practical Learning", "Skill Development", "Placement Support"]
    },
    {
      id: 7,
      name: "IIFM Bhopal",
      fullName: "Indian Institute of Forest Management",
      image: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/01/99fba096824ef7e25fb354f313a2f9b11669875237960615_original.jpg?impolicy=abp_cdn&imwidth=640",
      website: "https://www.iifm.ac.in",
      rankings: { nirf: 52, theWeek: 45, outlook: 48, iirf: 50 },
      category: "Government",
      location: "Bhopal",
      established: 1982,
      highlights: ["Specialized in Forestry", "Research Focus", "Green Campus"]
    },
    {
      id: 8,
      name: "NLIU Bhopal",
      fullName: "National Law Institute University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4wZN0-eNhgEd41sYuyDPdwdOKrD3CT-lZw&s",
      website: "https://www.nliu.ac.in",
      rankings: { nirf: 15, theWeek: 12, outlook: 14, iirf: 13 },
      category: "Government",
      location: "Bhopal",
      established: 1997,
      highlights: ["Top Law School", "Moot Court Facilities", "Alumni Network"]
    },
    {
      id: 9,
      name: "AISECT University",
      fullName: "AISECT University, Bhopal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbQY4SxitbhnHCcoGulUpTmqNpuJsMsFO0Q&s",
      website: "https://www.aisectuniversity.ac.in",
      rankings: { nirf: 92, theWeek: 85, outlook: 90, iirf: 88 },
      category: "Private",
      location: "Bhopal",
      established: 2010,
      highlights: ["Skill-based Education", "Affordable Fees", "Industry Partnerships"]
    }
  ];

  // State for filters
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [rankingAgency, setRankingAgency] = useState("nirf");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [expandedCollege, setExpandedCollege] = useState(null);

  // Get unique categories from colleges
  const categories = ["All", ...new Set(colleges.map(college => college.category))];

  // Available ranking agencies
  const agencies = [
    { id: "nirf", name: "NIRF", color: "bg-blue-100 text-blue-800" },
    { id: "theWeek", name: "The Week", color: "bg-purple-100 text-purple-800" },
    { id: "outlook", name: "Outlook", color: "bg-green-100 text-green-800" },
    { id: "iirf", name: "IIRF", color: "bg-yellow-100 text-yellow-800" }
  ];

  // Filter and sort colleges
  const filteredColleges = colleges
    .filter(college => {
      const matchesCategory = categoryFilter === "All" || college.category === categoryFilter;
      const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          college.fullName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.rankings[rankingAgency] - b.rankings[rankingAgency]);

  // Determine which colleges to display
  const displayedColleges = showAll ? filteredColleges : filteredColleges.slice(0, 4);

  // Toggle college details
  const toggleCollegeDetails = (collegeId) => {
    setExpandedCollege(expandedCollege === collegeId ? null : collegeId);
  };

  // Safe image component
  const CollegeLogo = ({ college }) => {
    const [imgSrc, setImgSrc] = useState(college.image || generateFallbackLogo(college.name));
    
    return (
      <img 
        className="h-12 w-12 rounded-full object-contain border-2 border-white shadow-md"
        src={imgSrc}
        alt={college.name}
        onError={() => setImgSrc(generateFallbackLogo(college.name))}
        loading="lazy"
      />
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white"
      >
        <h1 className="text-4xl font-bold mb-2">Bhopal College Rankings 2025</h1>
        <p className="text-lg opacity-90 mb-4">Comprehensive comparison of top educational institutions in Bhopal</p>
        <div className="flex flex-wrap gap-2">
          {agencies.map(agency => (
            <span 
              key={agency.id} 
              className={`px-3 py-1 rounded-full text-sm font-medium ${agency.color} bg-opacity-90`}
            >
              {agency.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Filters Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Box */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Colleges</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by college name..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <div className="relative">
                <select
                  id="category"
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none bg-white"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Ranking Agency Filter */}
            <div>
              <label htmlFor="agency" className="block text-sm font-medium text-gray-700 mb-1">Ranking By</label>
              <div className="relative">
                <select
                  id="agency"
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none bg-white"
                  value={rankingAgency}
                  onChange={(e) => setRankingAgency(e.target.value)}
                >
                  {agencies.map(agency => (
                    <option key={agency.id} value={agency.id}>{agency.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Info */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold">{displayedColleges.length}</span> of <span className="font-semibold">{filteredColleges.length}</span> colleges
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Sorted by:</span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${agencies.find(a => a.id === rankingAgency)?.color}`}>
              {agencies.find(a => a.id === rankingAgency)?.name} Ranking
            </span>
          </div>
        </div>

        {/* Colleges List */}
        <div className="divide-y divide-gray-200">
          {displayedColleges.map((college, index) => (
            <motion.div 
              key={college.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`p-6 hover:bg-gray-50 transition-colors duration-150 ${expandedCollege === college.id ? 'bg-blue-50' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* College Image and Basic Info */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative">
                    <CollegeLogo college={college} />
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-sm">
                      #{index + 1}
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      college.category === "Engineering" 
                        ? "bg-blue-100 text-blue-800" 
                        : college.category === "Private" 
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                    }`}>
                      {college.category}
                    </span>
                  </div>
                </div>

                {/* College Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        <a href={college.website} target="_blank" rel="noopener noreferrer">
                          {college.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{college.fullName}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Est. {college.established}</span>
                        <span className="text-xs text-gray-500">📍 {college.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Ranking Info */}
                  <div className="mt-4 flex flex-wrap gap-4">
                    {agencies.map(agency => (
                      <div 
                        key={agency.id} 
                        className={`px-3 py-1 rounded-lg ${rankingAgency === agency.id ? agency.color + ' ring-2 ring-offset-2 ring-opacity-50' : 'bg-gray-100 text-gray-800'}`}
                      >
                        <div className="text-xs font-medium">{agency.name}</div>
                        <div className="text-lg font-bold text-center">{college.rankings[agency.id]}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedCollege === college.id ? 'auto' : 0,
                      opacity: expandedCollege === college.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {college.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-4 w-4 text-green-500 mt-0.5 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a 
                          href={college.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Visit Website
                        </a>
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          Compare
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                          Save to List
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Toggle Button */}
              <div className="mt-4 text-center">
                <button 
                  onClick={() => toggleCollegeDetails(college.id)}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto"
                >
                  {expandedCollege === college.id ? (
                    <>
                      Show Less
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show More
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All/Show Less Button */}
        {filteredColleges.length > 4 && (
          <div className="px-6 py-4 bg-gray-50 text-center border-t border-gray-200">
            <motion.button 
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {showAll ? (
                <>
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Show Less Colleges
                </>
              ) : (
                <>
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  View All {filteredColleges.length} Colleges
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center text-xs text-gray-500"
      >
        <p>Data sources: NIRF, The Week, Outlook, IIRF, Times of India</p>
        <p className="mt-1">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </motion.div>
    </div>
  );
};

export default CollegeRankingPage;