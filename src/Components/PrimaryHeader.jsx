import React from "react";

const PrimaryHeader = ({ title, backgroundImage, height = "600px" }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: height,
  };

  return (
    <section
      style={style}
      className="py-0 bg-secondary flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-white ">{title}</h1>
      </div>
    </section>
  );
};

export default PrimaryHeader;
