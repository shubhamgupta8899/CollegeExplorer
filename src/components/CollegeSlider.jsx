import React from 'react';
import Slider from 'react-slick';
import CollegeCard from './Collegecard';
import { allColleges } from '../data/College';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollegeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Slider {...settings}>
        {allColleges.map((college, index) => (
          <div key={index} className="p-2">
            <CollegeCard college={college} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollegeSlider;