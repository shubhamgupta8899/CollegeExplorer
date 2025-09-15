// File: src/components/CollegeSlider.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CollegeCard from './CollegeCard'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollegeSlider = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/colleges/homeTopColleges")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Colleges:", data); // 🔍 Debug log
        setColleges(data);
      })
      .catch((err) => {
        console.error("Error fetching colleges:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  if (loading) {
    return <p className="text-center text-gray-500 py-10">Loading Colleges...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      {colleges.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No Top Colleges selected for Explore section.
        </p>
      ) : (
        <Slider {...settings}>
          {colleges.map((college) => (
            <div key={college.id} className="p-2">
              <CollegeCard college={college} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CollegeSlider;
