import React from "react";
import EnquiryBg from "../../../assets/HomePage/PNG/Enquiry.png";
import EnquiryBgImg from "../../../assets/HomePage/SVG/EnquiryBgImg.svg";
import TitleBox from "../../../Components/TitleBox";

const Enquiry = () => {
  return (
    <section
      className="m-2 md:m-3 rounded-3xl bg-cover bg-center bg-no-repeat relative py-24 md:py-48"
      style={{ backgroundImage: `url(${EnquiryBg})` }}
    >
      <section className="bg-white w-11/12 md:w-10/12 py-8 pb-44 container rounded-xl relative z-0">
        <TitleBox title="Quick Enquiry" className="mx-auto" />
        <h1 className="text-center">
          Specialist Property <br /> Support
        </h1>
        {/* Form */}
        <form action="" className="space-y-5 md:space-y-10 xl:w-1/2  mx-auto">
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
            <p className="md:font-light" >We’re happy to connect! <br /> Required fields are marked</p>

          <button className="w-full bg-secondary hover:bg-stride duration-300 transition-colors rounded-3xl text-white py-1.5 text-lg">
            Submit
          </button>
          </div>
        </form>
        {/* Background */}
        <div className="absolute inset-0 rounded-xl -z-10 flex lg:justify-between justify-end">
          <img src={EnquiryBgImg} alt="" className="h-full hidden lg:block"/>
          <img src={EnquiryBgImg} alt="" className="h-full -scale-x-100"/>
        </div>
      </section>
      {/* Overlay with rounded corners */}
      <div className="absolute p-6 md:p-12 px-20 md:px-40 bg-white bottom-0 left-0 rounded-se-3xl rounded-es-3xl"></div>
    </section>
  );
};

export default Enquiry;
