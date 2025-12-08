import React from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import SelectProject from "../../Components/SelectProject";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import { projects } from "../../Data/Projects";
// import ProjectScroll from "./Sections/ProjectScroll";
import DisplayAura from "../../assets/HomePage/PNG/DisplayAura.png";
import DisplayTextAura from "../../assets/HomePage/SVG/AuraText.svg";
import { motion } from "framer-motion";
import Animation from "../../hooks/Animation";
import ProOverview from "./Sections/ProOverview";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-0 rounded-[70px] bg-bg -my-14 py-28">
        <ProOverview/>  
        <WhoWeAre />
        <Animation />
        <Commitment />
        <PeopalSay />
        <Enquiry />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
