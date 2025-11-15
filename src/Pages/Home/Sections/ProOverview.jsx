import React from "react";
import Stride from "../../../assets/NavLogo1.svg";
import Mannat from "../../../assets/MannatLogo1.svg";
import Orange from "../../../assets/OrangeLogo1.svg";

const ProjectsList = [
  {
    id: 1,
    img: Stride,
    text: "Stride Realty builds trust with modern, quality, and value-driven real estate solutions.",
  },
  {
    id: 2,
    img: Orange,
    text: "Elegant logo of Orange City showcasing 82 magnificent luxury villas.",
  },
  {
    id: 3,
    img: Mannat,
    text: "Mannat Residency luxury living symbolized through elegance, comfort, and royalty.",
  },
];

const ProOverview = () => {
  return (
    <div className="container px-0 2xl:px-12 xl:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8 pt-24">
      {ProjectsList.map((item) => (
        <div
          data-aos="fade-up"
          key={item.id}
          className="bg-white rounded-3xl px-6 py-4 lg:pb-14 flex flex-col justify-start gap-2 lg:gap-4 group hover:border-secondary duration-300 transition-colors group shadow-lg"
        >
          <div className="  flex items-center justify-start ">
            <img src={item.img} alt="" className="object-cover h-24" />
          </div>
          <div className="space-y-4">
            <div className="relative w-full rounded-3xl h-[2px] bg-[#d9d9d9] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[20%] before:h-full before:bg-stride before:transition-all before:duration-1000 before:ease-in-out group-hover:before:w-full before:rounded-3xl"></div>

            <p className="camlecase text-secondary">{item.text}</p>
            <div className="relative w-[25%] h-[2px] bg-stride"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProOverview;
