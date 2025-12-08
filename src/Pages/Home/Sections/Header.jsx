import React, { useState, useEffect } from "react";
import { headersData } from "../../../Data/headersData";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 4000; // 5 seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === headersData.length - 1 ? 0   : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative -z-[1] h-screen">
      {headersData.map((header, index) => (
        <section
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${header.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container flex flex-col justify-end h-full space-y-3 md:space-y-5 pb-6">
            <h1 className="text-white font-semibold flex gap-4 md:gap-8">
              <span>
                <hr className="bg-white h-full p-[0.5px]" />
              </span>
              {header.mainText}
            </h1>
            <p className="font-poppins font-extralight text-white uppercase ml-5 md:ml-9">
              {header.subText}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Header;
