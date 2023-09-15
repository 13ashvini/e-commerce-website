import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import confidenceImages from "../../assests/Images/confidence.png";
import helpcenterImage from "../../assests/Images/helpcenter.png";
import carouselImage1 from "../../assests/Images/1.jpg";
import carouselImage2 from "../../assests/Images/2.jpg";
import carouselImage3 from "../../assests/Images/3.jpg";
import homeMobileBanner from "../../assests/Images/homeMobileBanner.jpg";
import homeElectroicsBanner from "../../assests/Images/homeElectronicBanner.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const CarouselSlider = () => {
  var settings = {
  
    arrow: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    fade: true,
    prevArrow: <MdKeyboardArrowLeft />, // Optionally customize previous arrow
    nextArrow: <MdKeyboardArrowRight />, // Optionally customize next arrow
  };
  return (
    <div className=" lg:flex gap-8 px-10 py-3">
      <Slider {...settings} className="md:w-[500px] sm:[300px] lg:w-[700px] xl:w-[800px] px-0">
        <div>
          <img src={carouselImage1} alt="" className="w-full p-0"/>
        </div>
        <div>
          <img src={carouselImage2} alt="" className="w-full" />
        </div>
        <div>
          <img src={carouselImage3} alt="" className="w-full" />
        </div>
        <div>
          <img src={carouselImage1} alt="" className="w-full" />
        </div>
      
      </Slider>

      <div className="flex flex-col gap-7">
        <div>
          <img src={homeMobileBanner} alt=""  className="w-full h-full" />
        </div>
        <div>
          <img src={homeElectroicsBanner} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
