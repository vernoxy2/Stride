import React from "react";
import TitleBox from "../../../Components/TitleBox";
import { CiLocationOn } from "react-icons/ci";
import StrideRealty from "../../../assets/HomePage/PNG/StrideRealty.png"

const SelectProject = () => {
  return (
    <section className="overflow-hidden ">
      <div className=" grid grid-cols-2 min-w-[screen]">
        <div className="flex w-full bg-secondary">
          <div className="py-12 lg:px-24 ml-auto bg-secondary flex flex-col justify-between">
            <div className="space-y-8">
              <TitleBox title="Our Project" className="border-[#D9D9D9]" />
              <h1 className="text-white">
                Creative <br /> brilliance, lasting
                <br /> effect.
              </h1>
            </div>
            <div className="flex w-full  justify-between items-center gap-2">
              <h1 className="font-bold tracking-tighter text-white">01</h1>
              <CiLocationOn className="text-stride flex h-full text-6xl" />
              <p className="text-white">
                Stride Realty, SURVEY NO-612, OPPOSITE GARDENCITY, ANKLESHWAR.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-secondary/10">
        <img src={StrideRealty} alt="" className="object-cover w-full"/></div>
      </div>
    </section>
  );
};

export default SelectProject;
