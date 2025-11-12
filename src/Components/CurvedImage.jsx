import React from "react";
import exampleImage from "../assets/HomePage/PNG/WeAre.png";

export default function CurvedImage() {
  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-3xl relative bg-cover bg-center space-y-4 pb-80"
      style={{ backgroundImage: `url(${exampleImage})` }}
    >
      <div className="relative w-fit bg-white px-20 lg:px-32 h-16 rounded-ee-3xl">
        {[{ top: 0, right: -24 }, { bottom: -24, left: 0 }].map((pos, idx) => (
          <div
            key={idx}
            className="absolute w-[24px] h-[24px] bg-white rotate-90"
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
  );
}
