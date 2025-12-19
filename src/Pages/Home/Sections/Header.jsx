import React, { useState, useEffect } from "react";
import { headersData } from "../../../Data/headersData";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 8000; // 8 seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headersData.length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);

  const currentHeader = headersData[currentIndex];

  return (
    <div className="relative z-[1] min-h-[60vh] md:h-screen overflow-hidden bg-black">
      {headersData.map((header, index) => (
        <section
          key={index}
          className={`absolute inset-0 bg-cover bg-no-repeat bg-top transition-opacity duration-75 ease-linear   ${
            index === currentIndex
              ? " slow-zoom z-10 opacity-100"
              : "opacity-50 z-0"
          }`}
          style={{
            backgroundImage: `url(${header.backgroundImage})`,
          }}
        />
      ))}
      <div className="relative z-20 container flex flex-col justify-end h-full space-y-3 md:space-y-5 pb-12 text-slide-x mt-auto">
        <h1 className="text-white font-semibold flex gap-4 md:gap-8">
          <span>
            <hr className="bg-white h-full p-[0.5px]" />
          </span>
          {currentHeader.mainText}
        </h1>

        <p data-aos="fade-up" className="font-poppins font-extralight text-white uppercase ml-5 md:ml-9">
          {currentHeader.subText}
        </p>
      </div>
    </div>
  );
};

export default Header;
