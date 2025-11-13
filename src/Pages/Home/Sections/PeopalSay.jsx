import React from "react";
import Slider from "react-slick";
import Title from "../../../assets/HomePage/PNG/Says.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // using react-icons for arrows

const CornerClip = ({ positions, className = '' }) => {
  return (
    <>
      {positions.map((pos, idx) => (
        <div
          key={idx}
          className={`absolute w-[40px] h-[40px] bg-bg rotate-180 ${className}`}
          style={{
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom,
            left: pos.left,
            clipPath: 'path("M0 0Q0,40 40,40 L 0 40 Z")',
          }}
        />
      ))}
    </>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
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
      className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
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
    pauseOnHover: true,
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
      <div
        data-aos="zoom-in"
        className="flex flex-col w-full max-w-4xl text-center container mx-auto py-32 px-8 relative "
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-4 flex flex-col items-center w-[50%]  "
            >
              <h2 className=" text-stride mb-4 font-bold md:w-[80%] mx-auto border border-secondary">
                {testimonial.text}
              </h2>
              <p className="font-bold">{testimonial.name}</p>
              <hr className="w-1/2 my-2 border-gray-300 mx-auto" />
              <p className="text-sm font-normal">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute -top-16 lg:-top-20 left-1/2 -translate-x-1/2 border-[10px] border-white rounded-full">
        <img src={Title} alt="" className="mx-auto h-28 lg:h-32" />
        
        {/* <CornerClip className="bg-"
          positions={[
            { bottom: 45, right: -24 },
            { bottom: 18, left: -43 },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default PeopleSay;
