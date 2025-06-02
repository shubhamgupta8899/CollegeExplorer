// File: src/components/MultiCollegeBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MultiCollegeBanner = () => {
  // College data
  const colleges = [
    {
      name: "IES University",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hi04SeVZMNi_1MBMb4eJrIclhBYmudIVBg&s",
      tagline: "Ranked among Top 10 Private Universities in India - 2025",
      website: "https://www.iesuniversity.ac.in/apply-now",
      rating: "A++",
      placement: "95%",
      ranking: "8"
    },
    {
      name: "Sharda University",
      image: "https://pbs.twimg.com/media/FDpquYIVQAEwWl-.jpg",
      tagline: "India's Leading Global University",
      website: "https://www.sharda.ac.in/apply/",
      rating: "A+",
      placement: "90%",
      ranking: "12"
    },
    {
      name: "Amity University",
      image: "https://imgs.search.brave.com/xxnudEleh5xEPHAJHVCpOYXKtv3HtfHESbFYxAVE-nc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTHNoTk1D/TjZ5bEdXUDBrRUhQ/QVZFWXZ1SDQxSzR6/LTFsUG4zRWcxS0tx/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlr/TVdGbC9lV0UzYW1R/eVpubGpieTVqL2JH/OTFaR1p5YjI1MExt/NWwvZEM5aWJHOW5M/MkZ0YVhSNS9MWFZ1/YVhabGNuTnBkSGt0/L2IyNXNhVzVsTFdS/bFlXeHovTFhsdmRT/MWpZVzUwTFcxcC9j/M010WTI5MWNHOXVM/V052L1pHVnpMV0Z1/WkMxa2FYTmovYjNW/dWRITXRZWFpoYVd4/aC9ZbXhsTFc5dUxX/RmtiV2x6L2N5NTNa/V0p3",
      tagline: "Asia's Leading Not-for-Profit University",
      website: "https://admissions2025.amity.edu/gurugram-admissions?utm_source=Google%20Ads&utm_medium=Search&utm_campaign=91_01_Gurugram_2025_Search_CoreBrand_Exact_130325&utm_adgroup=Brand&utm_term=amity%20admission%20form&gad_source=1&gad_campaignid=22339504780&gbraid=0AAAAADe4RnhwZJ7fNMzjh_TTZ2ac4UBJD&gclid=CjwKCAjwi-DBBhA5EiwAXOHsGbFe9Kko17tAt3cZk4Y9awnf2vAq3s96X9sgo0UKaWz2jw9kYBKUDhoCfmkQAvD_BwE",
      rating: "A++",
      placement: "93%",
      ranking: "5"
    },
    {
        name: "LNCT University",
        image: "https://imgs.search.brave.com/5kg5QpobRc5Fams0uudVGfEA_a9DQ1VV7h_8La-r170/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTWdmZDR2/aEtlVnUxa2JXY0t0/c1pUaWh1WWVnLVVN/MG92M0F3UTc1b3JV/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlz/Ym1OMC9MbUZqTG1s/dUwzZHdMV052L2Ju/UmxiblF2ZFhCc2Iy/RmsvY3k4eU1ESXhM/ekExTDA1Si9Va1l0/VEU1RFZDMDNOamg0/L056WTRMbXB3Wldj",
        tagline: "Asia's Leading Not-for-Profit University",
        website: "https://lnct.ac.in/admission/",
        rating: "A++",
        placement: "93%",
        ranking: "5"
      }
  ];

  return (
    <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600">
      {/* Floating decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full filter blur-xl"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full filter blur-xl"></div>
      
      {/* Admission Badge */}
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

      {/* Colleges horizontal scroll container */}
      <motion.div 
        className="flex h-full gap-6 px-6 items-center"
        animate={{ 
          x: ["0%", "-33.33%", "-66.66%", "0%"]
        }}
        transition={{
          duration:40,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {colleges.map((college, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 h-[80%] bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/20 p-4 flex flex-col md:flex-row gap-4"
            whileHover={{ scale: 1.02 }}
          >
            {/* College Image */}
            <div className="relative w-full md:w-60 h-45 display:flex justify-center rounded-lg overflow-hidden">
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
            </div>

            {/* College Info */}
            <div className="flex-1 text-white">
              <h3 className="text-xl font-bold line-clamp-1">{college.name}</h3>
              <p className="text-sm text-white/80 mt-1 line-clamp-2">
                {college.tagline}
              </p>
              
              {/* Key highlights */}
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  ⭐ {college.rating}
                </div>
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  💼 {college.placement}
                </div>
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  🏆 #{college.ranking}
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-lg hover:bg-yellow-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {colleges.map((_, index) => (
          <div key={index} className="w-2 h-2 bg-white/50 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default MultiCollegeBanner;