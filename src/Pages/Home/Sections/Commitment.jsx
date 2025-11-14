import React from "react";
import TitleBox from "../../../Components/TitleBox";
import icon1 from "../../../assets/HomePage/SVG/Commitment/icon1.svg";
import icon2 from "../../../assets/HomePage/SVG/Commitment/icon2.svg";
import icon3 from "../../../assets/HomePage/SVG/Commitment/icon3.svg";
import video from "../../../assets/HomePage/Video/6615304-uhd_3840_2160_25fps.mp4";
import { CornerClip } from "../../../Components/CornerClip";
import People from "../../../assets/HomePage/SVG/People.svg";
import { Star } from "lucide-react";

const commitmentItems = [
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
      <div  className="container grid grid-cols-1 xl:grid-cols-2 items-center gap-8 space-y-36">
        {/* 1st column */}
        <div data-aos="fade-up" className="relative min-h-[600px]  h-full w-full  ">
          {/* Video background */}
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full rounded-3xl object-cover"
          />

          {/* Overlay div */}
          <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 lg:translate-x-0  p-5  lg:-left-14 h-52 w-52 md:h-60 md:w-60 lg:h-72 lg:w-72 rounded-full backdrop-blur bg-white/50 flex items-center justify-center text-center flex-col gap-1.5 md:gap-3 shadow-lg">
            <h1 className="text-secondary font-bold mb-1">4.9</h1>

            <img src={People} alt="" />

            {/* Stars */}
            <div className="flex gap-1">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            </div>

            <p className="font-bold">2.1k Followers</p>
          </div>

          {/* Corner clip */}
          <div className="absolute right-0 bg-bg px-20 lg:px-28 h-20 rounded-es-3xl">
            <CornerClip
              className="rotate-180"
              positions={[
                { top: 0, left: -24 },
                { bottom: -24, right: 0 },
              ]}
            />
          </div>
        </div>

        <div className="space-y-4 ml-auto xl:ps-7 2xl:ps-16">
          <TitleBox title="Our Commitment" />
          <h1 data-aos="fade-up" className="">Why we stand out</h1>
          <p data-aos="fade-up">
            We combine innovation, quality, and passion to deliver unique
            solutions that stand out, creating lasting value for every customer.
          </p>
          <ul>
            {commitmentItems.map((item) => (
              <li
              data-aos="fade-up"
                key={item.id}
                className="flex flex-row items-start text-start justify-start gap-2 md:gap-5 py-4 border-t border-[#D9d9d9]"
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-cover pointer-events-none"
                />
                <p className="text-stride font-bold camlecase lg:w-[40%] ">
                  {item.title}
                </p>
                <p className="text-base md:text-lg lg:text-xl md:w-2/3 ">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
