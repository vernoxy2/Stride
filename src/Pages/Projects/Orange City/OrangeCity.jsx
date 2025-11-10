import React from "react";
import PrimaryHeader from "../../../Components/PrimaryHeader";
import Head from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityHead.png";
import Foot from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityFooter.png";
import Footer from "../../../Components/Footer";
import Features from "./Sections/Features";
import ProDescription from "./Sections/ProDescription";
import Amenities from "./Sections/Amenities";
import Media from "./Sections/Media";
import Location from "./Sections/Location";

const OrangeCity = () => {
  return (
    <div className="">
      <PrimaryHeader title="Orange City" backgroundImage={Head} />
      <section
        className="bg-bg relative
  before:absolute before:h-10 before:w-full before:bg-bg before:-top-10 before:content-[''] before:rounded-t-[66px]
  after:absolute after:h-10 after:w-full after:bg-bg after:-bottom-10 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <Features />
        <ProDescription />
        <Amenities />
        <Media />
        <Location />
      </section>

      <Footer backgroundImage={Foot} />
    </div>
  );
};

export default OrangeCity;
