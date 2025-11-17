import React from "react";
import { CiLocationOn } from "react-icons/ci";

const SelectProject = ({ Display, DisplayText, Maintext, address }) => {
  return (
    <div className="bg-secondary">
      <div className="flex justify-end relative">
        <div
          style={{ backgroundImage: `url(${Display})` }}
          className="w-1/2 max-h-[1000px] bg-cover min-h-[600px] lg:h-screen bg-center"
        />
        <div className="container grid grid-cols-2 absolute inset-0">
          <div className="py-12 xl:py-16 flex flex-col gap-10 items-start justify-between">
            {/* Headline */}
            <div className="space-y-4">
              <div
                data-aos="fade-up"
                className="flex items-center gap-3 px-6 py-1 border border-white rounded-full w-fit"
              >
                <div className="bg-white p-1 rounded-full" />
                <p className="text-white font-bold">Selected Project</p>
              </div>
              <h1 className="text-white">{Maintext}</h1>
            </div>

            <img
              src={DisplayText}
              alt="Display Project Name"
              className="w-[90%]"
            />

            {/* Location */}
            <div className="flex items-center gap-1 md:gap-3">
              <h1 className="text-white">01</h1>
              <CiLocationOn className="text-stride text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="text-white">{address}</p>
                <hr className="w-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProject;
