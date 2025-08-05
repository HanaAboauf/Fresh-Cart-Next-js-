"use client"
import slider1 from "../../../../public/images/slider-image-1.jpeg"
import slider2 from "../../../../public/images/slider-image-2.jpeg";
import slider3 from "../../../../public/images/slider-image-3.jpeg";
import banner1 from "../../../../public/images/guitar.jpg";
import banner2 from "../../../../public/images/luggages.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex">
      <div className="w-3/4 ">
        <Slider {...settings}>
          <Image
            src={slider1}
            alt=""
            className="w-full h-[600px] object-cover"
          />
          <Image
            src={slider2}
            alt=""
            className="w-full h-[600px] object-cover"
          />
          <Image
            src={slider3}
            alt=""
            className="w-full h-[600px] object-cover"
          />
        </Slider>
      </div>
      <div className="w-1/4">
        <Image src={banner1} alt="" className="w-full h-[300px] " />
        <Image src={banner2} alt="" className="w-full h-[300px] " />
      </div>
    </div>
  );
}
