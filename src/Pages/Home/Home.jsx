import React from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import SelectProject from "../../Components/SelectProject";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import ProjectScroll from "./Sections/ProjectScroll";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="px-0 rounded-[70px] bg-bg -my-14 py-28">
        <WhoWeAre />
        <ProjectScroll />
        <Commitment />
        <PeopalSay />
        <Enquiry />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
