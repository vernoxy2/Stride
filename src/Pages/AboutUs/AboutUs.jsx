import React from "react";
import Footer from "../../Components/Footer";
import Head from "../../assets/AboutPage/PNG/AboutHead.png";
import PrimaryHeader from "../../Components/PrimaryHeader";
import PeopleSay from "../Home/Sections/PeopalSay";
import Values from "./Sections/Values";
import About from "./Sections/About";

const AboutUs = () => {
  return (
    <div className="">
      <PrimaryHeader title="About Us" backgroundImage={Head} />
      <section
        className=" relative space-y-20
                   before:absolute before:h-12 before:w-full before:bg-white before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px]
                   after:absolute after:h-12 after:w-full after:bg-white after:-bottom-12 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        {/* <CurvedImage /> */}
        <About />
        <Values />
        <PeopleSay />
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
