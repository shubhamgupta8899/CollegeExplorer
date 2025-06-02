// File: src/components/TopCollegesList.jsx
import React from 'react';

const topColleges = [
  {
    name: "IES University ",
    fees: "₹2.3 LPA",
    rank: 1,
    jeeCutoff: "AIR 1 – 66 (CSE)",
    gateCutoff: "750+ (CSE)",
    deadline: "May 31, 2025",
  },
  {
    name: "LNCT",
    fees: "₹2.2 LPA",
    rank: 2,
    jeeCutoff: "AIR 2 – 100",
    gateCutoff: "730+",
    deadline: "May 30, 2025",
  },
  {
    name: "Orientel",
    fees: "₹2.1 LPA",
    rank: 3,
    jeeCutoff: "AIR 3 – 120",
    gateCutoff: "710+",
    deadline: "May 29, 2025",
  },
  {
    name: "SisTec",
    fees: "₹2 LPA",
    rank: 4,
    jeeCutoff: "AIR 4 – 150",
    gateCutoff: "700+",
    deadline: "June 2, 2025",
  },
  {
    name: "IIT Kharagpur",
    fees: "₹2 LPA",
    rank: 5,
    jeeCutoff: "AIR 5 – 180",
    gateCutoff: "695+",
    deadline: "June 5, 2025",
  },
  {
    name: "IIT Roorkee",
    fees: "₹1.9 LPA",
    rank: 6,
    jeeCutoff: "AIR 6 – 220",
    gateCutoff: "680+",
    deadline: "June 1, 2025",
  },
  {
    name: "IIT Guwahati",
    fees: "₹1.8 LPA",
    rank: 7,
    jeeCutoff: "AIR 7 – 260",
    gateCutoff: "670+",
    deadline: "June 3, 2025",
  },
  {
    name: "BITS Pilani",
    fees: "₹2.4 LPA",
    rank: 8,
    jeeCutoff: "N/A (BITSAT)",
    gateCutoff: "N/A",
    deadline: "May 25, 2025",
  },
  {
    name: "NIT Trichy",
    fees: "₹1.5 LPA",
    rank: 9,
    jeeCutoff: "AIR 8 – 5000",
    gateCutoff: "650+",
    deadline: "June 10, 2025",
  },
  {
    name: "NIT Surathkal",
    fees: "₹1.5 LPA",
    rank: 10,
    jeeCutoff: "AIR 9 – 5500",
    gateCutoff: "640+",
    deadline: "June 12, 2025",
  },
];

const TopCollegesList = () => {
  return (
    <div className="mt-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        🎓 Top 10 Colleges Information (2025)
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <tr>
              <th className="px-6 py-3">Rank</th>
              <th className="px-6 py-3">College</th>
              <th className="px-6 py-3">Fees</th>
              <th className="px-6 py-3">JEE Cutoff</th>
              <th className="px-6 py-3">GATE Cutoff</th>
              <th className="px-6 py-3">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {topColleges.map((college, index) => (
              <tr key={index} className="hover:bg-blue-50 transition">
                <td className="px-6 py-4 font-semibold">#{college.rank}</td>
                <td className="px-6 py-4">{college.name}</td>
                <td className="px-6 py-4">{college.fees}</td>
                <td className="px-6 py-4">{college.jeeCutoff}</td>
                <td className="px-6 py-4">{college.gateCutoff}</td>
                <td className="px-6 py-4">{college.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCollegesList;
