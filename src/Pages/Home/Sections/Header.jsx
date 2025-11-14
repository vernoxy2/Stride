import React from "react";
import backgroundImage from "../../../assets/HomePage/PNG/Head.png";
import ProOverview from "./ProOverview";

const Header = () => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: 400,
  };
  return (
    <section
    
      style={style}
      className="pt-52 bg-secondary flex items-center justify-center -mb-52"
    >
      <section className=" w-full container px-4 2xl:px-24 pb-0  ">
        <h1 data-aos="fade-up" className="text-center text-white">
          Building a Brighter Future <br /> Through Quality
        </h1>
        <hr data-aos="fade-up" className="bg-white" />
        <h2 data-aos="fade-up" className="text-white leading-8 text-center md:text-start">
          Delivering excellence today <br /> to shape a brighter <br />{" "}
          tomorrow.
        </h2>
        <ProOverview/>  
      </section>
    </section>
  );
};

export default Header;
