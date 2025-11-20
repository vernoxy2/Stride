import React from "react";
import Compass from "../../../assets/ProjectPage/OrangeCity/SVG/compass.svg";
import PrimaryButton from "../../../Components/PrimaryButton";
import AProjectBy from "../../../assets/ProjectPage/SVG/AProjectBy.svg";
import Architect from "../../../assets/ProjectPage/SVG/Architect.svg";

const PrimaryComponent = ({ logo, locationDetails, mapSrc }) => {
  return (
    <div className="container space-y-5 md:space-y-10 overflow-hidden">
      {/* Location Map heading */}
      <div className="flex items-center justify-between">
        <div data-aos="fade" className="flex items-center gap-3">
          <img
            src={Compass}
            alt="Compass Icon"
            className="pointer-events-none hidden sm:block"
          />
          <h1>Location Map</h1>
        </div>
        <div>
          <img
            data-aos="zoom-in"
            src={logo}
            alt="Logo"
            className="sm:h-28 pointer-events-none"
          />
        </div>
      </div>

      <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Location Details */}
        <div className="border-[2px] border-[#d9d9d9] rounded-3xl p-5 lg:p-10 space-y-3 md:space-y-6">
          <div className="space-y-1.5 md:space-y-3">
            <p>Address</p>
            <h2 className="whitespace-pre-line">{locationDetails}</h2>
          </div>

          <hr className="bg-[#D9D9D9] h-[2px]" />

          <PrimaryButton>Get Directions</PrimaryButton>

          <div className="flex justify-around items-center p-4 w-[110%] sm:w-[100%]">
            {/* Left Section */}
            <div className="flex flex-col items-start space-y-2">
              <p className="text-stride">A Project By</p>
              <img
                src={AProjectBy}
                alt="A Project By"
                className="object-cover h-12 sm:h-28"
              />
            </div>

            {/* Divider */}
            <div className="w-px bg-stride h-32 sm:h-48"></div>

            {/* Right Section */}
            <div className="flex flex-col items-start space-y-2">
              <p className="text-stride">
                Architect & Structure :<br className="sm:hidden" /> MEP
                Consultant
              </p>
              <img
                src={Architect}
                alt="Architect"
                className="object-cover h-12 sm:h-28"
              />
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full min-h-[400px] h-full">
          <iframe
            title="Google Map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PrimaryComponent;
