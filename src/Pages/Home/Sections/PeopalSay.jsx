import React from "react";
import Slider from "react-slick";
import Title from "../../../assets/HomePage/PNG/Says.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // using react-icons for arrows

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -right-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-stride text-4xl bg-white rounded-full p-2 shadow-lg hover:bg-gray-200" />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -left-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-stride text-4xl bg-white rounded-full p-2 shadow-lg hover:bg-gray-200" />
    </div>
  );
};

const PeopleSay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const testimonials = [
    {
      text: "Loved working with your team on our basement remodel! Looking forward to partnering again on future projects.",
      name: "Manish Patel",
      role: "Service Provider",
    },
    {
      text: "The team was amazing to work with on our basement remodel! I’m really happy with the results and will absolutely be using them again for future projects!",
      name: "Sarah Lee",
      role: "Homeowner",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-stride/30 to-transparent relative mt-28">
      <div data-aos="zoom-in" className="flex flex-col w-full max-w-2xl text-center container mx-auto py-32 px-8 relative">
        <Slider  {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 flex flex-col items-center w-[50%]  ">
              <h2 className="font-medium text-stride mb-4">
                {testimonial.text}
              </h2>
              <p className="font-medium">{testimonial.name}</p>
              <hr className="w-1/2 my-2 border-gray-300 mx-auto" />
              <p className="text-sm font-normal">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 border-[12px] border-white rounded-full">
        <img src={Title} alt="" className="mx-auto" />
      </div>
      
    </div>
  );
};

export default PeopleSay;
