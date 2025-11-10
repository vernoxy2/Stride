import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Hoding from "../../../../assets/ProjectPage/OrangeCity/PNG/HodingImg.png";

const Features = () => {
  return (
    <div className="container space-y-4 md:space-y-8">
      <div className="flex gap-3 items-center text-6xl">
        {/* Location Icon */}
        <CiLocationOn className="text-stride h-full"/>
        <p>
          {" "}
          <span className="text-stride">Orange City</span> opposite Vastu Vila, <br />
          Hasot Road, Ankleshwar
        </p>
      </div>
      {/* Construction Features Title */}
      <h1 className="">Construction Features</h1>
      <hr className="h-[1.5px] bg-[#d9d9d9]" />
      {/* Specifications slider */}
      <div className="border border-secondary"></div>
      {/* Display Hodings */}
      <div>
        <img src={Hoding} alt="" className="w-full object-cover"/>
      </div>
      {/* ProDescription */}
      <h1></h1>
    </div>
  );
};

export default Features;
