import React from "react";
import TitleBox from "../../../Components/TitleBox";
import icon1 from "../../../assets/HomePage/SVG/Commitment/icon1.svg";
import icon2 from "../../../assets/HomePage/SVG/Commitment/icon2.svg";
import icon3 from "../../../assets/HomePage/SVG/Commitment/icon3.svg";

const commitmentItems  = [
  {
    id: 1,
    img: icon1,
    title: "Corporate Responsibility",
    desc: "Committed to ethical growth, sustainability, and positive community impact.",
  },
  {
    id: 2,
    img: icon2,
    title: "Experts with Team Spirit",
    desc: "Respect, belonging, fairness, opportunity, understanding, empowerment.",
  },
  {
    id: 3,
    img: icon3,
    title: "Diversity, Equity & Inclusion",
    desc: "Unity through respect, equity, and inclusion.",
  },
];

const Commitment = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* 1st column */}
        <div className="h-full bg-secondary/20"></div>

        <div className="space-y-4 p-5">
          <TitleBox title="Our Commitment" />
          <h1>Why we stand out</h1>
          <p>
            We combine innovation, quality, and passion to deliver unique
            solutions that stand out, creating lasting value for every customer.
          </p>
          <ul>
            {commitmentItems .map((item) => (
              <li
                key={item.id}
                className="flex flex-col lg:flex-row items-center text-center lg:text-start justify-around gap-2 md:gap-4 py-5 border-t border-[#D9d9d9]"
              >
                
                <img
                  src={item.img}
                  alt=""
                  className="object-cover pointer-events-none"
                />
                <p className="text-stride camlecase ml-1 lg:w-[40%] ">{item.title}</p>
                <p className="text-base md:text-lg lg:text-xl md:w-2/3 ">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
