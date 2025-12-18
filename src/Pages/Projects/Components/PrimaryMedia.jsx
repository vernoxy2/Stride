import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { OrangeMedia } from "../../../Data/OrangeData/OrangeMedia";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { div } from "framer-motion/client";

const SliderMedia = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="py-12 container">
        <hr className="h-[1.5px] bg-[#D9D9D9]" />
      </div>

      <h1 data-aos="fade-up" className="container text-center pb-4">
        Media
      </h1>
      <div className="container mx-auto md:px-0">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true} // <-- enable infinite loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
            1280: { slidesPerView: 3, spaceBetween: 60 },
          }}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // use realIndex with loop
        >
          {OrangeMedia.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={item} // Make sure OrangeMedia is an array of objects with src
                  alt={item.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl px-0"
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={
                    index === activeIndex
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.9 } // smooth transition for inactive
                  }
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderMedia;
