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
      className="pt-56 bg-secondary flex items-center justify-center -mb-56"
    >
      <section className=" w-full container pb-0 ">
        <h1 className="text-center text-white">
          Building a Brighter Future <br /> Through Quality
        </h1>
        <hr className="bg-white" />
        <h2 className="text-white leading-8">
          Delivering excellence today <br /> to shape a brighter <br />{" "}
          tomorrow.
        </h2>
        <ProOverview/>  
      </section>
    </section>
  );
};

export default Header;
