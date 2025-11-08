import React from "react";
import Stride from "../../../assets/NavLogo.svg";
import Mannat from "../../../assets/MannatLogo.svg";
import Orange from "../../../assets/OrangeLogo.svg";

const ProjectsList = [
  {
    id: 1,
    img: Stride,
    text: "Stride Realty builds trust with modern, quality, and value-driven real estate solutions.",
  },
  {
    id: 2,
    img: Mannat,
    text: "Elegant logo of Orange City showcasing 82 magnificent luxury villas.",
  },
  {
    id: 3,
    img: Orange,
    text: "Mannat Residency luxury living symbolized through elegance, comfort, and royalty.",
  },
];

const ProOverview = () => {
  return (
    <div className="container xl:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
      {ProjectsList.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-3xl px-6 py-4 pb-14 flex flex-col justify-around gap-2 lg:gap-4 group hover:border-secondary duration-300 transition-colors group"
        >
          <div className="w-full h-16 flex items-center justify-start ">
            <img src={item.img} alt="" className="object-cover" />
          </div>
          <div className="space-y-4">
         <div className="relative w-full h-[2px] bg-[#d9d9d9] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[20%] before:h-full before:bg-stride before:transition-all before:duration-1000 before:ease-in-out group-hover:before:w-full"></div>

            <p className="camlecase text-secondary">{item.text}</p>
         <div className="relative w-[25%] h-[2px] bg-stride"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProOverview;
