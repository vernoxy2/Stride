import React from "react";
import Bus from "../../../../assets/ProjectPage/OrangeCity/SVG/bus.svg";

const amenitiesList = [
  {
    id: 1,
    img: Bus,
    title: "Drop of zone",
  },
  {
    id: 2,
    img: Bus,
    title: "Drop of zone",
  },
  {
    id: 3,
    img: Bus,
    title: "Drop of zone",
  },
  {
    id: 4,
    img: Bus,
    title: "Drop of zone",
  },
];

const Amenities = () => {
  return (
    <div className="container space-y-4 md:space-y-8">
      <h1 className="text-center">Features & amenities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-14">
        {amenitiesList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center 
                 bg-gradient-to-b from-[#D9D9D9] to-transparent  
                 rounded-t-3xl pb-16 gap-2 
                 group 
                 hover:from-stride hover:to-transparent 
                 transition-all duration-300 
                 transform hover:-translate-y-3"
          >
            <div
              className="bg-secondary w-fit p-4 rounded-full -mt-14 
                      group-hover:bg-stride 
                      duration-300 
                      border-8 border-bg 
                      transition-colors"
            >
              <img src={item.img} alt="" className="mx-auto" />
            </div>
            <h2 className="text-secondary group-hover:text-white transition-colors">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
        <hr className="h-[1.5px] bg-[#D9D9D9]" />

    </div>
  );
};

export default Amenities;
