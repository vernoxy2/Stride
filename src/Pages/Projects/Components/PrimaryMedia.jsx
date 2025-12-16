import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

const PrimaryMedia = ({ data = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => setModalIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  const nextImage = () => setModalIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="py-12 container">
        <hr className="h-[1.5px] bg-[#D9D9D9]" />
      </div>

      <h1 data-aos="fade-up" className="container">Media</h1>
      <div className="container px-0">
        <Slider {...settings}>
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="py-12 px-8 cursor-pointer"
              onClick={() => openModal(index)}
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
              src={data[modalIndex]}
              alt={`Media ${modalIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            {/* Left Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
            >
              &#10094;
            </button>
            {/* Right Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
    </div>
  );
};

export default PrimaryMedia;
