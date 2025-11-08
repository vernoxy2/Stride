import React from "react";
import TitleBox from "../../../Components/TitleBox";
import AboutImg from "../../../assets/AboutPage/PNG/AboutUs.png";
import { style } from "framer-motion/client";

const About = () => {
  return (
    <section className="bg-bg">
      {/* About */}
      <section className="container">
        {/* Title */}
        <TitleBox title="About Us" className="border-[#D9D9D9]" />
        {/* Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* grid-1 */}
          <h1 className="leading-">
            Creating the <br /> future, one idea <br /> at a time.
          </h1>
          {/* grid-2 */}
          <div className="flex flex-col gap-2 justify-between ">
            <p>
              Fill out the form, and our team will contact you soon with more
              information.
            </p>
            <p className="text-lg">
              From clean energy to cutting-edge healthcare, from stadiums to
              data centers, our mission is to design and build environments that
              uplift communities and stand the test of time. Together, we make
              your vision a reality and beyond.
            </p>
          </div>
        </div>
        {/* Image */}
        <div
          style={{ backgroundImage: `url(${AboutImg})` }}
          className="h-[750px] w-full rounded-3xl relative bg-center bg-no-repeat bg-cover backdrop-blur-sm"
        >
          <div className="absolute inset-0 rounded-3xl grid grid-cols-1 md:grid-cols-2">
            {/* Grid item 1 */}
            <div className="relative">
              <div className="absolute top-0 left-0 bg-bg px-10 lg:px-16 py-5 lg:py-8 rounded-br-3xl">
                {/* Content goes here */}
              </div>
            </div>

            {/* Grid item 2 */}
            <div className="bg-black/30"></div>

            
          </div>
        </div>
      </section>
      {/* // Our Story */}
      {/* <section></section> */}
    </section>
  );
};

export default About;
