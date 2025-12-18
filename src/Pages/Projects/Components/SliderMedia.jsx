import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { OrangeMedia } from "../../../Data/OrangeData/OrangeMedia";

import "swiper/css";
import "swiper/css/effect-coverflow";

const SliderMedia = () => {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
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
          1280: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="mySwiper"
      >
        {OrangeMedia.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
            // style={{ width: "200px", height: "200px" }}
          >
            <img
              src={item} // assuming each item in OrangeMedia has a `src` property
              alt={item.alt || `Slide ${index + 1}`} // optional alt text
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMedia;
