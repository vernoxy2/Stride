import React, { useEffect } from "react";
import Slider from "react-slick";
import Title from "../../../assets/HomePage/PNG/Says.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Comma from "../../../assets/HomePage/SVG/Comma.svg";

const CornerClip = ({ positions, className = "" }) => {
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
      <IoIosArrowForward className="text-secondary text-4xl bg-white rounded-full p-2 shadow-lg hover:bg-stride hover:text-white duration-200 transition-colors" />
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
      <IoIosArrowBack className="text-secondary text-4xl bg-white rounded-full p-2 shadow-lg hover:bg-stride hover:text-white duration-200 transition-colors" />
    </div>
  );
};

const PeopleSay = () => {
  const texts = ["What", "People", "Says"];
  const flipDuration = 700; // flip animation duration in ms
  const displayDuration = 2000; // how long each word stays visible
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 500); // change text every 2 seconds
    return () => clearInterval(interval);
  }, [displayDuration]);

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
      text: "Very satisfied with the overall journey. The execution was well-managed, communication was clear, and everything was delivered as promised.",
      name: "Kishan Parmar",
      role: "Homeowner",
    },
    {
      text: "Highly professional experience with Stride Realty in Ankleshwar. As an investor, I found them transparent, reliable, and the project offers excellent growth potential.",
      name: "Divyesh Patel",
      role: "investor",
    },
    {
      text: "Highly recommend Stride Realty for their integrity and high-quality, safe investment environment that is perfect for any woman looking to own property.",
      name: "Manisha Patel",
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
              className="px-4 flex flex-col items-center w-[50%] py-10  "
            >
              <h2 className=" text-stride mb-10 font-bold md:w-[85%] mx-auto  relative">
                {testimonial.text}
                <img
                  src={Comma}
                  alt=""
                  className="absolute -top-8 -left-4 h-8 overflow-hidden pointer-events-none"
                />
                <img
                  src={Comma}
                  alt=""
                  className="absolute -scale-y-100 -scale-x-100  -bottom-8 -right-4 h-8 pointer-events-none"
                />
              </h2>
              <p className="font-bold">{testimonial.name}</p>
              <hr className="w-1/2 my-2 border-gray-300 mx-auto" />
              <p className="text-sm font-normal">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute -top-16 lg:-top-20 left-1/2 -translate-x-1/2 border-[10px] border-bg rounded-full">
        <img src={Title} alt="" loading="lazy" className="mx-auto h-28 lg:h-32" />

        <div className="h-full w-full flex items-center justify-center absolute inset-0 rounded-full overflow-hidden">
          <div className="relative h-10 w-full perspective-1000">
            {" "}
            {/* perspective for 3D flip */}
            {texts.map((text, i) => (
              <p
                key={i}
                className={`absolute w-full text-center text-white font-bold font-helvetica transform transition-transform ease-in duration-${flipDuration}`}
                style={{
                  transform: i === index ? "translateY(0)" : "translateY(5%)",
                  opacity: i === index ? 1 : 0,
                  transitionDuration: `${flipDuration}ms`,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSay;
