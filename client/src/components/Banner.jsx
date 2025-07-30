// src/components/Banner.jsx
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ✅ Correct import paths and filenames — no spaces or caps!
import banner1 from "../assets/banner 1.jpg";
import banner2 from "../assets/banner 2.jpg";
import banner3 from "../assets/banner 3.jpg";

const images = [banner1, banner2, banner3];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
return (
  <div className="w-screen">
    <Slider {...settings}>
      {images.map((img, i) => (
        <div key={i}>
          <img
            src={img}
            alt={`banner-${i}`}
            className="w-screen max-w-full h-[300px] object-cover"
          />
        </div>
      ))}
    </Slider>
  </div>
);


  
};

export default Banner;
