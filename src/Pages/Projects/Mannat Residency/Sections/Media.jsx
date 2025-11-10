import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import Media1 from "../../../../assets/ProjectPage/Mannat/Media/Media1.png";
import Media2 from "../../../../assets/ProjectPage/Mannat/Media/Media2.png";
import Media3 from "../../../../assets/ProjectPage/Mannat/Media/Media3.png";
import Media4 from "../../../../assets/ProjectPage/Mannat/Media/Media4.png";

const Images = [Media1, Media2, Media3, Media4, ];

const Media = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 800,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2500,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="container ">Media</h1>
      <div className="container px-0">
        <Slider {...settings}>
          {Images.map((item, index) => (
            <motion.div
              key={index}
              className="py-12 px-8 "
              animate={{
                opacity: index === currentSlide ? 1 : 0.3,
                scale: index === currentSlide ? 1.1 : 1,
              }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={item}
                alt={`Media ${index + 1}`}
                className="w-full object-cover rounded-2xl shadow-3xl"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Media;
