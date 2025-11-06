import React from "react";
import EnquiryBg from "../../../assets/HomePage/PNG/Enquiry.png";
import TitleBox from "../../../Components/TitleBox";

const Enquiry = () => {
  return (
    <section
      className="m-3 rounded-3xl bg-cover bg-center bg-no-repeat relative py-48"
      style={{ backgroundImage: `url(${EnquiryBg})` }}
    >
      <section className="bg-white w-10/12 py-8 container rounded-xl">
      <TitleBox title="Quick Enquiry" className="mx-auto"/>
      <h1 className="text-center">Specialist Property <br /> Support</h1>

      </section>
      {/* Overlay with rounded corners */}
      <div className="absolute p-12 px-40 bg-white bottom-0 left-0 rounded-se-3xl rounded-es-3xl"></div>
    </section>
  );
};

export default Enquiry;
