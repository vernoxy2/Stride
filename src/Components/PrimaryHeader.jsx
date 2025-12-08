import React from "react";

const PrimaryHeader = ({ title, backgroundImage }) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="py-0 bg-secondary flex items-center justify-center bg-no-repeat bg-center bg-cover h-[280px] md:h-[600px]"
    >
      <div className="text-center">
        <h1 className="text-white ">{title}</h1>
      </div>
    </section>
  );
};

export default PrimaryHeader;
