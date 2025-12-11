import React from "react";
import weare from "../../../assets/HomePage/PNG/WhoWeAre.png";
import weare1 from "../../../assets/HomePage/PNG/WeAre1.png";
import weare2 from "../../../assets/HomePage/PNG/WeAre2.png";
import weare3 from "../../../assets/HomePage/PNG/WeAre3.png";
import weare4 from "../../../assets/HomePage/PNG/WeAre4.png";

const Images = [weare1, weare2, weare3, weare4];

const countdown = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
      <div  data-aos="zoom-in" className="w-full bg-bg h-full rounded-3xl relative">
        <img
        
          src={weare}
          alt=""
          loading="lazy"
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
       
      </div>
      <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl">
        {Images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            loading="lazy"
            className="w-full h-full object-contain rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
};

export default countdown;
