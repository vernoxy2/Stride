import React from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import SelectProject from "./Sections/SelectProject";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import { projects } from "../../Data/Projects";


const Home = () => {
  return (
    <div>
      <Header />

      <div className="px-0 rounded-[70px] bg-bg -my-14 py-28">
        <WhoWeAre />

        {projects.map((project, index) => (
          <SelectProject
            key={index}
            Display={project.Display}
            DisplayText={project.DisplayText}
            Maintext={project.Maintext}
            address={project.address}
          />
        ))}

        <Commitment />
        <PeopalSay />
        <Enquiry />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
