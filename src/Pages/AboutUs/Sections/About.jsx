import React from "react";
import TitleBox from "../../../Components/TitleBox";
import AboutImg from "../../../assets/AboutPage/PNG/AboutUs.png";
import icon1 from "../../../assets/AboutPage/SVG/Projects.svg";
import icon2 from "../../../assets/AboutPage/SVG/Property.svg";
import icon3 from "../../../assets/AboutPage/SVG/Cost.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutCounter = [
  {
    img: icon1,
    number: 10,
    suffix: "+",
    title: "Projects in development",
  },
  {
    img: icon2,
    number: 18,
    suffix: "m+",
    title: "Square Feet of property",
  },
  {
    img: icon3,
    number: 2.5,
    suffix: "b+",
    title: "Total Projects cost",
  },
];

const About = () => {
  // Track when the counter section enters view
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.2, // 20% of the section visible
  });

  return (
    <div className="">
      {/* About */}
      <div className="container xl:px-0 2xl:px-24 space-y-5 md:space-y-10">
        {/* Title */}
        <div className=" xl:px-5">
          <TitleBox title="About Us" className="border-[#D9D9D9]" />
        </div>

        {/* Text */}
        <div className="xl:px-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <h1 className="leading-">
            Creating the <br /> future, one idea <br /> at a time.
          </h1>

          <div className=" flex flex-col gap-2 justify-between ">
            <p>
              Fill out the form, and our team will contact you soon with more
              information.
            </p>
            <p className="text-lg">
              From clean energy to cutting-edge healthcare, from stadiums to
              data centers, our mission is to design and build environments that
              uplift communities and stand the test of time. Together, we make
              your vision a reality and beyond.
            </p>
          </div>
        </div>

        {/* Image + Counter */}
        <div
          style={{ backgroundImage: `url(${AboutImg})` }}
          className=" w-full rounded-3xl relative bg-center bg-no-repeat bg-cover backdrop-blur-sm"
        >
          <div className=" rounded-3xl grid grid-cols-1 md:grid-cols-2  w-full">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-bg px-14 md:px-28 py-5 lg:py-8 rounded-br-3xl"></div>
            </div>

            {/* Counter section */}
            <div ref={ref} className="pt-40 grid grid-cols-1 md:grid-cols-2 gap-3 p-2 ">
              <div></div>

              {AboutCounter.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 xl:py-8 xl:px-10 rounded-3xl justify-center gap-2 md:gap-10 bg-white"
                >
                  <div className="w-full flex justify-end">
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h1 className="text-6xl md:text-5xl xl:text-6xl">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={item.number}
                          duration={3}
                          decimals={item.number % 1 !== 0 ? 1 : 0}
                        />
                      ) : (
                        0
                      )}
                      {item.suffix}
                    </h1>
                    <p className="text-xs lg:text-xl">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
