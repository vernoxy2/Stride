import React from "react";
import { CiLocationOn } from "react-icons/ci";

const PrimaryFeatures = ({
  projectName = "",
  address = "",
  data = [],
  image = null,
}) => {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Project Location */}
      <div className="container flex gap-3 items-start text-xl md:text-5xl">
        <CiLocationOn className="text-stride mt-1" />
        <p>
          <span className="text-stride">{projectName}</span>
          {address && <>, {address}</>}
        </p>
      </div>

      {/* Title */}
      {data.length > 0 && (
        <div className="container space-y-8 md:space-y-12">
          <h1>Specifications</h1>
          <hr className="h-[1.5px] bg-[#d9d9d9]" />
        </div>
      )}

      <div className="overflow-hidden container px-0">
        <div className="flex flex-nowrap animate-marquee">
          {[...data, ...data].map((item, index) => (
            <div
              key={index}
              className="p-2 mx-2 flex-shrink-0 w-[26%]"
            >
              <div className="flex items-center gap-4 ">
                <div className="rounded-full border border-[#d9d9d9] p-6 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 md:w-12"
                  />
                </div>
                <div>
                  <p className="text-stride text-lg md:text-xl">{item.title}</p>
                  <p className="text-gray-700 text-base md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Image */}
      {image && (
        <div className="container">
          <img
            src={image}
            alt={projectName}
            className="w-full object-cover rounded-xl shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default PrimaryFeatures;
