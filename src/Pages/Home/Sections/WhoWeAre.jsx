import React from "react";
import Vision from "../../../assets/HomePage/SVG/money.svg";
import Mission from "../../../assets/HomePage/SVG/mission.svg";
import TitleBox from "../../../Components/TitleBox";
import Countdown from "./Countdown";

const WhoWeAre = () => {
  return (
    <section>
      <section>
        <div className="container md:flex justify-start gap-6">
          <div className="md:w-[50%] py-5">
            <TitleBox title="Who We Are" />
          </div>
          <div className="md:w-[50%] space-y-10">
            <h1 className="lg:text-7xl">
              Leading global private real estate investors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <h2 className="text-stride flex items-center gap-3"><span><img src={Vision} alt="" /></span>Our Vision</h2>
                <p className="lg:text-xl">
                  To build a future where technology and creativity unite to
                  shape a better world.
                </p>
              </div>
              <div className="space-y-5">
                <h2 className="text-stride flex items-center gap-3"><span><img src={Mission} alt="" /></span>Our Mission</h2>
                <p className="lg:text-xl">
                  Creating impact through excellence, integrity, and
                  collaborative client growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Countdown />
      </section>
    </section>
  );
};

export default WhoWeAre;
