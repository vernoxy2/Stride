import React from "react";
import TitleBox from "../../../Components/TitleBox";
import { CiLocationOn } from "react-icons/ci";
import StrideRealty from "../../../assets/HomePage/PNG/StrideRealty.png";
import Title from "../../../assets/HomePage/SVG/AuraTitle.svg";

const SelectProject = () => {
  return (
    <div className="bg-secondary">
      <div className="flex justify-end relative">
        <div
          style={{ backgroundImage: `url(${StrideRealty})` }}
          className="w-1/2 max-h-[1000px] bg-cover min-h-[500px] lg:h-screen bg-center"
        ></div>
        <div className="container grid grid-cols-2 absolute inset-0">
          <div className=" py-12  flex flex-col gap-10 items-start justify-between">
            {/* Headline */}
            <div className="space-y-4">
              <div
                data-aos="fade-up"
                className={`flex items-center gap-3 px-6 py-1 border border-white rounded-full w-fit `}
              >
                <div className="bg-white p-1 rounded-full" />
                <p className="text-white font-bold ">Stride Realty</p>
              </div>
              <h1 className="w-[95%] 2xl:w-[75%] text-white">
                Creative brilliance, lasting effect.
              </h1>
            </div>
            <div className="flex w-full items-end gap-5">
              <img src={Title} alt="" className="h-8 md:h-12 lg:h-auto" />
              <hr className="w-full bg-white"/>

            </div>

            {/* Location */}
            <div className="flex items-center gap-1 md:gap-3">
              <h1 className="text-white">01</h1>
              <CiLocationOn className="text-stride text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="text-white">
                <span className="font-bold">Aura,</span> Survey no-612,{" "}
                <br className="hidden lg:block" /> Opposite Gardencity,
                Ankleshwar.
              </p>
              <hr className="w-full bg-white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProject;
