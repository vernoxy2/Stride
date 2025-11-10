import React from "react";
import Features from "./Sections/Features";
import PrimaryHeader from "../../../Components/PrimaryHeader";
import Head from "../../../assets/ProjectPage/Mannat/PNG/MannatHead.png";
import Foot from "../../../assets/ProjectPage/Mannat/PNG/MannatFoot.png";

import Footer from "../../../Components/Footer";
import ProDescription from "./Sections/ProDescription";
import Amenities from "./Sections/Amenities";
import Media from "./Sections/Media";
import Location from "./Sections/Location";

const MannatResidency = () => {
  return (
    <div>
      <PrimaryHeader title="Mannat Residency" backgroundImage={Head} />
      <section
        className="bg-bg relative
  before:absolute before:h-10 before:w-full before:bg-bg before:-top-10 before:content-[''] before:rounded-t-[66px]
  after:absolute after:h-10 after:w-full after:bg-bg after:-bottom-10 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <Features />
        <ProDescription />
        <Amenities />
        <Media/>
        <Location/>
      </section>
      <Footer backgroundImage={Foot} />
    </div>
  );
};

export default MannatResidency;
