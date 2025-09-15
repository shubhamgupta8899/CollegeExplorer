import React, { useEffect, useState } from "react";
import CollegeCard from "../components/CollegeCard";

const TopPlacements = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/colleges/category/TOP_PLACEMENTS")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error("Error fetching colleges:", err));
  }, []);

  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Top Placement Colleges
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {colleges.length > 0 ? (
          colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No colleges available
          </p>
        )}
      </div>
    </div>
  );
};

export default TopPlacements;
