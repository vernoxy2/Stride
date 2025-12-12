import React from "react";

const PrimaryAmenities = ({ data = [] }) => {
  return (
    <section className="bg-[#D9D9D9]/30 py-11 ">
    <div className="container space-y-4 md:space-y-8">
      <h1 data-aos="fade-up" className="text-center">Features & Amenities</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y- py-14">
        {data.map((item) => (
          <div
          data-aos="zoom-in"
            key={item.id}
            className=" flex flex-col items-center  rounded-t-3xl pb-16 gap-2 group "
          >
            <div className=" w-fit p-4 rounded-full ">
              <img src={item.img} alt={item.title} className="mx-auto" />
            </div>

            <p className="text-secondary  w-[90%] text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>

    </div>
    </section>
  );
};

export default PrimaryAmenities;
