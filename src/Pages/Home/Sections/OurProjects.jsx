import React from "react";
import TitleBox from "../../../Components/TitleBox";
import { projects } from "../../../Data/Projects";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const OurProjects = () => {
  return (
    <section className="container py-0">
      <TitleBox title="Our Projects" className="mx-auto" />

      <h1 className="font-semibold text-center">
        Creative brilliance, <br /> lasting effect.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 group">
            {/* Entire card clickable but valid structure */}
            <Link to={item.link} className="block">
              <div className="overflow-hidden relative">
                <img
                  src={item.Display}
                  alt={item.Maintext}
                  className="object-cover group-hover:scale-105 duration-300"
                />

                <div className="p-4 gap-5 bg-stride flex items-center absolute bottom-0 right-0 left-0 w-full opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-full duration-300">
                  <h1 className="text-outline font-helvetica">{item.id}</h1>
                  <p className="text-white font-poppins">{item.Maintext}</p>
                </div>

                <BsArrowRightShort className="absolute top-4 right-4 text-secondary bg-white text-3xl md:text-4xl rounded-full group-hover:-rotate-45 duration-300" />
              </div>

              <div className="flex gap-4 items-start mt-3">
                <CiLocationOn className="text-stride h-full w-14" />
                <p className="w-[80%]">{item.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
