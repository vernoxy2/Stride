import React from "react";
import EnquiryBg from "../../../assets/HomePage/PNG/Enquiry.png";
import EnquiryBgImg from "../../../assets/HomePage/SVG/EnquiryBgImg.svg";
import EnquiryBgImgg from "../../../assets/HomePage/SVG/EnquiryBgImgg.svg";
import TitleBox from "../../../Components/TitleBox";
import PrimaryButton from "../../../Components/PrimaryButton";
import { CornerClip } from "../../../Components/CornerClip";

const Enquiry = () => {
  return (
    <section
      className="m-2 md:m-3 rounded-3xl bg-cover bg-center bg-no-repeat relative py-24 md:py-40"
      style={{ backgroundImage: `url(${EnquiryBg})` }}
    >
      <section data-aos="zoom-in" className="bg-white w-11/12 md:w-10/12 py-8 pb-40 container rounded-xl relative z-0">
        <TitleBox title="Quick Enquiry" className="mx-auto" />
        <h1 data-aos="fade-up" data-aos-delay="300" className="text-center">
          Specialist Property <br /> Support
        </h1>
        {/* Form */}
        <form data-aos="fade" data-aos-delay="400" action="" className="space-y-5 md:space-y-10 xl:w-1/2  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Your Name" className="" required />
            <input type="email" placeholder="Email" className="" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="tel"
              placeholder="Phone Number"
              className=""
              required
            />
            <input
              type="text"
              placeholder="Your Enquiry About"
              className=""
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <p className="md:font-light">
              We’re happy to connect! Required fields are marked
            </p>
            <div className="flex justify-end h-fit">
              <PrimaryButton> Get a Call Back</PrimaryButton>
            </div>
          </div>
        </form>
        {/* Background */}
        <div className="absolute inset-0 rounded-xl -z-10 flex lg:justify-between justify-end overflow-hidden">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="600"
            src={EnquiryBgImg}
            alt=""
            className="h-full hidden lg:block"
          />

          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="600"
            src={EnquiryBgImgg}
            alt=""
            className="h-full scale-x-[-1]"
          />
        </div>
      </section>
      {/* Overlay with rounded corners */}
      <div className="absolute left-0 bottom-0 bg-bg px-20 lg:px-32 h-20 rounded-se-3xl">
        <CornerClip
          className="rotate-0"
          positions={[
            { top: -24, left: 0 },
            { bottom: 0, right: -24 },
          ]}
        />
      </div>
    </section>
  );
};

export default Enquiry;
