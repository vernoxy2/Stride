import React from "react";
import Compass from "../../../../assets/ProjectPage/OrangeCity/SVG/compass.svg";
import Logo from "../../../../assets/MannatLogo.svg";
import PrimaryButton from "../../../../Components/PrimaryButton";
// import AProjectBy from "../../../../assets/ProjectPage/svg/AProjectBy.svg";
import Architect from "../../../../assets/ProjectPage/svg/Architect.svg";

const Location = () => {
  return (
    <div className="container space-y-5 md:space-y-10">
      {/* Location Map heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={Compass} alt="" className="pointer-events-none" />
          <h1>Location Map</h1>
        </div>
        <div>
          <img src={Logo} alt="Logo" className="h-32 pointer-events-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location Details */}
        <div className="border-[2px]  border-[#d9d9d9] rounded-3xl p-5 lg:p-10 space-y-3 md:space-y-6">
          <div className="space-y-1.5 md:space-y-3">
            <p>Address</p>
            <h2>
              <span className="text-stride">Mannat Residency,</span> <br />Behind Decent Hotel, <br />Nr. GIDC Bus Station, <br /> Ankleshwar, Gujarat.
            </h2>
          </div>
          <hr className="bg-[#D9D9D9] h-[2px]" />
          <PrimaryButton>Get Directions</PrimaryButton>
          <div className="flex justify-around items-center p-4">
            {/* Left Section */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-stride text-center">A Project By</p>
              {/* <img
                src={AProjectBy}
                alt="A Project By"
                className=" object-contain"
              /> */}
            </div>

            {/* Divider */}
            <div className="w-px bg-stride h-48"></div>

            {/* Right Section */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-stride text-center">
                Architect & Structure :<br /> MEP Consultant
              </p>
              <img
                src={Architect}
                alt="Architect"
                className=" object-contain"
              />
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full min-h-[400px] h-full">
          <iframe
            title="Google Map - Garden City Ankleshwar"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d925.0860124923506!2d73.03802368308857!3d21.596411349776336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSurvey%20No-612%2C%20Opposite%20Garden%20City%2C%20Ankleshwar.!5e1!3m2!1sen!2sin!4v1762333372166!5m2!1sen!2sin"
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

export default Location;
