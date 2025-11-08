import React from "react";
import TitleBox from "../../../Components/TitleBox";
import AboutImg from "../../../assets/AboutPage/PNG/AboutUs.png";

const About = () => {
  return (
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
            From clean energy to cutting-edge healthcare, from stadiums to data
            centers, our mission is to design and build environments that uplift
            communities and stand the test of time. Together, we make your
            vision a reality and beyond.
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="h-full w-full rounded-3xl">
        <img src={AboutImg} alt="" className="w-full rounded-3xl"/>      </div>
    </section>
  );
};

export default About;
