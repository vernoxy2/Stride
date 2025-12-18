import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";

const SliderMedia = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () =>
    setModalIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  const nextImage = () =>
    setModalIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));

  return (
    <>
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
            loop={true}
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
              1280: { slidesPerView: 3, spaceBetween: 50 },
            }}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center cursor-pointer"
                onClick={() => openModal(index)}
              >
                <motion.img
                  src={item.src || item} // handle array of strings or objects
                  alt={item.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl px-0"
                  initial={{ opacity: 0.5, scale: 0.9,}}
                  animate={
                    index === activeIndex
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.5, scale: 0.9, filter: "blur(2px)"  }
                  }
                  transition={{ duration: 0.5 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              src={data[modalIndex].src || data[modalIndex]}
              alt={data[modalIndex].alt || `Media ${modalIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />

            {/* Left Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#10094;
            </button>

            {/* Right Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#10095;
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SliderMedia;
