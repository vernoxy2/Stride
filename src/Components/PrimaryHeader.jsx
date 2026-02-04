import React, { useState, useEffect } from "react";

const PrimaryHeader = ({ title, backgroundImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [backgroundImage]);

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`py-0 flex items-center justify-center bg-no-repeat bg-center bg-cover h-[280px] md:h-[600px] lg:h-svh transition-opacity duration-150 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-white font-semibold text-2xl md:text-5xl transition-opacity duration-150 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PrimaryHeader;
