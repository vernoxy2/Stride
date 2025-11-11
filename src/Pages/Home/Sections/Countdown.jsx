import React from "react";
import weare from "../../../assets/HomePage/PNG/WeAre.png";
// import weare1 from "../../../assets/HomePage/PNG/WeAre1.png";

const countdown = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full bg-secondary h-full rounded-3xl relative">
        <img
          src={weare}
          alt=""
          className="w-full h-full object-contain rounded-3xl"
        />
        <div className="absolute top-0 bg-bg px-20 lg:px-32 py-7 lg:py-10 rounded-ee-3xl "></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl">
        <div className="bg-secondary/20 rounded-3xl h-full"></div>
        <div className="bg-secondary/20 rounded-3xl h-full"></div>
        <div className="bg-secondary/20 rounded-3xl h-full"></div>
        <div className="bg-secondary/20 rounded-3xl h-full">
          {/* <img
            src={weare1}
            alt=""
            className=" rounded-3xl"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default countdown;
