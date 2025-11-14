import React from "react";
import weare from "../../../assets/HomePage/PNG/WeAre.png";
import { CornerClip } from "../../../Components/CornerClip";
// import weare1 from "../../../assets/HomePage/PNG/WeAre1.png";

const countdown = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
      <div  data-aos="zoom-in" className="w-full bg-bg h-full rounded-3xl relative">
        <img
        
          src={weare}
          alt=""
          className="w-full h-full object-contain rounded-3xl"
        />
        <div className="absolute top-0 w-fit bg-bg px-20 lg:px-28 h-20 rounded-ee-3xl">
          {[
            { top: 0, right: -24 },
            { bottom: -24, left: 0 },
          ].map((pos, idx) => (
            <div
              key={idx}
              className="absolute w-[24px] h-[24px] bg-bg rotate-90"
              style={{
                top: pos.top,
                right: pos.right,
                bottom: pos.bottom,
                left: pos.left,
                clipPath: 'path("M0 0Q0,24 24,24 L 0 24 Z")',
              }}
            />
          ))}
        </div>
        {/* Overlay with rounded corners */}
        {/* <div className="absolute top-0 w-fit bg-bg px-20 lg:px-28 h-20 rounded-ee-3xl">
          <CornerClip
            className="rotate-90"
            positions={[
              { top: 0, right: -24 },
            { bottom: -24, left: 0 },
            ]}
          />
        </div> */}
      </div>
      <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl">
        <div className="bg-secondary/20 rounded-3xl min-h-20 h-full"></div>
        <div className="bg-secondary/20 rounded-3xl min-h-20 h-full"></div>
        <div className="bg-secondary/20 rounded-3xl min-h-20 h-full"></div>
        <div className="bg-secondary/20 rounded-3xl min-h-20 h-full">
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
