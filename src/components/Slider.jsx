import React from "react";
import Slider from "react-slick";
import pic1 from "../assets/img1.png";
import pic2 from "../assets/img2.png";
import pic3 from "../assets/img3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div className="slider-container">
        <img src={pic1} alt="" />
      </div>
      <div className="slider-container">
      <img src={pic2} alt="" />
      </div>
      <div className="slider-container">
      <img src={pic3} alt="" />
      </div>
      <div className="slider-container">
      <img src={pic2} alt="" />
      </div>
    </Slider>
  );
}

