import React from "react";
import Vision from "../../../assets/HomePage/SVG/money.svg";
import Mission from "../../../assets/HomePage/SVG/mission.svg";
import TitleBox from "../../../Components/TitleBox";
import Countdown from "./Countdown";

const WhoWeAre = () => {
  const items = [
    {
      icon: Vision,
      title: "Our Vision",
      text: "To build a future where technology and creativity unite to shape a better world.",
    },
    {
      icon: Mission,
      title: "Our Mission",
      text: "Creating impact through excellence, integrity, and collaborative client growth.",
    },
  ];

  return (
    <section className="bg-[#F8EFE6]">
      <div className="container space-y-10 pb-12">

      <TitleBox title="Who We Are" />

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 2xl:gap-4"
      >
        <h1 className="lg:text-7xl font-semibold">
          Leading global private real estate investors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-[80%] xl:w-full">
          {items.map((item, index) => (
            <div key={index} className="space-y-5">
              <h2 className="text-stride font-bold flex items-center gap-2">
                <span>
                  <img src={item.icon} alt={item.title} className="h-10" />
                </span>
                {item.title}
              </h2>
              <p className="lg:text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

          </div>
    </section>
  );
};

export default WhoWeAre;
