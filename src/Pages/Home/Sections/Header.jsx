import React, { useState, useEffect } from "react";
import { headersData } from "../../../Data/headersData";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const delay = 8000; // 8 seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger exit animation
      setAnimate(false);
      
      // Change content and trigger enter animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % headersData.length);
        setTimeout(() => setAnimate(true), 50);
      }, 500); // wait for exit animation
    }, delay);

    return () => clearInterval(interval);
  }, []);

  // Animate text on first render
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
      ))}<div className="absolute inset-0 z-[15]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col justify-end min-h-[60vh] md:h-screen pb-12 md:pb-20">
        {/* Main Text with Line */}
        <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-5 overflow-hidden">
          <span
            className={`block h-12 md:h-20 w-[2px] bg-white transition-all duration-700 ease-in ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          />
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl text-white font-semibold transition-all duration-700 ease-in py-1 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {currentHeader.mainText}
          </h1>
        </div>

        {/* Subtext */}
        <p
          className={`text-sm md:text-base font-light text-white uppercase ml- tracking-wider transition-all duration-700 ease-out ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {currentHeader.subText}
        </p>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
