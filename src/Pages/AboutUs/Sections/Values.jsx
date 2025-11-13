import React from "react";
import TitleBox from "../../../Components/TitleBox";
import HighQualityImg from "../../../assets/AboutPage/SVG/HighQuality.svg";
import CommunityyImg from "../../../assets/AboutPage/SVG/Communityy.svg";
import EnvironmentalImg from "../../../assets/AboutPage/SVG/Environmental.svg";
import InnovationImg from "../../../assets/AboutPage/SVG/Innovation.svg";
import TimelineImg from "../../../assets/AboutPage/SVG/Timeline.svg";
import FreeConsultationImg from "../../../assets/AboutPage/SVG/FreeConsultation.svg";
import IntegrityFairnessImg from "../../../assets/AboutPage/SVG/IntegrityFairness.svg";
import RealPartnershipimg from "../../../assets/AboutPage/SVG/RealPartnership.svg";


const valuesList = [
  {
    id: 1,
    img: HighQualityImg,
    title: "High Quality",
    desc: "We believe every incident is preventable and our results prove it.",
  },
  {
    id: 2,
    img: CommunityyImg,
    title: "Communityy",
    desc: "Where investors and developers shape the future together.",
  },
  {
    id: 3,
    img: EnvironmentalImg,
    title: "Environmental",
    desc: "Our diverse team delivers innovative and sustainable environmental solutions.",
  },
  {
    id: 4,
    img: InnovationImg,
    title: "Innovation",
    desc: "We uphold innovation through transparency and professionalism in all we do.",
  },
  {
    id: 5,
    img: FreeConsultationImg,
    title: "Free Consultation",
    desc: "We uphold innovation through transparency and professionalism in all we do.",
  },
  {
    id: 6,
    img: TimelineImg,
    title: "Timeline",
    desc: "We uphold innovation through transparency and professionalism in all we do.",
  },
  {
    id: 7,
    img: IntegrityFairnessImg,
    title: "Integrity & Fairness",
    desc: "We uphold innovation through transparency and professionalism in all we do.",
  },
  {
    id: 8,
    img: RealPartnershipimg,
    title: "Real Partnership",
    desc: "We uphold innovation through transparency and professionalism in all we do.",
  },

];

const Values = () => {
  return (
    <div className="">
      <div className="container space-y-10">
        <TitleBox title="Our Values" className="border-[#D9D9D9]" />
        <h1 data-aos="fade-up">
          Where quality <br /> meets perfection
        </h1>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-6">
          {valuesList.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="pb-14 flex flex-col justify-around gap-2 lg:gap-4 "
            >
              <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="w-fit h-16 flex items-center justify-start ">
                <img src={item.img} alt="" className="object-cover" />
              </div>
              <div className="space-y-4">
                <hr className="bg-[#B7B7B7] h-[2px] rounded-2xl"/>
                <h2 className="text-stride">{item.title}</h2>
                <p className="camlecase font-[100px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
