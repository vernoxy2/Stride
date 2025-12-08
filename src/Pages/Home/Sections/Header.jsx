import React from "react";
import backgroundImage from "../../../assets/HomePage/PNG/OrangeHead.png";
import ProOverview from "./ProOverview";

const Header = () => {
 
  return (
    <section style={{backgroundImage: `url(${backgroundImage})`}} className="flex items-center justify-start pt-32 bg-no-repeat bg-cover bg-center-start min-h-[550px] 2xl:min-h-[780px] ">
      <section className="container mt-auto py-6 pb-10 lg:pb-6 space-y-3 md:space-y-5 ">
        <h1 className="text-white font-semibold flex gap-4 md:gap-8"><span><hr className="bg-white h-full p-[0.5px]"/></span>
          Building a Brighter Future <br className="hidden md:block" />
          Through Quality
        </h1>
        <p className="font-poppins font-extralight text-white uppercase ml-5 md:ml-9">Delivering excellence today to shape <br className="hidden md:block" /> a brighter tomorrow. </p>
      </section>
    </section>
  );
};

export default Header;
