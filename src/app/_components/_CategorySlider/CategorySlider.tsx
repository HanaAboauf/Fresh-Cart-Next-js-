"use client"
import Slider from "react-slick";
import { BaseUrl, Category } from "@/types/types";


export default async function CategorySlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
    let categories = [];

  try {
    const data = await fetch(`${BaseUrl}/api/v1/categories`, {
      next: { revalidate: 60 },
    });
     categories = await data.json();
    console.log("🚀 ~ GetAllCategories ~ categories:", categories);
  } catch (error) {
    console.log("🚀 ~ getAllCategories ~ error:", error);
    return null;
  }

  return (
    <>
      <Slider {...settings}>
            {categories.map((category:Category,index:number)=><div key={index} className='my-3'>
                <img src={category.image} alt={category.name} className='w-full h-[200px] object-cover object-top'/>
                <h3>{category.name}</h3>

            </div>)}
        </Slider>
    </>
  );
}
